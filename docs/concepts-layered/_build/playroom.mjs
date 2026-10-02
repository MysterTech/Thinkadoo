// Concept B: THE PLAYROOM. A cobalt room whose toys start as paper sketches; scrolling paints them.
import { O, Sc, svg, esc, smart, icon, content, C } from './kit.mjs';
import * as B from './blocks.mjs';

const { ui, home, shop, mela, paint, workshops, about, community, contact } = content;
const W = 3400, H = 760;
const g = (art, x, y, s = 1, cls = '', extra = '') => { const a = typeof art === 'function' ? art() : art; return `<g class="${cls}" transform="translate(${x} ${y}) scale(${s})" ${extra}>${a.body}</g>`; };
const dx = (n, inner) => `<g transform="translate(${n} 0)">${inner}</g>`;
const words = (txt, cls = '') => txt.split(' ').map((w, i) => `<span class="w ${cls}" style="--i:${i}">${esc(w)}</span>`).join(' ');

// paper-sketch twin of an illustration: every colour becomes paper, outlines stay deep blue
const blankBody = (body) => body
  .replace(/fill="#(?!201b4a)[0-9a-fA-F]{3,6}"/g, 'fill="#fffdf8"')
  .replace(/fill="var\(--figure,#fcda00\)"/g, 'fill="#fffdf8"')
  .replace(/stroke="#(?!201b4a)[0-9a-fA-F]{3,6}"/g, 'stroke="#c9cde4"');

// A toy lives twice: .blank (sketch) and .color (clipped; revealed by scroll or by hover/focus)
function toy({ art, x, y, s, t, href, label, tagText, hit, cls = '', speed = 6 }) {
  const a = typeof art === 'function' ? art() : art;
  const tr = `translate(${x} ${y}) scale(${s})`;
  const body = `<g class="blank" transform="${tr}">${blankBody(a.body)}</g><g class="color" transform="${tr}">${a.body}</g>`;
  const style = `--t:${t.toFixed(3)};--k:${speed}`;
  if (!href) return `<g class="toy ${cls}" style="${style}">${body}</g>`;
  const [hx, hy, hw, hh] = hit;
  const tw = 250;
  const tag = `<g transform="translate(${hx + hw / 2 - tw / 2} ${hy - 6})"><g class="tag"><path d="M${tw / 2} -22V4" stroke="#201b4a" stroke-width="4" fill="none"/><rect x="0" y="4" width="${tw}" height="54" rx="27" fill="${C.yel}" stroke="#201b4a" stroke-width="5"/><text x="${tw / 2}" y="42" text-anchor="middle" font-size="30" font-weight="700" fill="#201b4a">${esc(tagText)}</text></g></g>`;
  return `<a class="toy toy-link ${cls}" href="${href}" aria-label="${esc(label)}" style="${style}"><rect class="hit" x="${hx}" y="${hy}" width="${hw}" height="${hh}" fill="transparent"/><g class="lift">${body}</g>${tag}</a>`;
}

const wall = (x = 0) => `<rect x="${x}" y="0" width="1600" height="640" fill="${C.blu}"/>`;
const floor = (x = 0, col = C.grn, ext = 0) => `<g transform="translate(${x} 0)"><path d="M${-ext} 640H${1600 + ext}V${760 + ext}H${-ext}Z" fill="${col}" stroke="#201b4a" stroke-width="5"/><rect x="${-ext}" y="618" width="${1600 + 2 * ext}" height="26" fill="${C.yel}" stroke="#201b4a" stroke-width="5"/><path d="M80 700H1520" stroke="${C.paper}" stroke-width="5" stroke-dasharray="26 18" stroke-linecap="round" opacity=".75"/></g>`;
const pw = (cls, inner, d, label = '') => `<div class="pan ${cls}" style="--d:${d}"><svg class="plane" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMinYMid meet" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'} focusable="false" xmlns="http://www.w3.org/2000/svg">${inner}</svg></div>`;

// ------------------------------------------------------------------ HOME room: two rooms side by side
const X = { gan: 211, kal: 439, truck: 800, leo: 1186, fer: 1405 };
const tOf = (x) => 0.08 + 0.74 * (x - X.gan) / (X.fer - X.gan);
function shopRoom() {
  const p0 = wall() + g(Sc.windowRound, 672, 178, .56);
  const p1 = `${g(Sc.shelf({ w: 470 }), 70, 330)}${g(Sc.shelf({ w: 470 }), 1060, 330)}${g(Sc.shelf({ w: 940 }), 330, 566)}${g(Sc.books, 372, 470, .8)}${g(Sc.plant, 1150, 406, .8)}${g(Sc.jar(C.teal), 1250, 480, .8)}`;
  const p2 =
    toy({ art: O.ganesha, x: 110, y: 139, s: .42, t: tOf(X.gan), href: 'paint-my-god.html', label: 'Paint My God', tagText: 'Paint My God', hit: [110, 139, 202, 196] }) +
    toy({ art: O.kaleido, x: 330, y: 195, s: .42, t: tOf(X.kal) }) +
    toy({ art: O.truck, x: 569, y: 317, s: .66, t: tOf(X.truck), href: 'mela-truck.html', label: 'Mela Truck', tagText: 'Mela Truck', hit: [569, 317, 462, 260] }) +
    toy({ art: O.leopard, x: 1090, y: 138, s: .46, t: tOf(X.leo) }) +
    toy({ art: O.ferris, x: 1330, y: 156, s: .34, t: tOf(X.fer) });
  return { p0, p1, p2 };
}
function workRoom() {
  const p0 = wall() + g(Sc.windowRound, 600, 120, .6);
  const p1 = `${g(Sc.shelf({ w: 420 }), 90, 300)}${g(Sc.jar(C.red), 130, 196, .85)}${g(Sc.jar(C.grn), 214, 196, .85)}${g(Sc.books, 310, 190, .8)}${g(Sc.shelf({ w: 420 }), 1090, 300)}${g(Sc.plant, 1140, 120, .8)}${g(Sc.jar(C.yel), 1300, 196, .85)}`;
  const p2 = `${g(Sc.table, 250, 400, 1.2)}${g(O.paintPot, 330, 345, .62)}${toy({ art: O.notebook, x: 590, y: 195, s: .66, t: 0, href: 'workshops.html', label: 'Bookbinding', tagText: 'BOOKBINDING', hit: [590, 195, 344, 240], cls: 'toy-static' })}${g(O.markers, 1040, 312, .62)}${g(O.scissors, 1230, 346, .42)}`;
  return { p0, p1, p2 };
}
const corners = (cols) => `<g class="garland">${g(Sc.bunting({ w: 400, sag: 64, n: 6, colors: cols }), -16, -10)}${g(Sc.bunting({ w: 400, sag: 64, n: 6, colors: cols }), 1216, -10)}</g>`;
const p3Shop = () => `${corners([C.red, C.yel, C.teal, C.paper, C.grn])}
<ellipse cx="800" cy="716" rx="500" ry="30" fill="${C.red}" stroke="#201b4a" stroke-width="5"/><ellipse cx="800" cy="716" rx="400" ry="20" fill="none" stroke="${C.yel}" stroke-width="5" stroke-dasharray="22 14"/>
${g(O.fan, 30, 540, .8)}${g(O.paintPot, 1470, 600, .7)}
<g class="brush" style="--x0:211;--x1:1405">${g(O.brush, 0, 0, .62)}</g>`;
const p3Work = () => `${corners([C.teal, C.yel, C.red, C.paper, C.grn])}${g(O.paintPot, 60, 600, .8)}${g(O.brush, 190, 520, .6)}${g(O.flower(C.red), 1480, 640, .5)}`;

function homePage() {
  const s = shopRoom(), w = workRoom();
  const D = [1300, 1450, 1600, 1760];
  const rm = (k, a, b) => `<g class="r1">${a}</g><g class="r2" transform="translate(${D[k]} 0)">${b}</g>`;
  const planes = pw('p0', rm(0, s.p0, w.p0), D[0]) +
    pw('p1', rm(1, s.p1, w.p1), D[1]) +
    `<div class="room-title-wrap"><h1 class="room-title" id="home-title"><span class="hl hl-w">${words('A brighter,')}</span> <span class="hl hl-y">${words('kinder,')}</span> <span class="hl hl-w">${words('more creative')}</span> <span class="hl hl-y">${words('world begins with')}</span> <span class="hl hl-w">${words('small hands.')}</span></h1><p class="room-subline">${smart(home.subline)}</p></div>` +
    pw('p2', rm(2, floor(0) + s.p2, floor(0) + w.p2), D[2], 'A playroom. On the shelves a Ganesha, a kaleidoscope, a Mela Truck, a leopard puppet and a Ferris wheel start as paper sketches and are painted in colour as you scroll. The Ganesha and the truck are links. The Workshop tab pans to a craft table with a notebook.') +
    pw('p3', rm(3, p3Shop(), p3Work()), D[3]);
  const tabs = B.homeTabs();
  const hero = `<section class="scene room-hero" data-scene data-rest="1" data-tabs-scope data-active="shop" style="--scene-vh:260" aria-labelledby="home-title">
<div class="scene-stage"><div class="room-slot"><div class="room-box" data-pointer>${planes}</div></div>
<div class="room-controls"><div class="room-tabbar">${tabs.tabs}<div class="room-panels">${tabs.panels}</div></div></div></div></section>`;
  const hands = `<section class="band band-yellow hands-band" aria-label="${esc(home.hands)}"><div class="wrap hands-inner" data-reveal="stamp"><p class="hands-text">${esc(home.hands)}</p><div class="prints" aria-hidden="true">${[C.red, C.teal, C.grn, C.blu].map((c, i) => `<svg class="print print-${i + 1}" viewBox="0 0 120 150" style="--i:${i}"><g fill="${c}" stroke="#201b4a" stroke-width="5" stroke-linejoin="round"><ellipse cx="60" cy="104" rx="36" ry="38"/><ellipse cx="26" cy="58" rx="9" ry="24" transform="rotate(-16 26 58)"/><ellipse cx="47" cy="38" rx="9.5" ry="28"/><ellipse cx="72" cy="38" rx="9.5" ry="28"/><ellipse cx="94" cy="58" rx="9" ry="24" transform="rotate(16 94 58)"/><ellipse cx="14" cy="104" rx="9" ry="22" transform="rotate(-62 14 104)"/></g></svg>`).join('')}</div></div></section>`;
  const reel = `<section class="band band-navy reel-band" aria-label="${ui.reelLabel}"><div class="wrap">${tvReel()}</div></section>`;
  const blocks = `<section class="band band-teal verbs-band" aria-hidden="true"><div class="wrap"><ul class="block-row">${mela.adventure.verbs.map((v, i) => `<li class="blk blk-${i}">${esc(v.replace('.', ''))}</li>`).join('')}</ul></div></section>`;
  return { title: 'Thinkadoo — The Playroom', desc: home.subline, main: hero + hands + reel + blocks, bodyCls: 'is-home' };
}
function tvReel() {
  return `<div class="tv"><svg class="tv-antenna" viewBox="0 0 200 90" aria-hidden="true"><path d="M100 88 40 8m60 80 60-80" stroke="#201b4a" stroke-width="7" stroke-linecap="round"/><circle cx="40" cy="8" r="8" fill="${C.red}" stroke="#201b4a" stroke-width="4"/><circle cx="160" cy="8" r="8" fill="${C.red}" stroke="#201b4a" stroke-width="4"/></svg>${B.reel({ cls: 'reel-tv' })}</div>`;
}

// ------------------------------------------------------------------ SUB-PAGE room
function singleRoom({ p0 = '', p1 = '', p2 = '', p3 = '', label = '', wallCol = C.blu }) {
  const plane = (cls, inner, lab) => `<svg class="plane ${cls}" viewBox="0 0 1600 ${H}" preserveAspectRatio="xMidYMax slice" ${lab ? `role="img" aria-label="${esc(lab)}"` : 'aria-hidden="true"'} focusable="false" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  return plane('p0', `<rect x="-1200" y="-400" width="4000" height="1040" fill="${wallCol}"/>${p0}`) + plane('p1', p1) + '@@TITLE@@' + plane('p2', floor(0, C.grn, 1200) + p2, label) + plane('p3', p3);
}
const garland = (cols) => corners(cols || [C.red, C.yel, C.teal, C.paper, C.grn]);
const rug = (col = C.red) => `<ellipse cx="800" cy="716" rx="520" ry="32" fill="${col}" stroke="#201b4a" stroke-width="5"/><ellipse cx="800" cy="716" rx="420" ry="21" fill="none" stroke="${C.yel}" stroke-width="5" stroke-dasharray="22 14"/>`;
function subHero({ id, kicker, title, rooms, vh = 190 }) {
  const room = rooms.replace('@@TITLE@@', `<div class="room-title-wrap">${kicker ? `<p class="room-kicker">${smart(kicker)}</p>` : ''}<h1 class="room-title" id="${id}-title">${smart(title)}</h1></div>`);
  return `<section class="scene room-sub" data-scene data-rest="1" style="--scene-vh:${vh}" aria-labelledby="${id}-title"><div class="scene-stage"><div class="room-slot"><div class="room-box single" data-pointer>${room}</div></div></div></section>`;
}
const sec = (cls, inner, id = '') => `<section class="band ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;

// principal toy is placed at t=0 so it paints as soon as the hero scrolls
const hero = (o) => toy({ t: 0.02 + 1 / 2.4 * 0, speed: 2.4, ...o });

function shopPage() {
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 570, 150, .5) + g(Sc.shelf({ w: 360 }), 80, 300) + g(Sc.shelf({ w: 360 }), 1160, 300),
    p1: g(Sc.books, 110, 205, .8) + g(Sc.plant, 1240, 140, .8) + g(Sc.jar(C.red), 1180, 214, .8),
    p2: hero({ art: O.truck, x: 120, y: 280, s: .78, href: 'mela-truck.html', label: 'Mela Truck', tagText: 'Mela Truck', hit: [120, 270, 546, 330], cls: 'big' }) +
      hero({ art: O.ganesha, x: 920, y: 160, s: .96, href: 'paint-my-god.html', label: 'Paint My God', tagText: 'Paint My God', hit: [920, 160, 460, 470], cls: 'big' }),
    p3: garland() + rug() + g(O.fan, 20, 540, .7) + g(O.paintPot, 1500, 610, .6) + `<g class="brush brush-sub" style="--x0:160;--x1:1260">${g(O.brush, 0, 0, .66)}</g>`,
    label: 'A playroom with a Mela Truck and a Ganesha. Both start as paper sketches and are painted as you scroll. Both are links.',
  });
  const cross = sec('band-paper shop-cross', `<div class="cross-grid"><div class="cross-card"><p class="tab-eyebrow">${esc(home.tabs[1].eyebrow)}</p><p class="cross-text">${smart(home.tabs[1].text)}</p>${B.btn(home.tabs[1].cta, 'workshops.html', 'btn-primary')}</div></div>`);
  return { title: 'Shop — Thinkadoo', main: subHero({ id: 'shop', title: shop.title, rooms, vh: 170 }) + cross };
}
function cubbies() {
  const cols = [C.yel, C.teal, C.red, C.grn, C.blu, C.yel, C.red];
  const items = mela.inside.envelopes.map((e) => `<button class="env cubby" role="tab" type="button" id="env-${e.n}" data-env="${e.n}" aria-selected="${e.n === 1}" aria-controls="env-panel-${e.n}" tabindex="${e.n === 1 ? 0 : -1}"><span class="cubby-hole">${svg(O.envelope(cols[e.n - 1]), { cls: 'env-art-svg' })}</span><span class="env-label"><span class="env-num">${e.n}</span> ${smart(e.name)}</span></button>`).join('');
  const panels = mela.inside.envelopes.map((e) => B.envPanel(e, { hidden: e.n !== 1 })).join('');
  return `<div class="env-set cubby-set" data-env-set><div class="env-row cubby-case" role="tablist" aria-label="${esc(mela.inside.sub)}">${items}</div><div class="env-stage mat">${panels}<div class="env-nav"><button type="button" class="reel-btn" data-env-prev aria-label="${ui.previous}">${icon('prev')}</button><button type="button" class="reel-btn" data-env-next aria-label="${ui.next}">${icon('next')}</button></div></div></div>`;
}
function melaPage() {
  const shelves = g(Sc.shelf({ w: 420 }), 60, 250) + g(Sc.shelf({ w: 420 }), 1120, 250);
  const mini = (a, x, y, s) => g(a, x, y, s, 'mini');
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 640, 140, .5),
    p1: shelves + mini(O.ferris, 80, 80, .3) + mini(O.shooter, 250, 140, .22) + mini(O.leopard, 1150, 90, .32) + mini(O.kaleido, 1310, 142, .27),
    p2: hero({ art: O.truck, x: 492, y: 300, s: .88, hit: [492, 300, 616, 320] }),
    p3: garland() + rug(C.yel) + g(O.fan, 20, 540, .7) + g(O.paintPot, 1500, 610, .6) + `<g class="brush brush-sub" style="--x0:512;--x1:1000">${g(O.brush, 0, 0, .66)}</g>`,
    label: 'A playroom with the Mela Truck on a rug, and activity toys on shelves. The truck starts as a paper sketch and is painted as you scroll.',
  });
  const story = sec('band-paper', `<div class="story-grid story-solo">${B.melaStory()}</div>`);
  const inside = sec('band-teal env-band', `<div class="sec-head">${B.melaInsideHead()}</div>${cubbies()}<p class="env-outro">${smart(mela.inside.outro)}</p>`, 'inside');
  const need = sec('band-paper shelf-band', B.melaNeed());
  const adv = sec('band-red adv-band', B.melaAdventure());
  const more = sec('band-yellow more-band', B.benefits(mela.more) + B.melaClose());
  const perfect = sec('band-paper perfect-band', B.perfectFor(mela.perfect));
  const det = sec('band-blue details-band', `<div class="ticket">${B.details(mela.details)}</div>`);
  const ready = sec('band-navy ready-band', B.readyBlock(mela.ready, 'mela') + `<div class="ready-art" aria-hidden="true">${svg(O.truck)}</div>`);
  const share = sec('band-yellow share-band', B.shareBlock(mela.share));
  return { title: 'Mela Truck — Thinkadoo', main: subHero({ id: 'mela', kicker: mela.kicker, title: mela.title, rooms, vh: 190 }) + story + inside + need + adv + more + perfect + det + ready + share };
}
function paintPage() {
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 90, 150, .5) + g(Sc.windowRound, 1050, 150, .5),
    p1: g(O.flower(C.red), 190, 360, .9) + g(O.flower(C.teal), 1290, 330, 1),
    p2: hero({ art: O.ganesha, x: 560, y: 176, s: .94, hit: [560, 176, 480, 450] }) + g(O.paintPot, 330, 520, .7) + g(O.markers, 1120, 470, .6),
    p3: garland([C.red, C.teal, C.paper, C.yel, C.grn]) + rug(C.red) + g(O.fan, 20, 540, .7) + `<g class="brush brush-sub brush-idol" style="--x0:560;--x1:960">${g(O.brush, 0, 0, .7)}</g>`,
    label: 'A playroom with a blank Ganesha idol that is painted in colour as you scroll.',
  });
  const story = sec('band-paper', `<div class="story-grid story-solo">${B.paintStory()}</div>`);
  const inside = sec('band-paper shelf-band paint-inside', B.paintInside());
  const more = sec('band-yellow more-band', B.benefits(paint.more));
  const perfect = sec('band-teal perfect-band', B.perfectFor(paint.perfect));
  const det = sec('band-blue details-band', `<div class="ticket">${B.details(paint.details)}</div>`);
  const ready = sec('band-navy ready-band', B.readyBlock(paint.ready, 'paint') + `<div class="ready-art" aria-hidden="true">${svg(O.ganesha)}</div>`);
  const share = sec('band-red share-band', B.shareBlock(paint.share));
  return { title: 'Paint My God — Thinkadoo', main: subHero({ id: 'paint', kicker: paint.kicker, title: paint.title, rooms, vh: 190 }) + story + inside + more + perfect + det + ready + share };
}
function workshopsPage() {
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 640, 120, .55),
    p1: g(Sc.shelf({ w: 420 }), 90, 300) + g(Sc.jar(C.red), 130, 196, .85) + g(Sc.jar(C.grn), 214, 196, .85) + g(Sc.books, 310, 190, .8) + g(Sc.shelf({ w: 420 }), 1090, 300) + g(Sc.plant, 1140, 120, .8) + g(Sc.jar(C.yel), 1300, 196, .85),
    p2: g(Sc.table, 250, 410, 1.2) + hero({ art: O.notebook, x: 520, y: 150, s: .9, hit: [520, 150, 468, 340] }) + g(O.paintPot, 330, 355, .62) + g(O.markers, 1100, 322, .62),
    p3: garland([C.teal, C.yel, C.red, C.paper, C.grn]) + g(O.paintPot, 60, 600, .8) + g(O.brush, 190, 520, .6) + `<g class="brush brush-sub" style="--x0:500;--x1:900">${g(O.brush, 0, 0, .66)}</g>`,
    label: 'A craft table with a notebook, paint and markers. The notebook starts as a paper sketch and is painted as you scroll.',
  });
  const intro = sec('band-paper', `<div class="ws-intro">${B.workshopIntro()}</div>`);
  const card = sec('band-yellow ws-band', B.bookbindingCard(), 'bookbinding');
  const expect = sec('band-blue expect-band', B.expectBlock());
  const loop = sec('band-red loop-band', B.loopBlock());
  const host = sec('band-paper host-band', B.hostBlock());
  return { title: 'Workshops — Thinkadoo', main: subHero({ id: 'ws', title: workshops.title, rooms, vh: 180 }) + intro + card + expect + loop + host };
}
function storyPage() {
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 640, 110, .55),
    p1: g(Sc.shelf({ w: 440 }), 60, 280) + g(Sc.books, 100, 186, .9) + g(Sc.shelf({ w: 440 }), 1100, 280) + g(Sc.plant, 1150, 80, .85) + g(Sc.jar(C.yel), 1320, 176, .85),
    p2: hero({ art: O.hands, x: 380, y: 110, s: .98, hit: [380, 110, 640, 520] }),
    p3: garland() + rug(C.teal) + g(O.fan, 20, 540, .7) + g(O.paintPot, 1500, 610, .6) + `<g class="brush brush-sub" style="--x0:420;--x1:960">${g(O.brush, 0, 0, .66)}</g>`,
    label: 'Two cut-paper hands, red and yellow, that are painted as you scroll.',
  });
  return { title: 'Our Story — Thinkadoo', main: subHero({ id: 'story', title: about.title, rooms, vh: 170 }) + sec('band-paper about-band', B.aboutBlock()) + sec('band-blue founders-band', B.foundersBlock()) + sec('band-yellow community-band', B.communityBlock()) };
}
function contactPage() {
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 640, 120, .5),
    p1: g(Sc.shelf({ w: 360 }), 100, 300) + g(Sc.books, 130, 206, .75) + g(Sc.shelf({ w: 360 }), 1140, 300) + g(Sc.plant, 1180, 100, .8),
    p2: hero({ art: () => O.envelope(C.yel), x: 400, y: 190, s: 2.6, hit: [400, 190, 780, 570] }),
    p3: garland() + rug(C.grn) + g(O.fan, 20, 540, .7) + g(O.paintPot, 1500, 610, .6) + `<g class="brush brush-sub" style="--x0:440;--x1:1000">${g(O.brush, 0, 0, .66)}</g>`,
    label: 'A big envelope that is painted as you scroll.',
  });
  return { title: 'Contact — Thinkadoo', main: subHero({ id: 'contact', title: contact.title, rooms, vh: 160 }) + sec('band-paper contact-band', `<div class="contact-grid"><div>${B.contactIntro()}</div><div>${B.contactRoutes()}</div></div>`) };
}
function cartPage() {
  const rooms = singleRoom({
    p0: g(Sc.windowRound, 640, 120, .5),
    p1: g(Sc.shelf({ w: 420 }), 90, 300) + g(Sc.jar(C.red), 130, 196, .85) + g(Sc.shelf({ w: 420 }), 1090, 300) + g(Sc.books, 1120, 190, .8),
    p2: hero({ art: O.basket, x: 460, y: 200, s: 1.5, hit: [460, 200, 480, 450] }),
    p3: garland() + rug(C.yel) + g(O.fan, 20, 540, .7) + `<g class="brush brush-sub" style="--x0:480;--x1:900">${g(O.brush, 0, 0, .66)}</g>`,
    label: 'A shopping basket that is painted as you scroll.',
  });
  return { title: 'Cart — Thinkadoo', main: subHero({ id: 'cart', title: ui.cart, rooms, vh: 150 }) + sec('band-paper cart-band', B.cartBlock()) };
}

export const playroom = {
  id: 'playroom', fonts: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">`,
  logo: 'yellow', transition: 520,
  pages: { home: homePage, shop: shopPage, mela: melaPage, paint: paintPage, workshops: workshopsPage, story: storyPage, contact: contactPage, cart: cartPage },
};
