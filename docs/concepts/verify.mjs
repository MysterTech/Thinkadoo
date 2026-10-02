import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const requested = process.argv.slice(2);
const names = requested.length ? requested : ['01-makers-table.html', '02-playroom.html', '03-craft-journal.html', '04-paper-theatre.html'];
const base = path.dirname(fileURLToPath(import.meta.url));
let errors = 0;
for (const name of names) {
  const file = requested.length ? path.resolve(name) : path.join(base, name);
  if (!fs.existsSync(file)) { console.error(`${name}: missing`); errors++; continue; }
  const html = fs.readFileSync(file, 'utf8');
  const checks = [
    [/<html[^>]*lang=["']en["']/i.test(html), 'English document language'],
    [/<meta[^>]*name=["']viewport["']/i.test(html), 'responsive viewport'],
    [/<main[\s>]/i.test(html), 'main landmark'],
    [(html.match(/<h1[\s>]/gi) || []).length === 1, 'one h1'],
    [/prefers-reduced-motion/.test(html), 'reduced-motion handling'],
    [/focus-visible/.test(html), 'visible keyboard focus'],
    [/preview|concept/i.test(html), 'concept disclosure'],
    [!/href=["']#["']/.test(html), 'no dead hash links'],
    [!/checkout\.razorpay\.com/.test(html), 'no live payment SDK'],
  ];
  for (const [ok, label] of checks) if (!ok) { console.error(`${name}: ${label}`); errors++; }
  const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m => m[1]));
  for (const m of html.matchAll(/href=["']#([^"']+)["']/g)) if (!ids.has(m[1])) { console.error(`${name}: missing anchor ${m[1]}`); errors++; }
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/application\/(ld\+)?json/.test(m[1])) continue;
    try { new vm.Script(m[2], {filename:name}); } catch(e) { console.error(e.message); errors++; }
  }
  console.log(`${name}: inspected ${html.length} characters`);
}
if (errors) { console.error(`${errors} finding(s)`); process.exitCode = 1; }
else console.log('All four concept structure and JavaScript checks passed. Browser verification remains separate.');
