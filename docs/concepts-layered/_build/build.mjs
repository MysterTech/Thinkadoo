// Static generator: node docs/concepts-layered/_build/build.mjs [concept ...]
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './kit.mjs';
import * as B from './blocks.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const want = process.argv.slice(2);
const concepts = [];
for (const [id, mod, key] of [['theatre', './theatre.mjs', 'theatre'], ['playroom', './playroom.mjs', 'playroom'], ['mela-road', './mela-road.mjs', 'road'], ['sticker-book', './sticker-book.mjs', 'sticker']]) {
  if (want.length && !want.includes(id)) continue;
  try { const m = await import(mod); concepts.push([id, m[key]]); } catch (e) { if (e.code === 'ERR_MODULE_NOT_FOUND' && String(e.message).includes(mod.slice(2))) console.log('skip', id, '(not written yet)'); else throw e; }
}
for (const [id, c] of concepts) {
  mkdirSync(join(root, id), { recursive: true });
  for (const p of PAGES) {
    const out = c.pages[p.id]();
    const html = B.shell({
      concept: id, page: p.id, title: out.title, desc: out.desc, bodyCls: out.bodyCls || '', transition: c.transition, fonts: c.fonts,
      header: (c.header || B.header)({ page: p.id, logo: c.logo }), main: out.main, footer: (c.footer || B.footer)({ logo: c.logo }),
      scriptsAfter: c.script ? `<script src="${id}.js?v=${Date.now().toString(36)}"></script>` : '', headExtra: out.headExtra || '',
    });
    writeFileSync(join(root, id, p.file), html);
  }
  console.log('built', id, PAGES.length, 'pages');
}
