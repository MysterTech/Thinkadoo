// Concept C: THE MELA ROAD. Vertical scroll drives a side-scrolling fairground; the truck stays put.
import { O, Sc, svg, esc, smart, icon, content, C } from './kit.mjs';
import * as B from './blocks.mjs';

const { ui, home, shop, mela, paint, workshops, about, community, contact } = content;
const rawArt = (art, cls = '', style = '') => { const a = typeof art === 'function' ? art() : art; return `<svg class="${cls}" viewBox="${a.vb}" aria-hidden="true" focusable="false" style="${style}" xmlns="http://www.w3.org/2000/svg">${a.body}</svg>`; };
// object placed in world units (x = centre, b = bottom offset, w = width); u is px per unit, set in CSS/JS
const obj = (art, { x, b = 170, w, cls = '', z = 0, label = '', park = '' }) => {
  const a = typeof art === 'function' ? art() : art;
  return `<svg class="obj ${cls}" viewBox="${a.vb}" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'} focusable="false" ${park ? `data-park="${park}"` : ''} style="--x:${x};--b:${b};--w:${w};${z ? `z-index:${z}` : ''}" xmlns="http://www.w3.org/2000/svg">${a.body}</svg>`;
};
const words = (txt) => txt.split(' ').map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(' ');

// ------------------------------------------------------------------ world builders
const sky = () => [[380, 520, .8], [1600, 440, 1], [2900, 560, .7], [4100, 470, .9], [5400, 520, 1.1], [6800, 450, .8]].map(([x, y, s]) => obj(Sc.cloud, { x, b: y, w: 280 * s, cls: 'cloud' })).join('');
const far = () => {
  let s = '';
  s += obj(O.ferris, { x: 1500, b: 170, w: 380, cls: 'far-ferris' });
  s += obj(O.ferris, { x: 4600, b: 170, w: 300, cls: 'far-ferris' });
  [[600, 170], [2400, 200], [3300, 160], [3900, 190], [5600, 180], [6400, 200]].forEach(([x, w], i) => { s += obj(Sc.tent({ a: i % 2 ? C.red : C.yel, b: i % 2 ? C.yel : C.red }), { x, b: 170, w, cls: 'far-tent' }); });
  return s;
};
const near = () => {
  let s = '';
  s += `<div class="near-bunting" style="--x:0">${rawArt(Sc.bunting({ w: 3000, sag: 90, n: 28 }), 'nb')}</div>`;
  s += `<div class="near-bunting" style="--x:3000">${rawArt(Sc.bunting({ w: 3000, sag: 90, n: 28, colors: [C.teal, C.paper, C.red, C.yel, C.grn] }), 'nb')}</div>`;
  s += `<div class="near-bunting" style="--x:6000">${rawArt(Sc.bunting({ w: 3000, sag: 90, n: 28 }), 'nb')}</div>`;
  [[1700, 'kid', C.red], [3700, 'wave', C.yel], [5200, 'kid', C.blu], [7000, 'wave', C.red]].forEach(([x, k]) => { s += obj(k === 'kid' ? Sc.kid() : Sc.kidWave(), { x, b: 0, w: 120, cls: 'near-kid' }); });
  return s;
};
const stallObj = (o) => obj(Sc.stall(o.stall), { x: o.x, b: 170, w: 430, cls: 'stall' });

function sign({ id, x, w = 560, cls = '', inner, anchor = '.68' }) {
  return `<div class="sign ${cls}" data-chapter="${id}" data-x="${x}" data-anchor="${anchor}" style="--x:${x};--sw:${w}">${inner}</div>`;
}

// ------------------------------------------------------------------ HOME: the pinned road
function homePage() {
  const t = home.tabs;
  const billboard = sign({
    id: 'start', x: 900, w: 1260, anchor: '.5', cls: 'billboard',
    inner: `<h1 class="road-title" id="home-title"><span class="hl hl-y">${words('A brighter,')}</span> <span class="hl hl-w">${words('kinder,')}</span> <span class="hl hl-y">${words('more creative')}</span> <span class="hl hl-w">${words('world begins with')}</span> <span class="hl hl-y">${words('small hands.')}</span></h1><p class="road-sub">${smart(home.subline)}</p>`,
  });
  const stallSign = (id, k, x, art) => sign({
    id, x, w: 560, cls: 'stall-sign',
    inner: `<p class="sign-tab">${esc(t[k].label)}</p><div class="sign-body"><h2 class="sign-eyebrow">${esc(t[k].eyebrow)}</h2><p class="sign-text">${smart(t[k].text)}</p>${B.btn(t[k].cta, t[k].href, 'btn-primary')}</div>`,
  }) + obj(Sc.stall(art), { x, b: 170, w: 300, cls: 'stall' });
  const hands = sign({
    id: 'hands', x: 6500, w: 1100, anchor: '.5', cls: 'hands-sign',
    inner: `<p class="hands-text">${esc(home.hands)}</p>`,
  });
  const screen = sign({
    id: 'reel', x: 8400, w: 580, anchor: '.74', cls: 'screen-sign',
    inner: B.reel({ cls: 'reel-drive' }),
  });
  const mid = `${billboard}${stallSign('shop', 0, 2900, { goods: 'sweets', awning: C.red })}${stallSign('workshop', 1, 4700, { goods: 'books', awning: C.blu })}${hands}${screen}${obj(Sc.tent({ a: C.yel, b: C.red }), { x: 7500, b: 170, w: 260, cls: 'stall' })}${obj(Sc.stall({ goods: 'games', awning: C.teal }), { x: 9300, b: 170, w: 400, cls: 'stall' })}`;
  const truck = `<div class="truck" aria-hidden="true">${rawArt(O.truck, 'truck-art')}</div>`;
  const tabs = `<div class="road-tabs" role="group" aria-label="${ui.tabs}"><button type="button" class="tab" data-drive="shop" aria-pressed="true"><span>${esc(t[0].label)}</span></button><button type="button" class="tab" data-drive="workshop" aria-pressed="false"><span>${esc(t[1].label)}</span></button></div>`;
  const scene = `<section class="scene road-scene" data-scene data-rest="0" data-road="home" style="--scene-vh:540" aria-labelledby="home-title"><div class="scene-stage road-stage" data-pointer>
<div class="layer l-sky" aria-hidden="true">${sky()}</div>
<div class="layer l-far" aria-hidden="true">${far()}</div>
<div class="ground" aria-hidden="true"><div class="road"></div></div>
<div class="layer l-mid">${mid}</div>
${truck}
<div class="layer l-near" aria-hidden="true">${near()}</div>
${tabs}
</div></section>`;
  return { title: 'Thinkadoo — The Mela Road', desc: home.subline, main: scene + phraseBand(), bodyCls: 'is-home' };
}
function phraseBand() {
  const row = `<span>${esc(mela.adventure.verbs.join(' '))}</span>`.repeat(4);
  return `<div class="phrase-band" aria-hidden="true" data-loop><div class="phrase-track">${row}${row}</div></div>`;
}

// ------------------------------------------------------------------ sub-page road hero
function subHero({ id, kicker, title, mid, vh = 170 }) {
  const billboard = sign({ id: 'title', x: 700, w: 1100, anchor: '.5', cls: 'billboard sub-board', inner: `${kicker ? `<p class="sub-kicker">${smart(kicker)}</p>` : ''}<h1 class="road-title" id="${id}-title">${smart(title)}</h1>` });
  return `<section class="scene road-scene road-page" data-scene data-rest="0" data-road="sub" style="--scene-vh:${vh}" aria-labelledby="${id}-title"><div class="scene-stage road-stage" data-pointer>
<div class="layer l-sky" aria-hidden="true">${sky()}</div>
<div class="layer l-far" aria-hidden="true">${far()}</div>
<div class="ground" aria-hidden="true"><div class="road"></div></div>
<div class="layer l-mid">${billboard}${mid}</div>
<div class="truck" aria-hidden="true">${rawArt(O.truck, 'truck-art')}</div>
<div class="layer l-near" aria-hidden="true">${near()}</div>
</div></section>`;
}
const sec = (cls, inner, id = '') => `<section class="band ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;

// A product on a stall counter that is also a link
function productStall({ x, href, name, art, stall, aw = 300, ab = 330, park = '' }) {
  const a = typeof art === 'function' ? art() : art;
  return obj(Sc.stall(stall), { x, b: 170, w: 360, cls: 'stall', park }) +
    `<a class="obj-link" href="${href}" ${park ? `data-park="${park}"` : ''} style="--x:${x};--b:${ab};--w:${aw}" aria-label="${esc(name)}"><svg viewBox="${a.vb}" aria-hidden="true" focusable="false">${a.body}</svg><span class="obj-tag">${esc(name)}</span></a>`;
}

function shopPage() {
  const mid = productStall({ x: 1500, href: 'mela-truck.html', name: 'Mela Truck', art: O.truck, stall: { goods: 'games', awning: C.red }, aw: 290, ab: 250, park: '.6' }) +
    productStall({ x: 2300, href: 'paint-my-god.html', name: 'Paint My God', art: O.ganesha, stall: { goods: 'shrine', awning: C.yel, trim: C.red }, aw: 180, ab: 258, park: '.86' });
  const cross = sec('band-paper shop-cross', `<div class="cross-grid"><div class="cross-card"><p class="tab-eyebrow">${esc(home.tabs[1].eyebrow)}</p><p class="cross-text">${smart(home.tabs[1].text)}</p>${B.btn(home.tabs[1].cta, 'workshops.html', 'btn-primary')}</div></div>`);
  return { title: 'Shop — Thinkadoo', main: subHero({ id: 'shop', title: shop.title, mid, vh: 190 }) + cross + phraseBand() };
}

// Ferris wheel selector for the seven envelopes
function wheelSet() {
  const cols = mela.inside.envelopes;
  const btns = cols.map((e) => `<button class="env wheel-btn" role="tab" type="button" id="env-${e.n}" data-env="${e.n}" aria-selected="${e.n === 1}" aria-controls="env-panel-${e.n}" tabindex="${e.n === 1 ? 0 : -1}"><span class="wb-n">${e.n}</span><span class="wb-name">${smart(e.name)}</span></button>`).join('');
  const panels = cols.map((e) => B.envPanel(e, { hidden: e.n !== 1 })).join('');
  return `<div class="env-set wheel-set" data-env-set data-wheel>
<div class="wheel-stage"><div class="fw" aria-hidden="true">${rawArt(O.ferris({ numbers: true }), 'fw-svg')}</div><div class="wheel-nav"><button type="button" class="reel-btn" data-env-prev aria-label="${ui.previous}">${icon('prev')}</button><button type="button" class="reel-btn" data-env-next aria-label="${ui.next}">${icon('next')}</button></div></div>
<div class="wheel-side"><div class="env-row wheel-row" role="tablist" aria-label="${esc(mela.inside.sub)}">${btns}</div><div class="env-stage wheel-panel">${panels}</div></div></div>`;
}
// the mela passage: each line arrives together with its object (Reveal)
function storyScene() {
  const s = mela.story;
  const lines = s.list.map((l, i) => `<li class="sl" data-line="${i}">${smart(l)}</li>`).join('');
  const o = (k, tr, inner) => `<g transform="${tr}"><g class="o o${k}">${inner}</g></g>`;
  const scene = `<svg class="ms-art" viewBox="0 0 640 560" role="img" aria-label="A mela appears one piece at a time: bright bunting, little stalls, games, noise, food and people." xmlns="http://www.w3.org/2000/svg">
<rect width="640" height="560" fill="${C.teal}"/><path d="M0 430q80-60 160 0t160 0 160 0 160 0V560H0Z" fill="${C.grn}" stroke="#201b4a" stroke-width="5"/><rect y="480" width="640" height="80" fill="${C.yel}" stroke="#201b4a" stroke-width="5"/>
${o(0, 'translate(0 6)', Sc.bunting({ w: 640, sag: 60, n: 12 }).body)}
${o(1, 'translate(20 190)', Sc.stall({ goods: 'sweets', awning: C.red }).body)}${o(1, 'translate(400 200) scale(.9)', Sc.tent().body)}
${o(2, 'translate(190 250) scale(.8)', Sc.stall({ goods: 'games', awning: C.blu }).body)}
${o(3, 'translate(520 70)', `<path d="M0 40h26l34-30v100l-34-30H0Z" fill="${C.yel}" stroke="#201b4a" stroke-width="5" stroke-linejoin="round"/><path d="M82 30q18 30 0 60" fill="none" stroke="#201b4a" stroke-width="5" stroke-linecap="round"/><path d="M104 14q34 56 0 92" fill="none" stroke="#201b4a" stroke-width="5" stroke-linecap="round"/>`)}
${o(4, 'translate(24 380) scale(.9)', O.paintPot().body)}${o(4, 'translate(500 392) scale(.7)', Sc.jar(C.red).body)}
${o(5, 'translate(230 330)', Sc.kid({ shirt: C.red }).body)}${o(5, 'translate(322 340) scale(.9)', Sc.kidWave().body)}${o(5, 'translate(420 330)', Sc.kid({ shirt: C.yel }).body)}
</svg>`;
  return `<section class="scene mela-scene" data-scene data-stages="6" data-rest="1" style="--scene-vh:420" aria-labelledby="mela-lead"><div class="scene-stage"><div class="wrap ms-grid"><div class="ms-text"><p class="story-lead" id="mela-lead">${smart(s.lead)}</p><ul class="story-list ms-list">${lines}</ul></div><div class="ms-art-wrap">${scene}</div></div></div></section>`;
}
function melaStoryRest() {
  const s = mela.story;
  return `<div class="story story-mela story-rest"><p class="story-close">${smart(s.close)}</p><p class="story-with">${smart(s.withBefore)}<b>${smart(s.withBold)}</b>${smart(s.withAfter)}</p><ul class="story-steps">${s.steps.map((l) => `<li>${smart(l)}</li>`).join('')}</ul><ul class="story-questions">${s.questions.map((l) => `<li>${smart(l)}</li>`).join('')}</ul><p class="story-single">${smart(s.single)}</p><p class="story-punch">${smart(s.punch)}</p></div>`;
}
function melaPage() {
  const mid = obj(Sc.stall({ goods: 'games', awning: C.red }), { x: 1500, b: 170, w: 360, cls: 'stall', park: '.6' }) + obj(Sc.stall({ goods: 'sweets', awning: C.blu }), { x: 2350, b: 170, w: 360, cls: 'stall', park: '.86' });
  const story = sec('band-paper story-rest-band', melaStoryRest());
  const inside = sec('band-yellow env-band', `<div class="sec-head">${B.melaInsideHead()}</div>${wheelSet()}<p class="env-outro">${smart(mela.inside.outro)}</p>`, 'inside');
  const need = sec('band-blue props-band', B.melaNeed());
  const adv = sec('band-red adv-band', B.melaAdventure());
  const more = sec('band-paper more-band', B.benefits(mela.more) + B.melaClose());
  const perfect = sec('band-teal perfect-band', B.perfectFor(mela.perfect));
  const det = sec('band-paper details-band', `<div class="ticket">${B.details(mela.details)}</div>`);
  const ready = sec('band-navy ready-band', B.readyBlock(mela.ready, 'mela') + `<div class="ready-art" aria-hidden="true">${svg(O.truck)}</div>`);
  const share = sec('band-yellow share-band', B.shareBlock(mela.share));
  return { title: 'Mela Truck — Thinkadoo', main: subHero({ id: 'mela', kicker: mela.kicker, title: mela.title, mid, vh: 190 }) + storyScene() + story + inside + need + adv + more + perfect + det + ready + share };
}
function paintPage() {
  const mid = obj(Sc.stall({ goods: 'shrine', awning: C.yel, trim: C.red }), { x: 1500, b: 170, w: 360, cls: 'stall', park: '.6' }) + obj(O.ganesha, { x: 2400, b: 185, w: 300, cls: 'stall', park: '.86' });
  const story = sec('band-paper', `<div class="story-solo">${B.paintStory()}</div>`);
  const inside = sec('band-teal props-band paint-inside', B.paintInside());
  const more = sec('band-paper more-band', B.benefits(paint.more));
  const perfect = sec('band-yellow perfect-band', B.perfectFor(paint.perfect));
  const det = sec('band-paper details-band', `<div class="ticket">${B.details(paint.details)}</div>`);
  const ready = sec('band-navy ready-band', B.readyBlock(paint.ready, 'paint') + `<div class="ready-art" aria-hidden="true">${svg(O.ganesha)}</div>`);
  const share = sec('band-red share-band', B.shareBlock(paint.share));
  return { title: 'Paint My God — Thinkadoo', main: subHero({ id: 'paint', kicker: paint.kicker, title: paint.title, mid, vh: 190 }) + story + inside + more + perfect + det + ready + share };
}
function workshopsPage() {
  const mid = obj(Sc.stall({ goods: 'books', awning: C.grn }), { x: 1500, b: 170, w: 360, cls: 'stall', park: '.6' }) + obj(O.notebook, { x: 2350, b: 175, w: 360, cls: 'stall', park: '.87' });
  const intro = sec('band-paper', `<div class="ws-intro">${B.workshopIntro()}</div>`);
  const card = sec('band-yellow ws-band', B.bookbindingCard(), 'bookbinding');
  const expect = sec('band-blue expect-band', B.expectBlock());
  const loop = sec('band-red loop-band', B.loopBlock());
  const host = sec('band-paper host-band', B.hostBlock());
  return { title: 'Workshops — Thinkadoo', main: subHero({ id: 'ws', title: workshops.title, mid, vh: 180 }) + intro + card + expect + loop + host };
}
function storyPage() {
  const mid = obj(O.hands, { x: 1700, b: 170, w: 520, cls: 'stall' }) + obj(Sc.tent(), { x: 2600, b: 170, w: 300, cls: 'stall' });
  return { title: 'Our Story — Thinkadoo', main: subHero({ id: 'story', title: about.title, mid, vh: 170 }) + sec('band-paper about-band', B.aboutBlock()) + sec('band-blue founders-band', B.foundersBlock()) + sec('band-yellow community-band', B.communityBlock()) };
}
function contactPage() {
  const mid = obj(() => O.envelope(C.yel), { x: 1700, b: 170, w: 560, cls: 'stall' }) + obj(Sc.stall({ goods: 'sweets', awning: C.teal }), { x: 2600, b: 170, w: 420, cls: 'stall' });
  return { title: 'Contact — Thinkadoo', main: subHero({ id: 'contact', title: contact.title, mid, vh: 160 }) + sec('band-paper contact-band', `<div class="contact-grid"><div>${B.contactIntro()}</div><div>${B.contactRoutes()}</div></div>`) + phraseBand() };
}
function cartPage() {
  const mid = obj(O.basket, { x: 1700, b: 170, w: 380, cls: 'stall' }) + obj(Sc.boothWindow, { x: 2500, b: 170, w: 420, cls: 'stall' });
  return { title: 'Cart — Thinkadoo', main: subHero({ id: 'cart', title: ui.cart, mid, vh: 150 }) + sec('band-paper cart-band', B.cartBlock()) };
}

export const road = {
  id: 'mela-road', fonts: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Figtree:wght@400;500;700;800&display=swap" rel="stylesheet">`,
  logo: 'red', transition: 520, script: true,
  pages: { home: homePage, shop: shopPage, mela: melaPage, paint: paintPage, workshops: workshopsPage, story: storyPage, contact: contactPage, cart: cartPage },
};
