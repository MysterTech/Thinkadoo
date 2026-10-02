// Concept D: THE STICKER BOOK. Die-cut stickers on cream sheets on a green desk; a draggable deck;
// a Mela Passport that fills as the seven envelopes are opened.
import { O, Sc, svg, esc, smart, icon, content, C } from './kit.mjs';
import * as B from './blocks.mjs';

const { ui, home, shop, mela, paint, workshops, about, community, contact, reel: reelData } = content;
const ART = { mela: O.truck, paint: O.ganesha, bookbinding: O.notebook };

// die-cut: white border, navy outline, offset shadow, around any art
const dieDefs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<filter id="die" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB">
<feMorphology in="SourceAlpha" operator="dilate" radius="9" result="o"/><feFlood flood-color="#201b4a"/><feComposite in2="o" operator="in" result="outer"/>
<feMorphology in="SourceAlpha" operator="dilate" radius="6" result="w"/><feFlood flood-color="#fffdf8"/><feComposite in2="w" operator="in" result="white"/>
<feOffset in="o" dx="7" dy="8" result="so"/><feFlood flood-color="#201b4a" flood-opacity=".28"/><feComposite in2="so" operator="in" result="shadow"/>
<feMerge><feMergeNode in="shadow"/><feMergeNode in="outer"/><feMergeNode in="white"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>`;
const die = (art, { cls = '', w = 200, r = 0, tx = 0, ty = 0, d = 12, i = 0, label = '', style = '' }) => {
  const a = typeof art === 'function' ? art() : art;
  return `<svg class="sticker ${cls}" viewBox="${a.vb}" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'} focusable="false" style="--w:${w}px;--r:${r}deg;--tx:${tx};--ty:${ty};--d:${d};--i:${i};${style}" xmlns="http://www.w3.org/2000/svg"><g filter="url(#die)">${a.body}</g></svg>`;
};
const words = (txt, cls = '') => txt.split(' ').map((w, k) => `<span class="w ${cls}" style="--i:${k}">${esc(w)}</span>`).join(' ');
const field = () => { const t = mela.adventure.verbs.map((v) => v.replace('.', '')).join(' '); return `<div class="type-field" aria-hidden="true">${Array.from({ length: 5 }, (_, i) => `<p style="--o:${i % 2 ? '-6%' : '-18%'}">${esc(t)} ${esc(t)}</p>`).join('')}</div>`; };
const tape = (cls = '') => `<i class="tape ${cls}" aria-hidden="true"></i>`;

// ------------------------------------------------------------------ the deck (home)
const cardCopy = {
  mela: { name: 'Mela Truck', line: mela.title, href: 'mela-truck.html', bg: C.teal, tab: 'shop' },
  paint: { name: 'Paint My God', line: paint.title, href: 'paint-my-god.html', bg: C.yel, tab: 'shop' },
  bookbinding: { name: 'BOOKBINDING', line: 'Make your own handmade notebook.', href: 'workshops.html', bg: C.red, tab: 'workshop' },
};
function deck() {
  const ids = ['mela', 'paint', 'bookbinding'];
  const cards = ids.map((id, i) => {
    const c = cardCopy[id];
    return `<article class="card" data-card="${id}" data-tab="${c.tab}" style="--pos:${i};--bg:${c.bg}" aria-roledescription="slide" aria-label="${esc(c.name)}">
<a class="card-link" href="${c.href}"><span class="card-art">${svg(ART[id], { cls: 'card-svg' })}</span><span class="card-name">${smart(c.name)}</span> <span class="card-line">${smart(c.line)}</span></a></article>`;
  }).join('');
  return `<div class="deck" data-deck role="group" aria-roledescription="carousel" aria-label="${ui.deckLabel}"><div class="deck-cards">${cards}</div>
<div class="deck-ui"><button type="button" class="reel-btn" data-deck-prev aria-label="${ui.previous}">${icon('prev')}</button><button type="button" class="reel-btn" data-deck-next aria-label="${ui.next}">${icon('next')}</button></div><p class="sr" data-deck-live aria-live="polite"></p></div>`;
}

// ------------------------------------------------------------------ HOME
function homePage() {
  const tabs = B.homeTabs();
  const stickers = [
    die(O.flower(C.red), { w: 120, r: -14, d: 22, i: 0, cls: 's-flower' }),
    die(O.fan, { w: 150, r: 10, d: 26, i: 1, cls: 's-fan' }),
    die(O.paintPot, { w: 110, r: -8, d: 20, i: 2, cls: 's-pot' }),
    die(O.scissors, { w: 130, r: 16, d: 24, i: 3, cls: 's-scissors' }),
  ].join('');
  const passportSticker = `<button type="button" class="s-passport" data-passport-open aria-label="${ui.passport}">${die(O.passport, { w: 118, r: 8, d: 18, i: 4 })}</button>`;
  const hero = `<section class="sheet-stack hero-stack" data-tabs-scope data-active="shop" aria-labelledby="home-title" data-pointer>
${field()}
<div class="sheet hero-sheet">${tape('t1')}${tape('t2')}
<div class="hero-copy"><h1 id="home-title"><span class="hl hl-a">${words('A brighter,')}</span> <span class="hl hl-b">${words('kinder,')}</span> <span class="hl hl-c">${words('more creative')}</span> <span class="hl hl-a">${words('world begins with')}</span> <span class="hl hl-b">${words('small hands.')}</span></h1>
<p class="hero-sub">${smart(home.subline)}</p>
<div class="hero-tabs">${tabs.tabs}<div class="note">${tape('tn')}${tabs.panels}</div></div></div>
${stickers}${passportSticker}</div>
<div class="deck-wrap">${deck()}</div>
</section>`;
  const hands = `<section class="sheet-stack hands-stack" aria-label="${esc(home.hands)}"><div class="sheet hands-sheet">${tape('t1')}${tape('t2')}<p class="hands-text">${esc(home.hands).replace('hands dirty', '<mark>hands dirty</mark>')}</p><div class="hands-art" aria-hidden="true">${die(O.hands, { w: 360, r: -4, d: 14, i: 0 })}${die(O.paintPot, { w: 120, r: 10, d: 24, i: 1 })}</div></div></section>`;
  const reel = `<section class="sheet-stack reel-stack" aria-label="${ui.reelLabel}"><div class="sheet reel-sheet">${tape('t1')}${tape('t2')}${B.reel({ cls: 'reel-sticker' })}</div></section>`;
  return { title: 'Thinkadoo — The Sticker Book', desc: home.subline, main: dieDefs + hero + hands + reel + phraseTape(), bodyCls: 'is-home' };
}
function phraseTape() {
  const t = mela.adventure.verbs.join(' ');
  const row = `<span>${esc(t)}</span>`.repeat(4);
  return `<div class="tape-wrap" aria-hidden="true"><div class="tape-band" data-loop><div class="tape-track">${row}${row}</div></div></div>`;
}

// ------------------------------------------------------------------ sub hero (a sheet with stickers that overlap its edge)
function subHero({ id, kicker, title, principal, extras = '' }) {
  return `<section class="sheet-stack sub-stack" aria-labelledby="${id}-title" data-pointer>${field()}<div class="sheet sub-sheet">${tape('t1')}${tape('t2')}<div class="sub-copy">${kicker ? `<p class="sub-kicker">${smart(kicker)}</p>` : ''}<h1 id="${id}-title">${smart(title)}</h1></div>${principal}${extras}</div></section>`;
}
const sec = (cls, inner, id = '') => `<section class="band sheet ${cls}"${id ? ` id="${id}"` : ''}>${tape('t1')}${tape('t2')}<div class="wrap">${inner}</div></section>`;
const mini = (art, o) => die(art, o);

function shopPage() {
  const card = (id, rot) => { const c = cardCopy[id]; return `<article class="card big-card" style="--bg:${c.bg};--r:${rot}deg"><a class="card-link" href="${c.href}"><span class="card-art">${svg(ART[id], { cls: 'card-svg' })}</span><span class="card-name">${smart(c.name)}</span></a></article>`; };
  const principal = `<div class="shop-cards">${card('mela', -3)}${card('paint', 3)}</div>`;
  const extras = mini(O.flower(C.teal), { w: 110, r: 12, d: 22, i: 3, cls: 'x1' }) + mini(O.star(C.yel), { w: 90, r: -10, d: 24, i: 4, cls: 'x2' });
  const cross = sec('sheet-paper shop-cross', `<div class="cross-grid"><div class="cross-card"><p class="tab-eyebrow">${esc(home.tabs[1].eyebrow)}</p><p class="cross-text">${smart(home.tabs[1].text)}</p>${B.btn(home.tabs[1].cta, 'workshops.html', 'btn-primary')}</div></div>`);
  return { title: 'Shop — Thinkadoo', main: dieDefs + subHero({ id: 'shop', title: shop.title, principal, extras }) + cross + phraseTape() };
}

function passportSlots(cls = '') {
  const cols = [C.yel, C.teal, C.red, C.grn, C.blu, C.yel, C.red];
  const art = [O.ferris, O.shooter, O.leopard, O.kaleido, O.stitch, O.candy, O.truck];
  return `<ol class="slots ${cls}" aria-label="${ui.passport}">${mela.inside.envelopes.map((e, i) => {
    const a = art[i]();
    return `<li class="slot" data-slot="${e.n}"><span class="slot-n">${e.n}</span><svg class="slot-art" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54" fill="${cols[i]}" stroke="#201b4a" stroke-width="5"/><svg x="14" y="14" width="92" height="92" viewBox="${a.vb}" preserveAspectRatio="xMidYMid meet">${a.body}</svg></svg><span class="sr slot-state"></span></li>`;
  }).join('')}</ol>`;
}
function envelopeSet() {
  const cols = [C.yel, C.teal, C.red, C.grn, C.blu, C.yel, C.red];
  const tabs = mela.inside.envelopes.map((e) => `<button class="env" role="tab" type="button" id="env-${e.n}" data-env="${e.n}" aria-selected="${e.n === 1}" aria-controls="env-panel-${e.n}" tabindex="${e.n === 1 ? 0 : -1}">${svg(O.envelope(cols[e.n - 1]), { cls: 'env-art-svg' })}<span class="env-n">${e.n}</span><span class="env-label">${smart(e.name)}</span></button>`).join('');
  const panels = mela.inside.envelopes.map((e) => B.envPanel(e, { hidden: e.n !== 1 })).join('');
  return `<div class="env-set passport-set" data-env-set data-passport><div class="passport-page"><p class="passport-title">${ui.passport}</p>${passportSlots()}<p class="passport-count" aria-live="polite"></p></div><div class="env-row" role="tablist" aria-label="${esc(mela.inside.sub)}">${tabs}</div><div class="env-stage">${panels}<div class="env-nav"><button type="button" class="reel-btn" data-env-prev aria-label="${ui.previous}">${icon('prev')}</button><button type="button" class="reel-btn" data-env-next aria-label="${ui.next}">${icon('next')}</button></div></div></div>`;
}
function melaPage() {
  const principal = die(O.truck, { w: 520, r: -3, d: 12, i: 0, cls: 'principal' });
  const extras = mini(O.ferris, { w: 150, r: 8, d: 24, i: 1, cls: 'x1' }) + mini(O.leopard, { w: 120, r: -9, d: 22, i: 2, cls: 'x2' }) + mini(O.kaleido, { w: 150, r: 12, d: 28, i: 3, cls: 'x3' }) + mini(O.passport, { w: 90, r: -6, d: 20, i: 4, cls: 'x4' });
  const story = sec('sheet-paper', `<div class="story-solo">${B.melaStory()}</div>`);
  const inside = sec('sheet-yellow env-band', `<div class="sec-head">${B.melaInsideHead()}</div>${envelopeSet()}<p class="env-outro">${smart(mela.inside.outro)}</p>`, 'inside');
  const need = sec('sheet-blue props-band', B.melaNeed());
  const adv = sec('sheet-red adv-band', B.melaAdventure());
  const more = sec('sheet-paper more-band', B.benefits(mela.more) + B.melaClose());
  const perfect = sec('sheet-teal perfect-band', B.perfectFor(mela.perfect));
  const det = sec('sheet-paper details-band', `<div class="ticket">${B.details(mela.details)}</div>`);
  const ready = sec('sheet-navy ready-band', B.readyBlock(mela.ready, 'mela') + `<div class="ready-art" aria-hidden="true">${svg(O.truck)}</div>`);
  const share = sec('sheet-yellow share-band', B.shareBlock(mela.share));
  return { title: 'Mela Truck — Thinkadoo', main: dieDefs + subHero({ id: 'mela', kicker: mela.kicker, title: mela.title, principal, extras }) + story + inside + need + adv + more + perfect + det + ready + share };
}
function paintPage() {
  const principal = die(O.ganesha, { w: 400, r: 3, d: 12, i: 0, cls: 'principal' });
  const extras = mini(O.paintPot, { w: 120, r: -8, d: 22, i: 1, cls: 'x1' }) + mini(O.markers, { w: 170, r: 10, d: 24, i: 2, cls: 'x2' }) + mini(O.flower(C.red), { w: 100, r: 14, d: 26, i: 3, cls: 'x3' }) + mini(O.gems, { w: 150, r: -12, d: 26, i: 4, cls: 'x4' });
  const story = sec('sheet-paper', `<div class="story-solo">${B.paintStory()}</div>`);
  const inside = sec('sheet-teal props-band paint-inside', B.paintInside());
  const more = sec('sheet-paper more-band', B.benefits(paint.more));
  const perfect = sec('sheet-yellow perfect-band', B.perfectFor(paint.perfect));
  const det = sec('sheet-paper details-band', `<div class="ticket">${B.details(paint.details)}</div>`);
  const ready = sec('sheet-navy ready-band', B.readyBlock(paint.ready, 'paint') + `<div class="ready-art" aria-hidden="true">${svg(O.ganesha)}</div>`);
  const share = sec('sheet-red share-band', B.shareBlock(paint.share));
  return { title: 'Paint My God — Thinkadoo', main: dieDefs + subHero({ id: 'paint', kicker: paint.kicker, title: paint.title, principal, extras }) + story + inside + more + perfect + det + ready + share };
}
function workshopsPage() {
  const principal = die(O.notebook, { w: 480, r: -3, d: 12, i: 0, cls: 'principal' });
  const extras = mini(O.scissors, { w: 130, r: 12, d: 24, i: 1, cls: 'x1' }) + mini(O.paintPot, { w: 110, r: -10, d: 22, i: 2, cls: 'x2' }) + mini(O.folder, { w: 170, r: 8, d: 26, i: 3, cls: 'x3' });
  const intro = sec('sheet-paper', `<div class="ws-intro">${B.workshopIntro()}</div>`);
  const card = sec('sheet-yellow ws-band', B.bookbindingCard(), 'bookbinding');
  const expect = sec('sheet-blue expect-band', B.expectBlock());
  const loop = sec('sheet-red loop-band', B.loopBlock());
  const host = sec('sheet-paper host-band', B.hostBlock());
  return { title: 'Workshops — Thinkadoo', main: dieDefs + subHero({ id: 'ws', title: workshops.title, principal, extras }) + intro + card + expect + loop + host };
}
function storyPage() {
  const principal = die(O.hands, { w: 420, r: -3, d: 12, i: 0, cls: 'principal' });
  const extras = mini(O.flower(C.red), { w: 110, r: 10, d: 24, i: 1, cls: 'x1' }) + mini(O.star(C.yel), { w: 90, r: -12, d: 26, i: 2, cls: 'x2' });
  return { title: 'Our Story — Thinkadoo', main: dieDefs + subHero({ id: 'story', title: about.title, principal, extras }) + sec('sheet-paper about-band', B.aboutBlock()) + sec('sheet-blue founders-band', B.foundersBlock()) + sec('sheet-yellow community-band', B.communityBlock()) };
}
function contactPage() {
  const principal = die(() => O.envelope(C.yel), { w: 480, r: -4, d: 12, i: 0, cls: 'principal' });
  const extras = mini(O.star(C.red), { w: 90, r: 14, d: 26, i: 1, cls: 'x1' }) + mini(O.avatars, { w: 150, r: -8, d: 22, i: 2, cls: 'x2' });
  return { title: 'Contact — Thinkadoo', main: dieDefs + subHero({ id: 'contact', title: contact.title, principal, extras }) + sec('sheet-paper contact-band', `<div class="contact-grid"><div>${B.contactIntro()}</div><div>${B.contactRoutes()}</div></div>`) + phraseTape() };
}
function cartPage() {
  const principal = die(O.basket, { w: 320, r: -3, d: 12, i: 0, cls: 'principal' });
  const extras = mini(O.star(C.yel), { w: 90, r: 10, d: 26, i: 1, cls: 'x1' }) + mini(O.passport, { w: 90, r: -8, d: 22, i: 2, cls: 'x2' });
  return { title: 'Cart — Thinkadoo', main: dieDefs + subHero({ id: 'cart', title: ui.cart, principal, extras }) + sec('sheet-paper cart-band', B.cartBlock()) };
}

// header with the Passport button + dialog
function header(o) {
  const base = B.header(o);
  const btn = `<button class="passport-btn" type="button" data-passport-open aria-label="${ui.passport}"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 2.7 6.1 6.6.6-5 4.4 1.5 6.5L12 16.7l-5.8 3.4 1.5-6.5-5-4.4 6.6-.6Z" fill="currentColor"/></svg><span class="passport-word">${ui.passport}</span><span class="passport-n" data-passport-n>0</span></button>`;
  const dlg = `<dialog class="td-dialog passport-dialog" id="passport-dialog" aria-labelledby="pp-title"><form method="dialog"><h2 id="pp-title">${ui.passport}</h2><p>${esc(mela.need.items.find((i) => i.id === 'passport').text[0])}</p><p>${esc(mela.need.items.find((i) => i.id === 'passport').text[1])}</p>${passportSlots('dialog-slots')}<p class="passport-count" aria-live="polite"></p><button class="btn" value="close" autofocus>${ui.close}</button></form></dialog>`;
  return base.replace('<div class="header-tools">', `<div class="header-tools">${btn}`).replace('</header>', `</header>${dlg}`);
}

export const sticker = {
  id: 'sticker-book', fonts: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;700;800&display=swap" rel="stylesheet">`,
  logo: 'red', transition: 480, script: true, header,
  pages: { home: homePage, shop: shopPage, mela: melaPage, paint: paintPage, workshops: workshopsPage, story: storyPage, contact: contactPage, cart: cartPage },
};
