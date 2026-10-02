// Concept-neutral content blocks + page shell. Concept CSS gives them their look; concept
// templates add the scenes, widgets and wrappers that make each world different.
import { O, Sc, svg, esc, smart, defs, icon, lines, valueHtml, pendingChip, content, navCurrent, dialogs, PAGES } from './kit.mjs';

const { ui, nav, footerPolicies, home, shop, mela, paint, workshops, about, community, contact, reel: reelData, products } = content;

const BUILD = Date.now().toString(36);
// ------------------------------------------------------------------ page shell
export function shell({ concept, page, title, desc, bodyCls = '', transition = 520, header, main, footer, scriptsAfter = '', headExtra = '', fonts = '' }) {
  const text = { ...ui, products, cartLabel: ui.cart };
  const cartArt = ['mela', 'paint'].map((id) => `<template data-cart-art="${id}">${svg(id === 'mela' ? O.truck : O.ganesha, {})}</template>`).join('');
  return `<!doctype html>
<html lang="en" data-motion="on">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc || home.subline)}">
<meta name="keywords" content="${esc(content.seoKeywords)}">
<meta name="theme-color" content="#201b4a">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%23fcda00' stroke='%23201b4a' stroke-width='2'/%3E%3C/svg%3E">
${fonts}
<link rel="stylesheet" href="../shared/base.css?v=${BUILD}">
<link rel="stylesheet" href="../shared/art.css?v=${BUILD}">
<link rel="stylesheet" href="../shared/blocks.css?v=${BUILD}">
<link rel="stylesheet" href="${concept}.css?v=${BUILD}">
${headExtra}
</head>
<body class="${concept} page-${page} ${bodyCls}" data-concept="${concept}" data-page="${page}" data-transition="${transition}">
<a class="skip" href="#main">${ui.skip}</a>
${defs()}
${header}
<main id="main">
${main}
</main>
${footer}
${dialogs()}
<div class="page-cover" aria-hidden="true"></div>
${cartArt}
<script id="tdo-text" type="application/json">${JSON.stringify(text)}</script>
<script src="../shared/engine.js?v=${BUILD}"></script>
${scriptsAfter}
</body>
</html>`;
}

// ------------------------------------------------------------------ header / footer
export function header({ page, logo = 'yellow', cls = '' }) {
  const cur = navCurrent(page);
  const links = nav.map((n) => `<a href="${n.href}" class="nav-link"${n.id === cur ? ' aria-current="page"' : ''}><span>${esc(n.label)}</span></a>`).join('');
  return `<header class="site-header ${cls}">
<a class="brand" href="index.html" aria-label="Thinkadoo, home"${page === 'home' ? ' aria-current="page"' : ''}><img src="../assets/thinkadoo-${logo}.png" alt="Thinkadoo" width="1950" height="606"></a>
<button class="menu-btn" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav">${icon('menu')}<span class="menu-label">${ui.menu}</span></button>
<nav class="site-nav" id="site-nav" aria-label="${ui.menuPanel}">${links}</nav>
<div class="header-tools">
<a class="cart-link" href="cart.html" data-cart-link aria-label="${ui.cart}, 0"${page === 'cart' ? ' aria-current="page"' : ''}>${icon('cart')}<span class="cart-word">${ui.cart}</span><span class="cart-count" data-cart-count>0</span></a>
<button class="motion-btn" type="button" data-motion-toggle aria-pressed="true"><span class="mt-dot" aria-hidden="true"></span><span class="mt-label">${ui.motionOn}</span></button>
<a class="concepts-link" href="../index.html">${ui.allConcepts}</a>
</div>
</header>`;
}

export function footer({ logo = 'yellow', cls = '' }) {
  const pol = footerPolicies.map((p) => `<li><button type="button" data-dialog="${p.id}" data-label="${esc(p.label)}">${esc(p.label)}</button></li>`).join('');
  const nv = [{ label: 'Home', href: 'index.html' }, ...nav].map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('');
  return `<footer class="site-footer ${cls}">
<div class="footer-inner">
<a class="footer-brand" href="index.html" aria-label="Thinkadoo, home"><img src="../assets/thinkadoo-${logo}.png" alt="Thinkadoo" width="1950" height="606"></a>
<nav class="footer-nav" aria-label="Footer"><ul class="footer-links">${nv}</ul><ul class="footer-policies">${pol}</ul></nav>
<p class="footer-note">${ui.prototype}</p>
</div>
</footer>`;
}

// ------------------------------------------------------------------ buttons / links
export const btn = (label, href, cls = '', arrow = true) => `<a class="btn ${cls}" href="${href}"><span>${smart(label)}</span>${arrow ? icon('arrow') : ''}</a>`;
export const btnAction = (label, attrs, cls = '', arrow = false) => `<button class="btn ${cls}" type="button" ${attrs}><span>${smart(label)}</span>${arrow ? icon('arrow') : ''}</button>`;
export const priceHtml = (p) => (typeof p === 'object' && p.pending ? pendingChip(p, ui.priceTbc) : `<span class="price-fig">${esc(p)}</span>`);

// ------------------------------------------------------------------ tabs on home
export function homeTabs() {
  const tabs = home.tabs.map((t, i) => `<button class="tab" role="tab" id="tab-${t.id}" type="button" data-tab="${t.id}" aria-selected="${i === 0}" aria-controls="panel-${t.id}" tabindex="${i === 0 ? 0 : -1}"><span>${esc(t.label)}</span></button>`).join('');
  const panels = home.tabs.map((t, i) => `<div class="tab-panel" role="tabpanel" id="panel-${t.id}" aria-labelledby="tab-${t.id}" data-panel="${t.id}"${i ? ' hidden' : ''}><p class="tab-eyebrow">${esc(t.eyebrow)}</p><p class="tab-text">${smart(t.text)}</p>${btn(t.cta, t.href, 'btn-primary')}</div>`).join('');
  return { tabs: `<div class="tablist" role="tablist" aria-label="${ui.tabs}" data-tabs>${tabs}</div>`, panels };
}

// ------------------------------------------------------------------ reel (illustrated clips)
function clipSvg(id) {
  const truck = O.truck(), g = O.ganesha(), nb = O.notebook();
  if (id === 'mela') {
    return `<svg class="clip clip-mela" viewBox="0 0 640 400" role="img" aria-label="Illustrated clip: the Mela Truck rolling past bunting" preserveAspectRatio="xMidYMid slice">
<rect width="640" height="400" fill="#32c3e0"/>
<g class="clip-far"><g transform="translate(0 112)">${Sc.hills({ w: 1280, h: 150, color: O.C.grn, r: 90 }).body}</g></g>
<g class="clip-bunting" transform="translate(0 8)">${Sc.bunting({ w: 640, sag: 22, n: 11 }).body}</g>
<path d="M0 236h640v164H0Z" fill="#fcda00" stroke="#201b4a" stroke-width="5"/>
<path class="clip-road" d="M-40 262H700" stroke="#fffdf8" stroke-width="8" stroke-dasharray="46 30" stroke-linecap="round"/>
<g class="perform-host perform clip-hero" transform="translate(112 16) scale(.62)"><g class="truck-roll"><svg viewBox="${truck.vb}" width="700" height="430">${truck.body}</svg></g></g>
<g transform="translate(40 200) scale(.78)" opacity="1"><svg viewBox="0 0 110 200" width="110" height="200">${Sc.kidWave().body}</svg></g><g transform="translate(500 214) scale(.7)"><svg viewBox="0 0 90 190" width="90" height="190">${Sc.kid().body}</svg></g><g transform="translate(560 220) scale(.55)"><svg viewBox="0 0 110 200" width="110" height="200">${Sc.kidWave().body}</svg></g>
</svg>`;
  }
  if (id === 'paint') {
    return `<svg class="clip clip-paint" viewBox="0 0 640 400" role="img" aria-label="Illustrated clip: a Ganesha idol being painted" preserveAspectRatio="xMidYMid slice">
<rect width="640" height="400" fill="#fcda00"/><circle cx="320" cy="168" r="150" fill="#ef3a24" stroke="#201b4a" stroke-width="5"/>
<g class="clip-blank" transform="translate(200 8) scale(.52)"><svg viewBox="${g.vb}" width="480" height="490">${g.body}</svg></g>
<g class="clip-color" transform="translate(200 8) scale(.52)"><svg viewBox="${g.vb}" width="480" height="490">${g.body}</svg></g>
<g class="clip-brush"><g transform="translate(150 110) rotate(28) scale(.6)"><svg viewBox="0 0 100 330" width="100" height="330">${O.brush().body}</svg></g></g>
<g transform="translate(60 150) scale(.5)"><svg viewBox="0 0 150 180" width="150" height="180">${O.paintPot().body}</svg></g>
</svg>`;
  }
  return `<svg class="clip clip-book" viewBox="0 0 640 400" role="img" aria-label="Illustrated clip: a notebook being sewn together" preserveAspectRatio="xMidYMid slice">
<rect width="640" height="400" fill="#5cba47"/><path d="M0 330q160-40 320 0t320 0V400H0Z" fill="#2960ad" stroke="#201b4a" stroke-width="5"/>
<g class="perform-host perform clip-hero" transform="translate(110 8) scale(.78)"><svg viewBox="${nb.vb}" width="520" height="380">${nb.body}</svg></g>
</svg>`;
}
export function reel({ cls = '' } = {}) {
  const slides = reelData.map((r, i) => `<article class="reel-slide${i === 0 ? ' is-current' : ''}" data-slide data-name="${esc(r.name)}" aria-roledescription="slide" aria-label="${ui.clipOf(i + 1, reelData.length)}: ${esc(r.name)}"${i ? ' aria-hidden="true" inert' : ''}>
${clipSvg(r.id)}
<div class="reel-cap"><h3 class="reel-name">${smart(r.name)}</h3><p class="reel-line">${smart(r.line)}</p><a class="reel-link" href="${r.href}"><span>${ui.explore}</span>${icon('arrow')}<span class="sr"> ${esc(r.name)}</span></a></div>
</article>`).join('');
  const dots = reelData.map((r, i) => `<button class="reel-dot" type="button" data-dot aria-label="${ui.clipOf(i + 1, reelData.length)}: ${esc(r.name)}" aria-current="${i === 0}"></button>`).join('');
  return `<section class="reel ${cls}" data-reel aria-roledescription="carousel" aria-label="${ui.reelLabel}">
<div class="reel-screen">${slides}</div>
<div class="reel-ui"><button class="reel-btn" type="button" data-reel-prev aria-label="${ui.previous}">${icon('prev')}</button><button class="reel-btn" type="button" data-reel-pause aria-pressed="false" data-state="playing" aria-label="${ui.pause}"><svg class="ico i-pause" aria-hidden="true"><use href="#i-pause"/></svg><svg class="ico i-play" aria-hidden="true"><use href="#i-play"/></svg><span class="sr">${ui.pause}</span></button><div class="reel-dots">${dots}</div><button class="reel-btn" type="button" data-reel-next aria-label="${ui.next}">${icon('next')}</button></div>
<p class="reel-note">${ui.illustrated}</p>
<p class="sr" data-reel-live aria-live="polite"></p>
</section>`;
}

// ------------------------------------------------------------------ Mela blocks
export function melaStory() {
  const s = mela.story;
  return `<div class="story story-mela">
<p class="story-lead">${smart(s.lead)}</p>
<ul class="story-list">${s.list.map((l, i) => `<li data-line="${i}">${smart(l)}</li>`).join('')}</ul>
<p class="story-close">${smart(s.close)}</p>
<p class="story-with">${smart(s.withBefore)}<b>${smart(s.withBold)}</b>${smart(s.withAfter)}</p>
<ul class="story-steps">${s.steps.map((l) => `<li>${smart(l)}</li>`).join('')}</ul>
<ul class="story-questions">${s.questions.map((l) => `<li>${smart(l)}</li>`).join('')}</ul>
<p class="story-single">${smart(s.single)}</p>
<p class="story-punch">${smart(s.punch)}</p>
</div>`;
}
export const melaArt = { ferris: () => O.ferris(), shooter: O.shooter, leopard: O.leopard, kaleido: O.kaleido, stitch: O.stitch, candy: O.candy, truck: O.truck };
export function envPanel(e, { hidden = true } = {}) {
  return `<div class="env-panel" role="tabpanel" id="env-panel-${e.n}" aria-labelledby="env-${e.n}" data-env-panel="${e.n}"${hidden ? ' hidden' : ''}>
<div class="env-art perform-host">${svg(melaArt[e.id], { cls: 'art-fill' })}</div>
<div class="env-copy"><h3 class="env-name"><span class="env-num">${e.n}.</span> ${smart(e.name)}</h3><p class="env-verbs">${esc(e.verbs)}</p><div class="env-lines">${e.lines.map((l) => `<p>${smart(l)}</p>`).join('')}</div><p class="env-contains"><b>Envelope contains:</b> ${smart(e.contains)}</p></div>
</div>`;
}
export function melaInsideHead() {
  const i = mela.inside;
  return `<h2 class="sec-title">${smart(i.title)}</h2><p class="sec-sub">${smart(i.sub)}</p><p class="sec-intro">${smart(i.intro)}</p>`;
}
export const needArt = { markers: O.markers, scissors: O.scissors, folder: O.folder, glue: O.glue, passport: O.passport, avatars: O.avatars };
export function melaNeed() {
  const n = mela.need;
  return `<h2 class="sec-title">${smart(n.title)}</h2><p class="sec-intro">${smart(n.intro)}</p>
<ul class="need-grid">${n.items.map((it) => `<li class="need-item" data-need="${it.id}"><div class="need-art">${svg(needArt[it.id], { cls: 'art-fill' })}</div><h3>${smart(it.name)}</h3>${it.text.map((t) => `<p>${smart(t)}</p>`).join('')}</li>`).join('')}</ul>`;
}
export function melaAdventure() {
  const a = mela.adventure;
  return `<h2 class="sec-title">${smart(a.title)}</h2><p class="sec-intro">${smart(a.intro)}</p>
<ul class="verb-list">${a.verbs.map((v, i) => `<li data-v="${i}">${esc(v)}</li>`).join('')}</ul><div class="adv-out">${a.outro.map((l) => `<p>${smart(l)}</p>`).join('')}</div>`;
}
export function benefits(m, extra = '') {
  return `<h2 class="sec-title">${smart(m.title)}</h2><p class="sec-intro">${smart(m.intro)}</p>
<ul class="benefit-list">${m.items.map((b, i) => `<li class="benefit" data-b="${i}"><h3>${smart(b.name)}</h3><p>${smart(b.text)}</p></li>`).join('')}</ul>${extra}`;
}
export function melaClose() {
  const m = mela.more;
  return `<div class="more-close"><p class="more-lead">${smart(m.closeLead)}</p><p class="more-punch">${smart(m.close)}</p></div>`;
}
export function perfectFor(p) {
  return `<h2 class="sec-title">${smart(p.title)}</h2><ul class="check-list">${p.items.map((t) => `<li>${icon('check', 'ico chk')}<span>${smart(t)}</span></li>`).join('')}</ul>`;
}
export function details(d) {
  const rows = d.rows.map(([k, v]) => `<div class="det-row"><dt>${smart(k)}</dt><dd>${valueHtml(v)}</dd></div>`).join('');
  return `<h2 class="sec-title">${smart(d.title)}</h2><dl class="details">${rows}</dl>`;
}
export function readyBlock(r, id) {
  const steps = r.steps ? `<ul class="ready-steps">${r.steps.map((s) => `<li>${smart(s)}</li>`).join('')}</ul>` : '';
  return `<h2 class="sec-title">${smart(r.title)}</h2><div class="ready-lines">${r.lines.map((l) => `<p>${smart(l)}</p>`).join('')}</div>${steps}
<div class="buy-card"><p class="buy-name">${smart(r.product)}</p><p class="buy-price">${priceHtml(r.price)}</p><div class="buy-actions">${btnAction(ui.addToCart, `data-add="${id}"`, 'btn-primary')}${btnAction(ui.buyNow, `data-dialog="checkout" data-label="${ui.buyNow}"`, 'btn-ghost')}</div></div>`;
}
export function shareBlock(s) {
  const close = Array.isArray(s.close) ? s.close.map((l) => `<p>${smart(l)}</p>`).join('') : `<p>${smart(s.close)}</p>`;
  return `<h2 class="sec-title">${smart(s.title)}</h2><div class="share-lines">${s.lines.map((l) => `<p>${smart(l)}</p>`).join('')}</div>
<p class="share-handle">${esc(s.handle)}</p><ul class="share-tags">${s.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul><div class="share-close">${close}</div>`;
}

// ------------------------------------------------------------------ Paint blocks
export function paintStory() {
  const s = paint.story;
  return `<div class="story story-paint">
<p class="story-lead">${smart(s.lines[0])}</p>
<ul class="story-list">${s.list.map((l, i) => `<li data-line="${i}">${smart(l)}</li>`).join('')}</ul>
<p class="story-q">${smart(s.question)}</p>
<p class="story-with">${smart(s.withBefore)}<b>${smart(s.withBold)}</b>${smart(s.withAfter)}</p>
<p class="story-verbs">${smart(s.verbs)}</p>
<p class="story-discover">${smart(s.discover)}</p>
<p class="story-done">${smart(s.done)}</p>
<p class="story-piece">${smart(s.piece)}</p>
<p class="story-quote">${smart(s.quote)}</p>
</div>`;
}
export const paintArt = { ganesha: O.ganesha, markers: O.markers, stickers: O.stickers, gems: O.gems, glue: O.glue, mantap: O.mantap, comic: O.comic };
export function paintInside() {
  const i = paint.inside;
  return `<h2 class="sec-title">${smart(i.title)}</h2><p class="sec-intro">${smart(i.intro)}</p>
<ol class="inside-grid">${i.items.map((it, k) => `<li class="inside-item" data-i="${k}"><div class="inside-art">${svg(paintArt[it.id], { cls: 'art-fill' })}</div><h3>${smart(it.name)}</h3><p>${smart(it.text)}</p></li>`).join('')}</ol>`;
}

// ------------------------------------------------------------------ Workshop blocks
export function workshopIntro() {
  return `<div class="w-intro">${workshops.intro.map((l) => `<p>${smart(l)}</p>`).join('')}</div><ul class="w-verbs">${workshops.verbs.map((v) => `<li>${smart(v)}</li>`).join('')}</ul>`;
}
export function bookbindingCard() {
  const b = workshops.bookbinding;
  return `<article class="ws-card"><p class="ws-tab">Upcoming workshops</p><div class="ws-art perform-host">${svg(O.notebook, { cls: 'art-fill', label: 'Illustration of a handmade notebook being sewn' })}<span class="art-note">${ui.illustrated}</span></div>
<div class="ws-copy"><h2 class="ws-name">${smart(b.name)}</h2><p>${smart(b.lines[0])}</p><p>${smart(b.lines[1])}</p><p class="ws-facts">${esc(b.facts)}</p><p class="ws-price">${esc(b.price)}</p>${btnAction(ui.bookNow, `data-dialog="booking" data-label="${ui.bookNow}"`, 'btn-primary')}</div></article>`;
}
export function expectBlock() {
  const e = workshops.expect;
  return `<h2 class="sec-title">${smart(e.title)}</h2><ol class="expect-list">${e.items.map((it, i) => `<li class="expect-item" data-x="${i}"><h3>${smart(it.name)}</h3>${it.lines.map((l) => `<p>${smart(l)}</p>`).join('')}</li>`).join('')}</ol>`;
}
export function loopBlock() {
  const l = workshops.loop;
  return `<h2 class="sec-title loop-title"><span class="vh">${esc(l.title)}</span><span aria-hidden="true" class="loop-words">${l.steps.map((s, i) => `<span class="loop-step" data-step="${i}">${smart(s)}</span>`).join('<span class="loop-arrow">→</span>')}</span></h2><p class="loop-line">${smart(l.line)}</p>${btn(ui.exploreKits, 'shop.html', 'btn-primary')}`;
}
export function hostBlock() {
  const h = workshops.host;
  return `<h2 class="sec-title">${smart(h.title)}</h2><p class="sec-intro">${smart(h.lead)}</p><ul class="host-list">${h.items.map((t) => `<li>${smart(t)}</li>`).join('')}</ul><p class="host-close">${smart(h.close)}</p>${btn(ui.hostWorkshop, 'contact.html', 'btn-primary')}`;
}

// ------------------------------------------------------------------ Story / community / contact blocks
export function aboutBlock() {
  return `<div class="about-open"><p>${smart(about.open[0])}</p><ul class="about-list">${about.list.map((l) => `<li>${smart(l)}</li>`).join('')}</ul></div>
<p class="about-but">${smart(about.but)}</p>
<ul class="about-senses">${about.senses.map((l) => `<li>${smart(l)}</li>`).join('')}</ul>
<p class="about-surprise">${smart(about.surprise)}</p>
<div class="about-bring">${about.bring.map((l) => `<p>${smart(l)}</p>`).join('')}</div>
<p class="about-with">${smart(about.with)}</p>`;
}
export function foundersBlock() {
  return `<div class="founders">${about.founders.map((l) => `<p>${smart(l)}</p>`).join('')}<p class="belief">${smart(about.belief)}</p></div>`;
}
export function communityBlock() {
  const c = community;
  return `<p class="com-kicker">${smart(c.head)}</p><h2 class="sec-title com-title">${smart(c.sub)}</h2><div class="com-lines">${c.lines.map((l) => `<p>${smart(l)}</p>`).join('')}</div><ul class="com-who">${c.who.map((l) => `<li>${smart(l)}</li>`).join('')}</ul><p class="com-welcome">${smart(c.welcome)}</p>`;
}
export function contactIntro() {
  return `<ul class="c-lines">${contact.lines.map((l) => `<li>${smart(l)}</li>`).join('')}</ul><p class="c-close">${smart(contact.close)}</p>`;
}
export function contactRoutes() {
  return `<ul class="c-routes">${contact.routes.map((r) => {
    const isEmail = r.value && r.value.pending;
    const val = isEmail ? `<button class="route-email" type="button" data-dialog="email" data-label="${esc(r.name)}">${pendingChip(r.value, ui.emailTbc)}</button>` : `<span class="route-handle">${esc(r.value)}</span>`;
    return `<li class="c-route" data-route="${r.id}"><h3>${smart(r.name)}</h3>${val}</li>`;
  }).join('')}</ul>`;
}

// ------------------------------------------------------------------ cart block
export function cartBlock() {
  return `<div class="cart" data-cart-root>
<ul class="cart-lines" data-cart-lines></ul>
<div class="cart-empty" data-cart-empty><p>${ui.cartEmpty}</p>${btn(ui.cartEmptyCta, 'shop.html', 'btn-primary')}</div>
<div class="cart-summary" data-cart-summary hidden><p class="cart-sub"><span>${ui.subtotal}</span><strong data-cart-total>₹0</strong></p><p class="cart-note" data-cart-unpriced hidden>${ui.unpricedNote}</p>${btnAction(ui.buyNow, `data-dialog="checkout" data-label="${ui.buyNow}"`, 'btn-primary')}</div>
</div>`;
}
