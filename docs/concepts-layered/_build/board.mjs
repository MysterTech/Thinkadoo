// Review board (documentation, not site copy). node _build/board.mjs
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = [['index', 'Home'], ['shop', 'Shop'], ['mela-truck', 'Mela Truck'], ['paint-my-god', 'Paint My God'], ['workshops', 'Workshops'], ['our-story', 'Our Story'], ['contact', 'Contact'], ['cart', 'Cart']];
const concepts = [
  { id: 'theatre', n: 'A', name: 'The Paper Theatre', tag: 'Curtain up', img: 'theatre', accent: '#201b4a', ink: '#fff',
    idea: 'A navy proscenium. The headline sits above a four-plane stage; scrolling is a camera push toward it. The tabs change the set.',
    layers: ['Backdrop: arch, sky, halo', 'Middle: hills, wheel, stalls, bunting', 'Principal: the Mela Truck and a Ganesha', 'Foreground: curtains, footlights, props'],
    try: [['Scroll the hero', 'Planes grow by unequal amounts, curtains part, wheels turn: depth you can read.'], ['Click WORKSHOP', 'Flats fly out and the craft-table set drops in: the tab is a different scene.'], ['Hover the truck', 'It lifts and a name tag drops: it is a link, and this is where it goes.'], ['Open an envelope (Mela page)', 'The flap lifts, the envelope moves to the spotlight, the activity performs.'], ['Click any link', 'Curtains close and open: you are changing scene.']] },
  { id: 'playroom', n: 'B', name: 'The Playroom', tag: 'A room that gets painted', img: 'playroom', accent: '#2960ad', ink: '#fff',
    idea: 'A cobalt room. Every toy starts as a paper sketch and the scroll paints it, brush and all. The tabs pan to the craft-table room.',
    layers: ['Backdrop: wall and round window', 'Middle: two shelves, books, plant', 'Principal: the toys (Ganesha, kaleidoscope, truck, puppet, wheel)', 'Foreground: rug, fan, the brush'],
    try: [['Scroll the hero', 'Toys are painted left to right and the brush travels with the colour: kits begin blank.'], ['Hover the truck or Ganesha', 'It lifts, a tag appears, and a blank toy paints itself.'], ['Click WORKSHOP', 'The camera pans to the neighbouring room, planes at different speeds.'], ['Scroll into the hands sentence', 'Four handprints stamp in, once.'], ['Open an envelope (Mela page)', 'Cubbies: it slides half out on hover, fully out on choosing.']] },
  { id: 'mela-road', n: 'C', name: 'The Mela Road', tag: 'Drive to the stall', img: 'road', accent: '#fcda00', ink: '#201b4a',
    idea: 'A pinned side-scroll. The truck stays put while four planes slide past. SHOP and WORKSHOP are destinations on the road.',
    layers: ['Backdrop: sky and clouds (0.08×)', 'Far: wheel and tents (0.28×)', 'Stalls and signs, truck fixed (1×)', 'Near: bunting and passers-by (1.38×)'],
    try: [['Scroll the hero', 'The headline billboard drives past, then the Shop stall, the Workshop stall, the hands sentence, the drive-in reel.'], ['Click WORKSHOP', 'The camera glides to that stall and its sign lights up.'], ['Mela page: scroll the passage', 'Each line (bright colours, little stalls…) arrives together with its object.'], ['Mela page: Ferris wheel', 'The wheel turns to bring the chosen activity to the bottom.'], ['Any sub-page', 'The truck drives off as the stalls park into view.']] },
  { id: 'sticker-book', n: 'D', name: 'The Sticker Book', tag: 'Collect the passport', img: 'sticker', accent: '#5cba47', ink: '#201b4a',
    idea: 'Die-cut stickers on cream sheets on a green desk. A deck you can drag, sheets that step back as the next lands, and a Passport that fills.',
    layers: ['Desk and tone-on-tone type field', 'The cream sheet with the headline', 'The deck: three die-cut cards', 'Loose stickers over the sheet edge'],
    try: [['Drag the top card', 'Flick it away: the next kit rises. The visible edges say how many there are.'], ['Click WORKSHOP', 'Bookbinding moves to the top of the deck.'], ['Scroll the home page', 'Each sheet steps back and dims as the next covers it.'], ['Mela page: open envelopes', 'Each one earns its sticker in the Passport, and the count follows you across pages.'], ['Hover a card', 'The corner starts to peel.']] },
];
const card = (c) => `<article class="c" style="--a:${c.accent};--i:${c.ink}">
<header><span class="n">${c.n}</span><div><h2>${c.name}</h2><p class="tag">${c.tag}</p></div></header>
<a class="shot" href="${c.id}/index.html"><img src="assets/preview-${c.img}-1.jpg" alt="${c.name}: home page at rest" loading="lazy"><img class="s2" src="assets/preview-${c.img}-2.jpg" alt="${c.name}: a signature moment" loading="lazy"></a>
<p class="idea">${c.idea}</p>
<div class="cols"><section><h3>Four planes</h3><ol>${c.layers.map((l) => `<li>${l}</li>`).join('')}</ol></section>
<section><h3>Try, and why it moves</h3><dl>${c.try.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl></section></div>
<nav aria-label="${c.name} pages">${pages.map(([f, l]) => `<a href="${c.id}/${f}.html">${l}</a>`).join('')}</nav></article>`;
writeFileSync(join(root, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Thinkadoo: four layered concepts</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito+Sans:wght@400;700;800&display=swap" rel="stylesheet">
<style>
:root{--navy:#201b4a;--paper:#fffdf8;--yellow:#fcda00;--red:#ef3a24;--teal:#32c3e0}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--navy);font:400 1.05rem/1.55 "Nunito Sans",system-ui,sans-serif}
a{color:inherit}.w{width:min(1240px,100%);margin-inline:auto;padding-inline:clamp(16px,3vw,40px)}
header.top{background:var(--navy);color:#fff;padding:clamp(28px,5vw,56px) 0}
h1{margin:0;font:800 clamp(2.2rem,5vw,4.2rem)/1 "Baloo 2",sans-serif;color:var(--yellow)}
.lede{max-width:70ch;margin:.7em 0 0;font-size:1.15rem}
.rules{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:22px}
.rules div{background:rgba(255,255,255,.08);border-radius:14px;padding:14px 16px;font-size:.95rem}.rules b{display:block;color:var(--yellow);font:800 1.1rem "Baloo 2",sans-serif}
main{padding:clamp(28px,4vw,56px) 0 64px;display:grid;gap:clamp(28px,4vw,56px)}
.c{background:#fff;border:4px solid var(--navy);border-radius:26px;box-shadow:10px 10px 0 var(--a);padding:clamp(18px,3vw,34px);display:grid;gap:18px}
.c>header{display:flex;gap:16px;align-items:center}.n{display:grid;place-items:center;width:56px;height:56px;border-radius:14px;background:var(--a);color:var(--i);font:800 1.8rem "Baloo 2",sans-serif;border:3px solid var(--navy)}
h2{margin:0;font:800 clamp(1.6rem,3vw,2.3rem)/1 "Baloo 2",sans-serif}.tag{margin:.1em 0 0;font-weight:700;opacity:.75}
.shot{position:relative;display:block;border:3px solid var(--navy);border-radius:16px;overflow:hidden;aspect-ratio:16/10;background:var(--navy)}
.shot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .35s}.shot .s2{opacity:0}.shot:hover .s2,.shot:focus-visible .s2{opacity:1}
.idea{margin:0;font-size:1.12rem;font-weight:700;max-width:78ch}
.cols{display:grid;grid-template-columns:minmax(0,.7fr) minmax(0,1.3fr);gap:24px}
h3{margin:0 0 6px;font:800 1.15rem "Baloo 2",sans-serif}ol{margin:0;padding-left:1.2em}li{margin:.2em 0}
dl{margin:0;display:grid;grid-template-columns:max-content 1fr;gap:6px 16px}dt{font-weight:800}dd{margin:0}
nav{display:flex;flex-wrap:wrap;gap:8px}nav a{padding:.45em 1em;border:3px solid var(--navy);border-radius:999px;text-decoration:none;font-weight:800;background:var(--yellow)}nav a:hover{background:var(--navy);color:#fff}
nav a:focus-visible,.shot:focus-visible{outline:4px solid var(--red);outline-offset:3px}
footer{background:var(--navy);color:#fff;padding:28px 0;font-size:.95rem}footer a{color:var(--yellow)}
@media (max-width:860px){.cols{grid-template-columns:1fr}dl{grid-template-columns:1fr}dt{margin-top:.5em}}
</style></head><body>
<header class="top"><div class="w"><h1>Four layered concepts</h1>
<p class="lede">Each home page is one staged scene of four planes, with one story that scroll, hover and tabs serve. Every moving thing has a job; anything else was removed. All four read from one copy file, and each has the same eight pages.</p>
<div class="rules"><div><b>Five jobs for motion</b>Reveal, explain, depth, feedback, transition. Nothing else moves.</div><div><b>Hover previews the click</b>Only things that do something react, and they show where they go.</div><div><b>Facts stay still</b>Prices, details and contact routes never animate.</div><div><b>Motion toggle</b>Header, every page. Off also follows your system setting, and nothing animates.</div></div></div></header>
<main class="w">${concepts.map(card).join('')}</main>
<footer><div class="w">Prototypes, not a live store. Cart and Passport state is shared across the four concepts in this browser. Contract: <a href="../design/2026-10-03-layered-concepts.md">layered-concepts</a> · copy edits: <a href="../design/2026-10-03-copy-polish.md">copy-polish</a> · reference study: <a href="../research/2026-10-03-reference-behaviour-to-purpose.md">behaviour to purpose</a>. Illustrations are newly authored SVG; no photography or video exists yet, so reel clips are marked "Illustrated preview".</div></footer>
</body></html>`);
console.log('board written');
