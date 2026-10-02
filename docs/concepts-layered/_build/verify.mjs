// Copy fidelity + structure gate. node docs/concepts-layered/_build/verify.mjs
// 1) every line of the content deck appears in each concept's pages (editorial marks excluded)
// 2) no long visible sentence exists that is not in the deck or in the interface allowlist
// 3) structure: one h1, nav routes exist and are distinct, no header hash links, img alt, no third-party scripts
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ui, footerPolicies, nav } from './content.mjs';
import { edits, banned } from './copy-edits.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const repo = join(root, '..', '..');
const snapshot = readFileSync(join(repo, 'docs/research/2026-10-02-website-content.md'), 'utf8');
const CONCEPTS = ['theatre', 'playroom', 'mela-road', 'sticker-book'];
const PAGES = ['index', 'shop', 'mela-truck', 'paint-my-god', 'workshops', 'our-story', 'contact', 'cart'];

const fold = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[‐‑–]/g, '-').replace(/ /g, ' ').replace(/:/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

// ---- the deck
let body = snapshot.split('This is the complete normalized source text.')[1].split('\n').slice(1).join('\n');
for (const [a, b] of edits) { if (!body.includes(a)) console.log('  note: edit source not found in snapshot:', a); body = body.split(a).join(b); } // the edited deck
const deckLines = [];
const IGNORE = new Set(['home', 'shop', 'workshops', 'contact', 'cart', 'community', 'tab', 'other products', 'large visual cards', 'shop/workshop', 'upcoming workshops (tab)']);
for (let raw of body.split('\n')) {
  let l = raw.replace(/^\s*\d+\.\s+(?=[A-Z#*])/, (m) => m).trim();
  if (!l) continue;
  if (/^(seo keywords|large photographs|"we can have a video carousel)/i.test(l) || /^[“"]we can have/i.test(l)) continue;
  if (/\[[^\]]*\]/.test(l)) continue;            // bracketed placeholders / buttons
  if (/→\s*(products|experiences)$/i.test(l)) continue;
  l = l.replace(/\s*\([^)]*\)\s*$/, '').trim();     // editorial parenthetical at end of line
  l = l.replace(/ - Product description$/i, '').trim();
  l = l.replace(/^✓\s*/, '');
  if (!l || IGNORE.has(fold(l))) continue;
  deckLines.push(l);
}
const deckFold = fold(body.replace(/\([^)]*\)/g, ' '));
const uiStrings = Object.values(ui).filter((v) => typeof v === 'string').concat(nav.map((n) => n.label), footerPolicies.map((p) => p.label), ['Home', 'Mela Passport', 'Upcoming workshops', 'MELA', 'PASSPORT', 'Price to be confirmed', 'Email to be added']).map(fold);
const extraAllowed = ['3 of 7 stickers', '0 of 7 stickers'].map(fold);

// ---- page text extraction (visible text only, one chunk per block)
function chunks(html) {
  let h = html.replace(/<head[\s\S]*?<\/head>/i, '').replace(/<(script|style|template|dialog)[\s\S]*?<\/\1>/gi, ' ').replace(/<svg[\s\S]*?<\/svg>/gi, '');
  h = h.replace(/<(p|li|h[1-6]|dt|dd|div|section|article|button|a|ul|ol|header|footer|nav|main|figure|figcaption|label|td|tr|br|span\s+class="(?:ln|env-num|card-name|card-line|sign-tab)")[^>]*>/gi, '\n').replace(/<\/(p|li|h[1-6]|dt|dd|div|section|article|button|a|ul|ol|header|footer|nav|main|figure|figcaption|label|td|tr)>/gi, '\n');
  h = h.replace(/<[^>]+>/g, '');
  return decode(h).split('\n').map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
}
function allText(html) { return decode(html.replace(/<head[\s\S]*?<\/head>/i, '').replace(/<(script|style|template)[\s\S]*?<\/\1>/gi, ' ').replace(/<svg[\s\S]*?<\/svg>/gi, '').replace(/<\/(p|li|h[1-6]|dt|dd|div|section|article|button|a|header|footer|nav|ul|ol)>/gi, ' \n ').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '')); }

let failed = 0;
const parity = {};
const PASSPORT_LINES = new Set(['your very own mela passport.', 'complete an activity, earn its sticker and collect them all.']); // Sticker Book's Passport dialog reuses these on every page
const fail = (m) => { failed++; console.log('  FAIL', m); };
const warn = (m) => console.log('  warn', m);

console.log(`deck lines checked: ${deckLines.length}`);
for (const c of CONCEPTS) {
  console.log(`\n== ${c}`);
  if (!existsSync(join(root, c, 'index.html'))) { fail('missing concept folder'); continue; }
  const pages = {};
  for (const p of PAGES) {
    const f = join(root, c, p + '.html');
    if (!existsSync(f)) { fail(`${p}.html missing`); continue; }
    pages[p] = readFileSync(f, 'utf8');
  }
  const union = fold(Object.values(pages).map(allText).join(' \n '));
  // 1) deck coverage
  const missing = deckLines.filter((l) => !union.includes(fold(l)));
  missing.forEach((l) => fail(`deck line missing: "${l}"`));
  // 1b) original wording must not survive anywhere (text or attributes)
  for (const [p, html] of Object.entries(pages)) banned.forEach((w) => { if (html.includes(w)) fail(`${p}: pre-edit wording survives: "${w}"`); });
  // 1c) per-page deck coverage, compared across concepts below
  for (const [p, html] of Object.entries(pages)) { const t = fold(allText(html)); parity[p] ??= {}; parity[p][c] = new Set(deckLines.filter((l) => fold(l).split(' ').length >= 4 && !PASSPORT_LINES.has(fold(l)) && t.includes(fold(l))).map(fold)); }
  // 2) invented copy
  const seen = new Set();
  for (const [p, html] of Object.entries(pages)) {
    for (const ch of chunks(html)) {
      const f = fold(ch);
      const nWords = f.split(' ').length;
      if (nWords < 5 || seen.has(f)) continue;
      if (deckFold.includes(f)) continue;
      if (uiStrings.some((u) => f.includes(u) || u.includes(f)) || extraAllowed.includes(f)) continue;
      // chunk assembled from several deck lines (e.g. a list rendered inline)
      const parts = ch.split(/(?<=[.?!])\s+/).map(fold).filter(Boolean);
      if (parts.length > 1 && parts.every((x) => deckFold.includes(x) || uiStrings.some((u) => u.includes(x)))) continue;
      seen.add(f);
      fail(`${p}: text not in deck: "${ch.slice(0, 110)}"`);
    }
  }
  // 3) structure
  for (const [p, html] of Object.entries(pages)) {
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) fail(`${p}: ${h1} <h1>`);
    const header = (html.match(/<header[\s\S]*?<\/header>/) || [''])[0];
    const hrefs = [...header.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => m[1]);
    hrefs.filter((h) => h.startsWith('#')).forEach((h) => fail(`${p}: header hash link ${h}`));
    nav.forEach((n) => { if (!existsSync(join(root, c, n.href))) fail(`${p}: nav target ${n.href} missing`); });
    if (new Set(nav.map((n) => n.href)).size !== nav.length) fail('nav hrefs not distinct');
    const cur = (header.match(/aria-current="page"/g) || []).length;
    if (p !== 'index' && p !== 'mela-truck' && p !== 'paint-my-god' && cur < 1) fail(`${p}: no aria-current in header`);
    [...html.matchAll(/<img\b[^>]*>/g)].forEach((m) => { if (!/\balt="/.test(m[0])) fail(`${p}: img without alt`); });
    [...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)].forEach((m) => { if (/^https?:/.test(m[1])) fail(`${p}: third-party script ${m[1]}`); });
    [...html.matchAll(/(?:href|src)="([^"#?]+\.(?:html|css|js|png))"/g)].forEach((m) => {
      if (/^https?:|^data:/.test(m[1])) return;
      if (!existsSync(join(root, c, m[1]))) fail(`${p}: broken local ref ${m[1]}`);
    });
    if (!/<meta name="viewport"/.test(html)) fail(`${p}: no viewport meta`);
    if (!/data-motion-toggle/.test(html)) fail(`${p}: no motion toggle`);
  }
}
console.log('\n== parity: same deck lines on the same page in every concept');
for (const [p, byC] of Object.entries(parity)) {
  const names = Object.keys(byC); const ref = byC[names[0]];
  for (const c of names.slice(1)) {
    const miss = [...ref].filter((x) => !byC[c].has(x)), extra = [...byC[c]].filter((x) => !ref.has(x));
    if (miss.length || extra.length) fail(`${p}: ${c} differs from ${names[0]} (missing ${miss.length}, extra ${extra.length}) e.g. ${(miss[0] || extra[0] || '').slice(0, 70)}`);
  }
}
console.log(failed ? `\n${failed} problem(s)` : '\nall checks passed');
process.exit(failed ? 1 : 0);
