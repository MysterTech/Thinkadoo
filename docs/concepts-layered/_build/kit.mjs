// Rendering helpers shared by all concept templates.
import * as O from './art-objects.mjs';
import * as Sc from './art-scenery.mjs';
import * as content from './content.mjs';

export { O, Sc, content };
export const C = O.C;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Typographic quotes for display. Verification folds these back to straight quotes.
export const smart = (s) => esc(s)
  .replace(/(\w)'(\w)/g, '$1’$2')
  .replace(/(\w)'(\s|$|\.|,)/g, '$1’$2')
  .replace(/(^|\s|\()'(\w)/g, '$1‘$2')
  .replace(/&quot;(.*?)&quot;/g, '“$1”');

// svg(art, {cls, label, style, extra}) -> inline <svg>. art = {vb, body}
export function svg(art, { cls = '', label = '', style = '', attrs = '', preserve = '' } = {}) {
  const a = typeof art === 'function' ? art() : art;
  const aria = label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="${cls}" viewBox="${a.vb}" ${aria} ${style ? `style="${style}"` : ''} ${preserve ? `preserveAspectRatio="${preserve}"` : ''} ${attrs} xmlns="http://www.w3.org/2000/svg">${a.body}</svg>`;
}

// Hidden defs used by <use> inside some illustrations.
export const defs = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<symbol id="sparkle" viewBox="0 0 60 60">${O.sparkle().body}</symbol>
<symbol id="flower-red" viewBox="0 0 100 100">${O.flower(O.C.red).body}</symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-cart" viewBox="0 0 24 24"><path d="M3 4h3l2.2 11h10l2-8H7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="19.5" r="1.6" fill="currentColor"/><circle cx="17" cy="19.5" r="1.6" fill="currentColor"/></symbol>
<symbol id="i-prev" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-next" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7Z" fill="currentColor"/></symbol>
<symbol id="i-pause" viewBox="0 0 24 24"><path d="M7 5h4v14H7zm6 0h4v14h-4z" fill="currentColor"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="m4 12.5 5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></symbol>
</defs></svg>`;
export const icon = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;

// A line list ["a","b"] -> <span class="ln">a</span> separated by <br> or spans
export const lines = (arr, tag = 'span', cls = 'ln') => arr.map((l) => `<${tag} class="${cls}">${smart(l)}</${tag}>`).join('');

export const pendingChip = (p, label) => `<span class="pending" data-pending="${p.pending}">${esc(label)}</span>`;
export const valueHtml = (v) => {
  if (v && typeof v === 'object' && v.pending) return pendingChip(v, v.pending === 'price' ? content.ui.priceTbc : content.ui.emailTbc);
  return smart(v);
};

// Which header item is current for a page id.
export const navCurrent = (page) => ({ shop: 'shop', mela: 'shop', paint: 'shop', workshops: 'workshops', story: 'story', contact: 'contact' }[page] || '');

export const PAGES = [
  { id: 'home', file: 'index.html' },
  { id: 'shop', file: 'shop.html' },
  { id: 'mela', file: 'mela-truck.html' },
  { id: 'paint', file: 'paint-my-god.html' },
  { id: 'workshops', file: 'workshops.html' },
  { id: 'story', file: 'our-story.html' },
  { id: 'contact', file: 'contact.html' },
  { id: 'cart', file: 'cart.html' },
];

export const dialogs = () => `
<dialog class="td-dialog" id="td-dialog" aria-labelledby="td-dialog-title"><form method="dialog"><h2 id="td-dialog-title"></h2><p id="td-dialog-body"></p><button class="btn" value="close" autofocus>${content.ui.close}</button></form></dialog>
<div class="td-toast" id="td-toast" role="status" aria-live="polite"></div>`;
