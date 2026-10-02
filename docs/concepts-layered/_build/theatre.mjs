// Concept A: THE PAPER THEATRE. Navy proscenium, curtains, flats that fly in and out.
import { O, Sc, svg, esc, smart, icon, content, C } from './kit.mjs';
import * as B from './blocks.mjs';

const { ui, home, shop, mela, paint, workshops, about, community, contact } = content;
const VB = '0 0 1600 700';
const g = (art, x, y, s = 1, cls = '', extra = '') => { const a = typeof art === 'function' ? art() : art; return `<g class="${cls}" transform="translate(${x} ${y}) scale(${s})" ${extra}>${a.body}</g>`; };
const plane = (cls, inner, label = '') => `<svg class="plane ${cls}" viewBox="${VB}" preserveAspectRatio="xMidYMax slice" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'} focusable="false" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
const words = (txt, cls = '') => txt.split(' ').map((w, i) => `<span class="w ${cls}" style="--i:${i}">${esc(w)}</span>`).join(' ');

// ------------------------------------------------------------------ planes
function p0(sky = C.teal, halo = C.yel) {
  return `<path d="M60 700V340Q60 30 800 30T1540 340V700Z" fill="${C.blu}" stroke="#201b4a" stroke-width="6"/>
<path d="M110 700V344Q110 86 800 86T1490 344V700Z" fill="${sky}" stroke="#201b4a" stroke-width="5"/>
<path d="M172 700V352Q172 142 800 142T1428 352V700" fill="none" stroke="${halo}" stroke-width="6" stroke-dasharray="1 17" stroke-linecap="round"/>
${g(Sc.cloud, 200, 190, .8, 'cloud')}${g(Sc.cloud, 1160, 150, 1, 'cloud')}${g(Sc.cloud, 680, 130, .5, 'cloud')}`;
}
const floor = (col = '#e9d3a3') => `<g transform="translate(0 548)">${Sc.stageFloor({ w: 1600, h: 160, color: col }).body}</g>`;

function p1Shop() {
  return `${g(Sc.hills({ w: 1600, h: 220, color: C.grn, r: 130 }), 0, 392)}${g(Sc.hills({ w: 1600, h: 180, color: C.yel, r: 90 }), 0, 466)}
${g(O.ferris, 150, 130, .66, 'ferris-far')}${g(Sc.tent({ a: C.yel, b: C.red }), 1296, 250, .66)}`;
}
function p1Work() {
  return `<clipPath id="wk"><path d="M110 700V344Q110 86 800 86T1490 344V700Z"/></clipPath><g clip-path="url(#wk)"><rect x="100" y="80" width="1400" height="640" fill="${C.blu}"/><path d="M100 520h1400v200H100Z" fill="${C.red}" stroke="#201b4a" stroke-width="5"/></g>
${g(Sc.windowRound, 636, 70, .5)}
${g(Sc.shelf({ w: 400 }), 190, 230, 1)}${g(Sc.jar(C.red), 226, 134, .85)}${g(Sc.jar(C.teal), 306, 134, .85)}${g(Sc.books, 392, 118, .9)}
${g(Sc.shelf({ w: 400 }), 1010, 230, 1)}${g(Sc.jar(C.grn), 1050, 134, .85)}${g(Sc.books, 1130, 118, .9)}${g(Sc.plant, 1360, 280, .8)}
${g(Sc.bunting({ w: 1300, sag: 50, n: 14 }), 150, 60)}`;
}
function p1Paint() {
  return `<clipPath id="pk"><path d="M110 700V344Q110 86 800 86T1490 344V700Z"/></clipPath><g clip-path="url(#pk)"><rect x="100" y="80" width="1400" height="640" fill="${C.yel}"/></g>
${g(Sc.bunting({ w: 1300, sag: 70, n: 14, colors: [C.red, C.teal, C.paper, C.grn, C.blu] }), 150, 70)}
${g(O.flower(C.red), 190, 330, 1.2)}${g(O.flower(C.teal), 1240, 300, 1.4)}${g(O.flower(C.grn), 130, 460, .8)}${g(Sc.pendant({ col: C.red }), 380, 150, .9)}${g(Sc.pendant({ col: C.blu }), 1130, 150, .9)}`;
}
function p1Story() {
  return `<clipPath id="sk"><path d="M110 700V344Q110 86 800 86T1490 344V700Z"/></clipPath><g clip-path="url(#sk)"><rect x="100" y="80" width="1400" height="640" fill="${C.blu}"/></g>
${g(Sc.shelf({ w: 440 }), 150, 250)}${g(Sc.books, 190, 140, 1)}${g(Sc.jar(C.yel), 330, 150, .8)}${g(Sc.shelf({ w: 440 }), 1010, 250)}${g(Sc.books, 1050, 140, 1)}${g(Sc.plant, 1290, 100, .85)}${g(Sc.bulbs({ w: 1300, n: 16 }), 150, 50)}`;
}
function p1Contact() {
  const env = (x, y, col, r) => `<g transform="translate(${x} ${y}) rotate(${r})">${O.envelope(col).body}</g>`;
  return `<clipPath id="ck"><path d="M110 700V344Q110 86 800 86T1490 344V700Z"/></clipPath><g clip-path="url(#ck)"><rect x="100" y="80" width="1400" height="640" fill="${C.red}"/></g>
${env(170, 170, C.yel, -8)}${env(1190, 190, C.teal, 7)}${env(330, 340, C.grn, 5)}${env(1060, 360, C.blu, -5)}${g(Sc.bulbs({ w: 1300, n: 16 }), 150, 56)}`;
}
function p1Cart() {
  return `<clipPath id="ct"><path d="M110 700V344Q110 86 800 86T1490 344V700Z"/></clipPath><g clip-path="url(#ct)"><rect x="100" y="80" width="1400" height="640" fill="${C.yel}"/></g>${g(Sc.bulbs({ w: 1300, n: 16 }), 150, 50)}${g(Sc.bunting({ w: 1200, sag: 60, n: 14 }), 200, 110)}`;
}

const tag = (txt, x, y, w = 250) => `<g transform="translate(${x} ${y})"><g class="tag"><path d="M${w / 2} -26V4" stroke="#201b4a" stroke-width="4" fill="none"/><rect x="0" y="4" width="${w}" height="54" rx="14" fill="${C.paper}" stroke="#201b4a" stroke-width="5"/><text x="${w / 2}" y="42" text-anchor="middle" font-size="31" font-weight="800" fill="#201b4a">${esc(txt)}</text></g></g>`;
const prop = (cls, href, label, body, tg, hit) => `<a class="prop ${cls}" href="${href}" aria-label="${esc(label)}"><rect class="hit" x="${hit[0]}" y="${hit[1]}" width="${hit[2]}" height="${hit[3]}" fill="transparent"/><g class="prop-body">${body}</g>${tg}</a>`;

function p2Shop() {
  const truck = prop('prop-truck', 'mela-truck.html', 'Mela Truck', g(O.truck, 508, 262, .84, 'truck-art'), tag('Mela Truck', 675, 196, 250), [508, 200, 590, 380]);
  const gan = prop('prop-ganesha', 'paint-my-god.html', 'Paint My God', g(O.ganesha, 1090, 250, .54), tag('Paint My God', 1088, 184, 250), [1090, 240, 260, 290]);
  return `${floor()}${g(Sc.bunting({ w: 1500, sag: 84, n: 16 }), 50, 54)}${g(Sc.stall({ goods: 'games', awning: C.red }), 190, 272, .86)}${g(Sc.stall({ goods: 'sweets', awning: C.blu }), 1130, 272, .86)}${truck}${gan}`;
}
function p2Work() {
  const nb = prop('prop-notebook', 'workshops.html', 'Bookbinding', g(O.notebook, 560, 236, .75, 'nb-art perform-host perform'), tag('BOOKBINDING', 590, 168, 270), [560, 220, 400, 280]);
  return `${floor('#b97a4a')}${g(Sc.table, 150, 440, 1.1)}${g(O.paintPot, 300, 340, .6)}${g(O.markers, 1000, 380, .55)}${g(O.scissors, 1170, 396, .42)}${nb}${g(O.brush, 1090, 300, .5, 'brush-prop')}`;
}
function p2Paint() {
  return `${floor()}${g(O.ganesha, 540, 112, 1.05, 'idol')}${g(O.paintPot, 300, 380, .8)}${g(O.brush, 1090, 300, .8)}${g(O.flower(C.red), 1180, 480, .6)}`;
}
function p2Mela() {
  return `${floor()}${g(Sc.stall({ goods: 'games', awning: C.red }), 40, 262, .96)}${g(Sc.stall({ goods: 'sweets', awning: C.blu }), 1230, 262, .96)}${g(O.truck, 520, 270, .8, 'truck-art')}`;
}
function p2Story() {
  return `${floor('#b97a4a')}${g(O.hands, 440, 150, .95, 'hands-art')}`;
}
function p2Contact() {
  return `${floor()}${g(O.envelope(C.yel), 450, 190, 2.3, 'big-env')}`;
}
function p2Cart() {
  return `${floor()}${g(Sc.boothWindow, 400, 120, .9)}${g(O.basket, 1180, 360, .6)}`;
}
function p2Shelf() { // shop page: two playbills
  const poster = (cls, x, href, name, art, bg, rot) => prop(cls, href, name, `<g transform="translate(${x} 150) rotate(${rot} 280 260)"><path d="M0 0H560V500H0Z" fill="${bg}" stroke="#201b4a" stroke-width="6" stroke-linejoin="round"/><path d="M26 26H534V474H26Z" fill="none" stroke="${C.paper}" stroke-width="5" stroke-dasharray="14 10"/>${g(art, art === O.truck ? 40 : 110, art === O.truck ? 120 : 30, art === O.truck ? .72 : .66)}<path d="M0 420H560V500H0Z" fill="#201b4a"/><text x="280" y="476" text-anchor="middle" font-size="46" font-weight="800" fill="${C.yel}">${esc(name)}</text></g>`, '', [x, 150, 560, 500]);
  return `${floor()}${poster('prop-poster poster-mela', 180, 'mela-truck.html', 'Mela Truck', O.truck, C.teal, -3)}${poster('prop-poster poster-paint', 860, 'paint-my-god.html', 'Paint My God', O.ganesha, C.yel, 3)}`;
}

const p3 = () => `<g class="curtain-load l">${`<g class="curtain l">${g(Sc.curtain('l'), -50, -30, .74)}</g>`}</g><g class="curtain-load r">${`<g class="curtain r">${g(Sc.curtain('r'), 1340, -30, .74)}</g>`}</g>
${g(Sc.footlights({ w: 1600 }), 0, 646, 1)}${g(O.fan, 50, 470, .62, 'fg-fan')}${g(O.paintPot, 1440, 540, .55, 'fg-pot')}${g(Sc.pelmet, 0, -14, 1)}`;

function stageBox(cls, planes, extra = '') {
  return `<div class="stage-box ${cls}">${planes}${extra}</div>`;
}

// ------------------------------------------------------------------ HOME
function homePage() {
  const tabs = B.homeTabs();
  const shopSet = (n) => `<div class="set set-shop">${n}</div>`;
  const stage = stageBox('stage-home',
    plane('p0', p0()) +
    `<div class="plane-wrap p1">${plane('set set-shop', p1Shop())}${plane('set set-work', p1Work())}</div>` +
    `<div class="plane-wrap p2">${plane('set set-shop', p2Shop(), 'A paper fair: the Mela Truck, a games stall and a Ganesha prop. The truck and the Ganesha are links.')}${plane('set set-work', p2Work(), 'A craft table with a notebook being bound, paint, markers and scissors. The notebook is a link.')}</div>` +
    plane('p3', p3()));
  const hero = `<section class="scene act-hero" data-scene data-stages="1" data-rest=".45" data-tabs-scope data-active="shop" style="--scene-vh:230" aria-labelledby="home-title">
<div class="scene-stage" data-pointer>
<h1 class="act-title" id="home-title"><span class="hl hl-a">${words('A brighter,')}</span> <span class="hl hl-b">${words('kinder,')}</span> <span class="hl hl-c">${words('more creative')}</span> <span class="hl hl-a">${words('world begins with')}</span> <span class="hl hl-b">${words('small hands.')}</span></h1>
<p class="act-subline">${smart(home.subline)}</p>
<div class="stage-slot">${stage}</div>
<div class="act-controls"><div class="act-tabbar">${tabs.tabs}<div class="act-panels">${tabs.panels}</div></div></div>
</div></section>`;
  const statement = `<section class="band band-paper statement" aria-label="${esc(home.hands)}">
<div class="wrap statement-inner"><p class="statement-text" data-reveal="draw">${esc(home.hands).replace('hands dirty', `<span class="smear-wrap">hands dirty<svg class="smear" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 14q60-16 120-2t120 0 152-6" fill="none" stroke="${C.red}" stroke-width="10" stroke-linecap="round"/></svg></span>`)}</p></div>
<div class="straddle" aria-hidden="true">${svg(O.brush, { cls: 'straddle-brush' })}</div>
</section>`;
  const reel = `<section class="band band-navy reel-band" aria-label="${ui.reelLabel}"><div class="wrap">${B.reel({ cls: 'reel-theatre' })}</div></section>`;
  const phrase = phraseBand();
  return { title: 'Thinkadoo — The Paper Theatre', desc: home.subline, main: hero + statement + reel + phrase, bodyCls: 'is-home' };
}
function phraseBand() {
  const t = mela.adventure.verbs.join(' ');
  const row = `<span>${esc(t)}</span>`.repeat(4);
  return `<div class="phrase-band" aria-hidden="true" data-loop><div class="phrase-track">${row}${row}</div></div>`;
}

// ------------------------------------------------------------------ sub-page hero
function subHero({ id, sky, halo, p1, p2, kicker, title, sub, rest = 0, vh = 170 }) {
  const stage = stageBox('stage-sub', plane('p0', p0(sky, halo)) + plane('p1', p1) + plane('p2', p2) + plane('p3', p3()));
  const head = `<div class="sub-title">${kicker ? `<p class="sub-kicker">${smart(kicker)}</p>` : ''}<h1 id="${id}-title">${smart(title)}</h1>${sub ? `<p class="sub-sub">${smart(sub)}</p>` : ''}</div>`;
  return `<section class="scene act-sub" data-scene data-stages="1" data-rest="${rest}" data-pointer style="--scene-vh:${vh}" aria-labelledby="${id}-title"><div class="scene-stage">${head}<div class="stage-slot">${stage}</div></div></section>`;
}
function storyScene(kind) {
  const kids = (xs) => xs.map(([x, c]) => g(Sc.kid({ shirt: c }), x, 330, .8)).join('');
  const body = kind === 'paint'
    ? `<rect width="480" height="520" fill="${C.yel}"/><path d="M0 400q60-40 120 0t120 0 120 0 120 0V520H0Z" fill="${C.grn}" stroke="#201b4a" stroke-width="5"/>${g(Sc.bunting({ w: 480, sag: 40, n: 8 }), 0, 10)}${g(O.ganesha, 100, 70, .6)}${g(O.flower(C.red), 20, 330, .8)}${g(O.flower(C.teal), 390, 300, .7)}${g(O.paintPot, 340, 380, .6)}${g(O.brush, 24, 150, .5)}`
    : `<rect width="480" height="520" fill="${C.teal}"/><path d="M0 420q60-50 120 0t120 0 120 0 120 0V520H0Z" fill="${C.grn}" stroke="#201b4a" stroke-width="5"/><path d="M0 460h480v60H0Z" fill="${C.yel}" stroke="#201b4a" stroke-width="5"/>${g(Sc.bunting({ w: 480, sag: 50, n: 8 }), 0, 10)}${g(Sc.tent(), 250, 190, .95)}${g(Sc.stall({ goods: 'games', awning: C.red }), 10, 190, .8)}${g(Sc.cloud, 300, 70, .5)}${kids([[210, C.red], [300, C.yel], [370, C.blu]]).replace(/translate\((\d+) 330\)/g, 'translate($1 330)')}`;
  return `<div class="story-art" aria-hidden="true"><svg viewBox="0 0 480 520" preserveAspectRatio="xMidYMid slice">${body}</svg></div>`;
}
const sec = (cls, inner, id = '') => `<section class="band ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;

// ------------------------------------------------------------------ SHOP
function shopPage() {
  const hero = subHero({ id: 'shop', sky: C.teal, halo: C.yel, p1: p1Shop(), p2: p2Shelf(), title: shop.title, vh: 140 });
  const t = home.tabs;
  const cross = sec('band-paper shop-cross', `<div class="cross-grid"><div class="cross-card"><p class="tab-eyebrow">${esc(t[1].eyebrow)}</p><p class="cross-text">${smart(t[1].text)}</p>${B.btn(t[1].cta, 'workshops.html', 'btn-primary')}</div></div>`);
  return { title: 'Shop — Thinkadoo', main: hero + cross + phraseBand() };
}

// ------------------------------------------------------------------ MELA
function envelopeSet() {
  const cols = [C.yel, C.teal, C.red, C.grn, C.blu, C.yel, C.red];
  const tabs = mela.inside.envelopes.map((e) => `<button class="env" role="tab" type="button" id="env-${e.n}" data-env="${e.n}" aria-selected="${e.n === 1}" aria-controls="env-panel-${e.n}" tabindex="${e.n === 1 ? 0 : -1}">${svg(O.envelope(cols[e.n - 1]), { cls: 'env-art-svg' })}<span class="env-n">${e.n}</span><span class="env-label">${smart(e.name)}</span></button>`).join('');
  const panels = mela.inside.envelopes.map((e) => B.envPanel(e, { hidden: e.n !== 1 })).join('');
  return `<div class="env-set" data-env-set><div class="env-row" role="tablist" aria-label="${esc(mela.inside.sub)}">${tabs}</div><div class="env-stage"><div class="env-floor" aria-hidden="true"></div>${panels}<div class="env-nav"><button type="button" class="reel-btn" data-env-prev aria-label="${ui.previous}">${icon('prev')}</button><button type="button" class="reel-btn" data-env-next aria-label="${ui.next}">${icon('next')}</button></div></div></div>`;
}
function melaPage() {
  const hero = subHero({ id: 'mela', sky: C.teal, halo: C.yel, p1: p1Shop(), p2: p2Mela(), kicker: mela.kicker, title: mela.title, rest: 0, vh: 180 });
  const story = sec('band-paper', `<div class="story-grid">${B.melaStory()}${storyScene('mela')}</div>`);
  const inside = sec('band-yellow env-band', `<div class="sec-head">${B.melaInsideHead()}</div>${envelopeSet()}<p class="env-outro">${smart(mela.inside.outro)}</p>`, 'inside');
  const need = sec('band-blue props-band', B.melaNeed());
  const adv = sec('band-red adv-band', B.melaAdventure());
  const more = sec('band-paper more-band', B.benefits(mela.more) + B.melaClose());
  const perfect = sec('band-teal perfect-band', B.perfectFor(mela.perfect));
  const det = sec('band-paper details-band', `<div class="ticket">${B.details(mela.details)}</div>`);
  const ready = sec('band-navy ready-band', B.readyBlock(mela.ready, 'mela') + `<div class="ready-art" aria-hidden="true">${svg(O.truck)}</div>`);
  const share = sec('band-yellow share-band', B.shareBlock(mela.share));
  return { title: 'Mela Truck — Thinkadoo', main: hero + story + inside + need + adv + more + perfect + det + ready + share };
}

// ------------------------------------------------------------------ PAINT
function paintPage() {
  const hero = subHero({ id: 'paint', sky: C.yel, halo: C.red, p1: p1Paint(), p2: p2Paint(), kicker: paint.kicker, title: paint.title, rest: 0, vh: 180 });
  const story = sec('band-paper', `<div class="story-grid">${B.paintStory()}${storyScene('paint')}</div>`);
  const inside = sec('band-teal props-band paint-inside', B.paintInside());
  const more = sec('band-paper more-band', B.benefits(paint.more));
  const perfect = sec('band-yellow perfect-band', B.perfectFor(paint.perfect));
  const det = sec('band-paper details-band', `<div class="ticket">${B.details(paint.details)}</div>`);
  const ready = sec('band-navy ready-band', B.readyBlock(paint.ready, 'paint') + `<div class="ready-art" aria-hidden="true">${svg(O.ganesha)}</div>`);
  const share = sec('band-red share-band', B.shareBlock(paint.share));
  return { title: 'Paint My God — Thinkadoo', main: hero + story + inside + more + perfect + det + ready + share };
}

// ------------------------------------------------------------------ WORKSHOPS
function workshopsPage() {
  const hero = subHero({ id: 'ws', sky: C.grn, halo: C.paper, p1: p1Work(), p2: p2Work(), title: workshops.title, rest: 0, vh: 170 });
  const intro = sec('band-paper', `<div class="ws-intro">${B.workshopIntro()}</div>`);
  const card = sec('band-yellow ws-band', B.bookbindingCard(), 'bookbinding');
  const expect = sec('band-blue expect-band', B.expectBlock());
  const loop = sec('band-red loop-band', B.loopBlock());
  const host = sec('band-paper host-band', B.hostBlock());
  return { title: 'Workshops — Thinkadoo', main: hero + intro + card + expect + loop + host };
}

// ------------------------------------------------------------------ STORY
function storyPage() {
  const hero = subHero({ id: 'story', sky: C.blu, halo: C.yel, p1: p1Story(), p2: p2Story(), title: about.title, rest: 0, vh: 160 });
  const a = sec('band-paper about-band', B.aboutBlock());
  const f = sec('band-blue founders-band', B.foundersBlock());
  const c = sec('band-yellow community-band', B.communityBlock());
  return { title: 'Our Story — Thinkadoo', main: hero + a + f + c };
}

// ------------------------------------------------------------------ CONTACT
function contactPage() {
  const hero = subHero({ id: 'contact', sky: C.red, halo: C.yel, p1: p1Contact(), p2: p2Contact(), title: contact.title, rest: 0, vh: 150 });
  const intro = sec('band-paper contact-band', `<div class="contact-grid"><div>${B.contactIntro()}</div><div>${B.contactRoutes()}</div></div>`);
  return { title: 'Contact — Thinkadoo', main: hero + intro + phraseBand() };
}

// ------------------------------------------------------------------ CART
function cartPage() {
  const hero = subHero({ id: 'cart', sky: C.yel, halo: C.red, p1: p1Cart(), p2: p2Cart(), title: ui.cart, rest: 0, vh: 140 });
  const body = sec('band-paper cart-band', B.cartBlock());
  return { title: 'Cart — Thinkadoo', main: hero + body };
}

export const theatre = {
  id: 'theatre', fonts: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">`,
  logo: 'yellow', transition: 560,
  pages: { home: homePage, shop: shopPage, mela: melaPage, paint: paintPage, workshops: workshopsPage, story: storyPage, contact: contactPage, cart: cartPage },
};
