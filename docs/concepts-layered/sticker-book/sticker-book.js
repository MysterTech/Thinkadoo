/* THE STICKER BOOK: deck you can hold, sheets that step back, a Passport that fills.
   Contract: docs/design/2026-10-03-layered-concepts.md section 4D. */
(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const TEXT = (() => { try { return JSON.parse($('#tdo-text').textContent); } catch (e) { return {}; } })();

  /* ---------------------------------------------------------- deck: drag, flick, arrows, tabs */
  $$('[data-deck]').forEach((deck) => {
    const cards = $$('.card', deck), live = $('[data-deck-live]', deck);
    const scope = deck.closest('[data-tabs-scope]');
    let order = [...cards], busy = false, syncing = false;
    function layout(instant) {
      if (instant) deck.classList.add('no-tr');
      order.forEach((c, i) => { c.style.setProperty('--pos', i); c.dataset.top = String(i === 0); c.setAttribute('aria-hidden', String(i !== 0)); const a = $('a', c); a.tabIndex = i === 0 ? 0 : -1; c.style.removeProperty('--dx'); c.style.removeProperty('--dy'); });
      if (instant) { void deck.offsetWidth; deck.classList.remove('no-tr'); }
      if (live) live.textContent = order[0].getAttribute('aria-label');
    }
    function syncTabs() {
      if (!scope?.tdoSelect) return;
      const t = order[0].dataset.tab;
      if (scope.dataset.active !== t) { syncing = true; scope.tdoSelect(t); syncing = false; }
    }
    function flick(dir) {
      if (busy) return; busy = true;
      const top = order[0];
      top.classList.add('is-flying');
      top.style.setProperty('--dx', String(dir * Math.max(520, innerWidth * 0.5)));
      top.style.setProperty('--dy', '-60');
      setTimeout(() => {
        order.push(order.shift());
        top.classList.remove('is-flying');
        deck.classList.add('no-tr'); layout(); void deck.offsetWidth; deck.classList.remove('no-tr');
        syncTabs(); busy = false;
      }, window.TDO.motionOn() ? 320 : 0);
    }
    function back() { // bring the last card back on top
      if (busy) return; order.unshift(order.pop()); layout(); syncTabs();
    }
    $('[data-deck-next]', deck)?.addEventListener('click', () => flick(1));
    $('[data-deck-prev]', deck)?.addEventListener('click', back);
    // tabs choose the card on top
    scope?.addEventListener('tdo:tab', (e) => {
      if (syncing) return;
      const want = e.detail.id === 'workshop' ? 'bookbinding' : 'mela';
      const i = order.findIndex((c) => c.dataset.card === want);
      if (i > 0) { order = [...order.slice(i), ...order.slice(0, i)]; layout(); }
    });
    // drag the top card
    let drag = null, moved = false;
    deck.addEventListener('pointerdown', (e) => {
      const card = e.target.closest('.card'); if (!card || card.dataset.top !== 'true' || busy) return;
      if (e.pointerType === 'mouse' && e.button) return;
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, card, t: performance.now() }; moved = false;
    });
    deck.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!moved && Math.hypot(dx, dy) < 7) return;
      if (!moved) { moved = true; drag.card.classList.add('is-dragging'); try { drag.card.setPointerCapture(e.pointerId); } catch (x) { /* none */ } }
      drag.card.style.setProperty('--dx', dx.toFixed(1)); drag.card.style.setProperty('--dy', (dy * 0.6).toFixed(1));
      drag.last = { dx, dt: performance.now() - drag.t };
    });
    function end(e) {
      if (!drag || e.pointerId !== drag.id) return;
      const c = drag.card; c.classList.remove('is-dragging');
      const dx = parseFloat(c.style.getPropertyValue('--dx')) || 0;
      const v = drag.last ? drag.last.dx / Math.max(1, drag.last.dt) : 0;
      drag = null;
      if (moved && (Math.abs(dx) > 110 || Math.abs(v) > 0.6)) flick(dx >= 0 ? 1 : -1);
      else { c.style.removeProperty('--dx'); c.style.removeProperty('--dy'); }
    }
    deck.addEventListener('pointerup', end); deck.addEventListener('pointercancel', end);
    deck.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    layout(true);
  });

  /* ---------------------------------------------------------- stacked sheets: the previous sheet steps back */
  const stacks = $$('.sheet-stack');
  const headerH = () => $('.site-header')?.offsetHeight || 76;
  function fitStick() {
    stacks.forEach((el) => el.classList.toggle('no-stick', el.offsetHeight > innerHeight - headerH() + 4 || innerWidth < 760));
  }
  function cover() {
    const on = window.TDO.motionOn(), h = headerH();
    stacks.forEach((el) => {
      const next = el.nextElementSibling;
      if (!on || !next || el.classList.contains('no-stick')) { el.style.setProperty('--cover', '0'); return; }
      const top = next.getBoundingClientRect().top;
      el.style.setProperty('--cover', clamp(1 - (top - h) / (innerHeight * 0.85)).toFixed(3));
    });
  }
  let raf = 0; const queue = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; cover(); }); };
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', () => { fitStick(); queue(); }, { passive: true });
  window.TDO.onMotion(queue); fitStick(); cover();

  /* ---------------------------------------------------------- Mela Passport */
  const known = new Set(window.TDO.store.get('tdo-opened', []));
  const countText = (n) => (TEXT.passportCountTpl || '{n} of 7 stickers').replace('{n}', n);
  function paint(justEarned) {
    const o = window.TDO.store.get('tdo-opened', []);
    $$('.slot').forEach((s) => {
      const n = +s.dataset.slot, on = o.includes(n), was = s.classList.contains('is-earned');
      s.classList.toggle('is-earned', on);
      $('.slot-state', s).textContent = on ? TEXT.earned : TEXT.notEarned;
      if (on && !was && n === justEarned) { s.classList.remove('slap'); void s.offsetWidth; s.classList.add('slap'); }
    });
    $$('[data-passport-n]').forEach((e) => { e.textContent = String(o.length); });
    $$('.passport-count').forEach((e) => { e.textContent = countText(o.length); });
    $$('[data-passport-open]').forEach((b) => b.setAttribute('aria-label', TEXT.passport + ', ' + countText(o.length)));
  }
  document.addEventListener('tdo:env', (e) => {
    const o = e.detail.opened || []; const fresh = o.find((n) => !known.has(n)); o.forEach((n) => known.add(n));
    paint(fresh);
  });
  const dlg = $('#passport-dialog');
  document.addEventListener('click', (e) => { if (e.target.closest('[data-passport-open]')) { paint(); dlg?.showModal ? dlg.showModal() : dlg?.setAttribute('open', ''); } });
  dlg?.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  paint();
})();
