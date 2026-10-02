/* Thinkadoo layered concepts: shared runtime. No dependencies.
   Contract: docs/design/2026-10-03-layered-concepts.md (Motion Charter §3).
   - html[data-motion="on|off"]: Motion toggle + prefers-reduced-motion. Off = nothing animates.
   - [data-scene]: scroll story. Sets --p (0..1), --s1..--sN (eased stages with plateaus), --step.
   - [data-pointer]: fine-pointer depth. Sets --mx/--my (-1..1).
   - [data-tabs], [data-reel], [data-env-set], [data-dialog], [data-add], [data-cart-root], [data-menu-toggle].
*/
(() => {
  'use strict';
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const smooth = (t) => t * t * (3 - 2 * t);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };
  const TEXT = (() => { try { return JSON.parse($('#tdo-text').textContent); } catch (e) { return {}; } })();
  root.classList.add('js');

  /* ------------------------------------------------------------ motion state */
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  let userOff = store.get('tdo-motion', 'on') === 'off';
  const listeners = [];
  const motionOn = () => !userOff && !mq.matches;
  function applyMotion() {
    const on = motionOn();
    root.dataset.motion = on ? 'on' : 'off';
    $$('[data-motion-toggle]').forEach((b) => {
      b.setAttribute('aria-pressed', String(on));
      const t = $('.mt-label', b); if (t) t.textContent = on ? TEXT.motionOn : TEXT.motionOff;
    });
    listeners.forEach((f) => f(on));
    queue(true);
  }
  mq.addEventListener?.('change', applyMotion);
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-motion-toggle]'); if (!b) return;
    userOff = motionOn(); store.set('tdo-motion', userOff ? 'off' : 'on'); applyMotion();
  });

  /* ------------------------------------------------------------ scroll scenes */
  const scenes = $$('[data-scene]').map((el) => ({
    el, rest: parseFloat(el.dataset.rest ?? '1'), stages: parseInt(el.dataset.stages || '0', 10), vis: true, last: -1,
  }));
  const sceneIO = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((en) => {
    const s = scenes.find((x) => x.el === en.target); if (s) { s.vis = en.isIntersecting; if (s.vis) queue(); }
  }), { rootMargin: '30% 0px 30% 0px' }) : null;
  scenes.forEach((s) => { s.vis = !sceneIO; sceneIO?.observe(s.el); });
  function setP(s, p) {
    const el = s.el;
    el.style.setProperty('--p', p.toFixed(4));
    if (s.stages) {
      const n = s.stages;
      for (let i = 1; i <= n; i++) {
        const raw = clamp(p * n - (i - 1));
        el.style.setProperty('--s' + i, smooth(clamp((raw - 0.12) / 0.76)).toFixed(4));
      }
      const step = Math.min(n - 1, Math.floor(p * n + 1e-6));
      if (el.dataset.step !== String(step)) { el.dataset.step = String(step); el.dispatchEvent(new CustomEvent('tdo:step', { detail: { step, p }, bubbles: true })); }
    }
    el.dispatchEvent(new CustomEvent('tdo:progress', { detail: { p } }));
  }
  function updateScenes(force) {
    const on = motionOn();
    for (const s of scenes) {
      if (!on) { if (s.last !== 'rest' || force) { setP(s, s.rest); s.last = 'rest'; } continue; }
      if (!s.vis && !force) continue;
      const r = s.el.getBoundingClientRect();
      const total = Math.max(1, r.height - innerHeight);
      const p = clamp(-r.top / total);
      if (Math.abs(p - s.last) > 0.0004 || force) { setP(s, p); s.last = p; }
    }
  }

  /* ------------------------------------------------------------ pointer depth */
  const fine = matchMedia('(pointer: fine)');
  const pointers = $$('[data-pointer]').map((el) => ({ el, tx: 0, ty: 0, x: 0, y: 0, vis: false }));
  pointers.forEach((p) => {
    new IntersectionObserver((es) => { p.vis = es[0].isIntersecting; }, { rootMargin: '10%' }).observe(p.el);
    p.el.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse' || !motionOn() || !fine.matches) return;
      const r = p.el.getBoundingClientRect();
      p.tx = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
      p.ty = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
      queue();
    });
    p.el.addEventListener('pointerleave', () => { p.tx = 0; p.ty = 0; queue(); });
  });
  function updatePointers() {
    let busy = false;
    for (const p of pointers) {
      if (!motionOn()) { if (p.x || p.y) { p.x = p.y = p.tx = p.ty = 0; p.el.style.setProperty('--mx', 0); p.el.style.setProperty('--my', 0); } continue; }
      p.x += (p.tx - p.x) * 0.12; p.y += (p.ty - p.y) * 0.12;
      if (Math.abs(p.tx - p.x) < 0.002) p.x = p.tx;
      if (Math.abs(p.ty - p.y) < 0.002) p.y = p.ty;
      p.el.style.setProperty('--mx', p.x.toFixed(3)); p.el.style.setProperty('--my', p.y.toFixed(3));
      if (p.x !== p.tx || p.y !== p.ty) busy = true;
    }
    return busy;
  }

  /* ------------------------------------------------------------ frame loop (one rAF) */
  let frame = 0, forceNext = false;
  function tick() {
    frame = 0;
    updateScenes(forceNext); forceNext = false;
    if (updatePointers()) queue();
  }
  function queue(force) { if (force) forceNext = true; if (!frame) frame = requestAnimationFrame(tick); }
  addEventListener('scroll', () => queue(), { passive: true });
  addEventListener('resize', () => { measureHeader(); queue(true); }, { passive: true });

  /* ------------------------------------------------------------ reveal once */
  const reveals = $$('[data-reveal]');
  if (!('IntersectionObserver' in window)) reveals.forEach((e) => e.classList.add('is-in'));
  else {
    const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { threshold: 0.25, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((e) => io.observe(e));
  }
  listeners.push((on) => { if (!on) reveals.forEach((e) => e.classList.add('is-in')); });

  /* ------------------------------------------------------------ offscreen pause for loops */
  const loops = $$('[data-loop]');
  if ('IntersectionObserver' in window) {
    const lio = new IntersectionObserver((es) => es.forEach((en) => en.target.classList.toggle('is-offscreen', !en.isIntersecting)), { rootMargin: '5%' });
    loops.forEach((e) => lio.observe(e));
  }

  /* ------------------------------------------------------------ header height + mobile menu */
  function measureHeader() { const h = $('.site-header'); if (h) root.style.setProperty('--header-h', h.offsetHeight + 'px'); }
  measureHeader();
  const menuBtn = $('[data-menu-toggle]');
  function setMenu(open) { root.classList.toggle('menu-open', open); menuBtn?.setAttribute('aria-expanded', String(open)); }
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); menuBtn?.focus(); } });

  /* ------------------------------------------------------------ generic tabs */
  $$('[data-tabs]').forEach((box) => {
    const tabs = $$('[role="tab"]', box), panels = $$('[data-panel]', box.closest('[data-tabs-scope]') || box);
    const scope = box.closest('[data-tabs-scope]') || box;
    function select(id, focus) {
      scope.dataset.active = id;
      tabs.forEach((t) => { const on = t.dataset.tab === id; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); });
      panels.forEach((p) => { p.hidden = p.dataset.panel !== id; });
      scope.dispatchEvent(new CustomEvent('tdo:tab', { detail: { id }, bubbles: true }));
    }
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t.dataset.tab));
      t.addEventListener('keydown', (e) => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select(tabs[(i + k + tabs.length) % tabs.length].dataset.tab, true); }
        if (e.key === 'Home') { e.preventDefault(); select(tabs[0].dataset.tab, true); }
        if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1].dataset.tab, true); }
      });
    });
    scope.tdoSelect = select;
    select(scope.dataset.active || tabs[0].dataset.tab);
  });

  /* ------------------------------------------------------------ reel (illustrated clips) */
  $$('[data-reel]').forEach((reel) => {
    const slides = $$('[data-slide]', reel), dots = $$('[data-dot]', reel);
    const prev = $('[data-reel-prev]', reel), next = $('[data-reel-next]', reel), pause = $('[data-reel-pause]', reel);
    const live = $('[data-reel-live]', reel);
    let i = 0, paused = false, hover = false, inView = false, timer = 0;
    reel.setAttribute('data-loop', '');
    function show(n, announce) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { const on = k === i; s.classList.toggle('is-current', on); s.setAttribute('aria-hidden', String(!on)); s.inert = !on; });
      dots.forEach((d, k) => { d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      reel.dataset.index = String(i);
      if (announce && live) live.textContent = slides[i].dataset.name;
      reel.dispatchEvent(new CustomEvent('tdo:reel', { detail: { index: i } }));
    }
    function schedule() { clearTimeout(timer); if (!paused && !hover && inView && motionOn()) timer = setTimeout(() => { show(i + 1, false); schedule(); }, 6500); }
    prev?.addEventListener('click', () => { show(i - 1, true); schedule(); });
    next?.addEventListener('click', () => { show(i + 1, true); schedule(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { show(k, true); schedule(); }));
    pause?.addEventListener('click', () => { paused = !paused; pause.setAttribute('aria-pressed', String(paused)); pause.dataset.state = paused ? 'paused' : 'playing'; const l = $('.sr', pause); if (l) l.textContent = paused ? TEXT.play : TEXT.pause; schedule(); });
    reel.addEventListener('pointerenter', () => { hover = true; clearTimeout(timer); });
    reel.addEventListener('pointerleave', () => { hover = false; schedule(); });
    reel.addEventListener('focusin', () => { hover = true; clearTimeout(timer); });
    reel.addEventListener('focusout', () => { hover = false; schedule(); });
    new IntersectionObserver((es) => { inView = es[0].isIntersecting; schedule(); }, { threshold: 0.4 }).observe(reel);
    listeners.push(schedule);
    show(0, false);
  });

  /* ------------------------------------------------------------ envelope set (Mela activities) */
  $$('[data-env-set]').forEach((set) => {
    const btns = $$('[data-env]', set), panels = $$('[data-env-panel]', set);
    const opened = new Set(store.get('tdo-opened', []));
    function select(n, focus, user) {
      set.dataset.current = String(n);
      btns.forEach((b) => { const on = +b.dataset.env === n; b.setAttribute('aria-selected', String(on)); b.tabIndex = on ? 0 : -1; if (on && focus) b.focus(); });
      panels.forEach((p) => { const on = +p.dataset.envPanel === n; p.hidden = !on; $$('.perform-host', p).forEach((h) => h.classList.toggle('perform', on)); });
      if (user && !opened.has(n)) { opened.add(n); store.set('tdo-opened', [...opened]); }
      set.dispatchEvent(new CustomEvent('tdo:env', { detail: { n, first: !!user, opened: [...opened] }, bubbles: true }));
    }
    btns.forEach((b, i) => {
      b.addEventListener('click', () => select(+b.dataset.env, false, true));
      b.addEventListener('keydown', (e) => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select(+btns[(i + k + btns.length) % btns.length].dataset.env, true, true); }
      });
    });
    $$('[data-env-prev],[data-env-next]', set).forEach((b) => b.addEventListener('click', () => {
      const cur = +set.dataset.current, d = b.hasAttribute('data-env-next') ? 1 : -1;
      select(((cur - 1 + d + btns.length) % btns.length) + 1, false, true);
    }));
    set.tdoSelect = select;
    select(1, false, false);
  });

  /* ------------------------------------------------------------ dialogs + toast */
  const dlg = $('#td-dialog'), toast = $('#td-toast');
  function openDialog(title, body) {
    if (!dlg) return;
    $('#td-dialog-title', dlg).textContent = title; $('#td-dialog-body', dlg).textContent = body;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  dlg?.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  let toastT = 0;
  function say(msg) { if (!toast) return; toast.textContent = msg; toast.classList.add('is-on'); clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('is-on'), 3600); }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-dialog]'); if (!b) return;
    const k = b.dataset.dialog, label = b.dataset.label || b.textContent.trim();
    if (k === 'booking') openDialog(label, TEXT.bookingUnavailable);          // consequential: needs a clear stop
    else if (k === 'checkout') openDialog(label, TEXT.checkoutUnavailable);
    else if (k === 'email') say(label + ': ' + TEXT.emailUnavailable);        // informational: a toast is enough
    else say(label + ': ' + TEXT.policyUnavailable);
  });

  /* ------------------------------------------------------------ cart (local only) */
  const PRODUCTS = TEXT.products || {};
  const cart = store.get('tdo-cart', {});
  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  function paintCount() {
    $$('[data-cart-count]').forEach((e) => { e.textContent = String(count()); e.dataset.n = String(count()); });
    $$('[data-cart-link]').forEach((a) => a.setAttribute('aria-label', (TEXT.cartLabel || 'Cart') + ', ' + count()));
  }
  function save() { store.set('tdo-cart', cart); paintCount(); renderCart(); }
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-add]'); if (!b) return;
    const id = b.dataset.add; cart[id] = Math.min(9, (cart[id] || 0) + 1); save(); say(TEXT.addedToCart);
    b.dispatchEvent(new CustomEvent('tdo:added', { detail: { id }, bubbles: true }));
  });
  function inr(n) { return '₹' + n.toLocaleString('en-IN'); }
  function renderCart() {
    const rootEl = $('[data-cart-root]'); if (!rootEl) return;
    const ids = Object.keys(cart).filter((k) => cart[k] > 0 && PRODUCTS[k]);
    const list = $('[data-cart-lines]', rootEl), empty = $('[data-cart-empty]', rootEl), sum = $('[data-cart-summary]', rootEl);
    empty.hidden = ids.length > 0; sum.hidden = ids.length === 0; list.innerHTML = '';
    let total = 0, unpriced = false;
    ids.forEach((id) => {
      const p = PRODUCTS[id], q = cart[id];
      const li = document.createElement('li'); li.className = 'cart-line'; li.dataset.id = id;
      const art = $(`template[data-cart-art="${id}"]`);
      li.innerHTML = `<div class="cart-art" aria-hidden="true"></div><div class="cart-info"><h2 class="cart-name">${p.title}</h2><p class="cart-price">${p.price == null ? `<span class="pending">${TEXT.priceTbc}</span>` : inr(p.price)}</p></div>
        <div class="cart-qty" role="group" aria-label="${TEXT.quantity}: ${p.name}"><button type="button" class="qty-btn" data-qty="-1" aria-label="${TEXT.quantity} −">−</button><output>${q}</output><button type="button" class="qty-btn" data-qty="1" aria-label="${TEXT.quantity} +">+</button></div>
        <button type="button" class="cart-remove" data-remove>${TEXT.remove}</button>`;
      if (art) $('.cart-art', li).appendChild(art.content.cloneNode(true));
      list.appendChild(li);
      if (p.price == null) unpriced = true; else total += p.price * q;
    });
    const t = $('[data-cart-total]', rootEl); if (t) t.textContent = inr(total);
    const n = $('[data-cart-unpriced]', rootEl); if (n) n.hidden = !unpriced;
  }
  document.addEventListener('click', (e) => {
    const line = e.target.closest('.cart-line'); if (!line) return;
    const id = line.dataset.id;
    if (e.target.closest('[data-remove]')) { delete cart[id]; save(); }
    const q = e.target.closest('[data-qty]'); if (q) { cart[id] = clamp((cart[id] || 1) + parseInt(q.dataset.qty, 10), 0, 9); if (!cart[id]) delete cart[id]; save(); }
  });
  paintCount(); renderCart();

  /* ------------------------------------------------------------ page transitions (concept sets body[data-transition]) */
  const T = document.body.dataset.transition ? parseInt(document.body.dataset.transition, 10) : 0;
  if (T) {
    try { if (sessionStorage.getItem('tdo-nav') === '1') { root.classList.add('is-entering'); sessionStorage.removeItem('tdo-nav'); setTimeout(() => root.classList.remove('is-entering'), T + 700); } } catch (e) { /* none */ }
    addEventListener('pageshow', (e) => { if (e.persisted) root.classList.remove('is-leaving'); });
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== '_self') return;
      if (a.hasAttribute('download')) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin && u.protocol !== 'file:') return;
      if (u.pathname === location.pathname && u.search === location.search) return;
      if (!motionOn()) return;
      e.preventDefault();
      setMenu(false);
      root.classList.add('is-leaving');
      try { sessionStorage.setItem('tdo-nav', '1'); } catch (x) { /* none */ }
      setTimeout(() => { location.href = a.href; }, T);
    });
  }

  /* ------------------------------------------------------------ public */
  window.TDO = {
    motionOn, onMotion: (f) => listeners.push(f), store, clamp, smooth, queue, say, openDialog,
    scrollSceneTo(el, p, behavior) {
      const r = el.getBoundingClientRect(); const total = r.height - innerHeight;
      const y = scrollY + r.top + total * p;
      scrollTo({ top: y, behavior: behavior || (motionOn() ? 'smooth' : 'auto') });
    },
  };
  applyMotion();
})();
