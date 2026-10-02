/* THE MELA ROAD: scroll position -> camera position. The truck stays put; four planes slide past at
   different speeds. Signs ride in the stall plane, so copy only moves because the world moves.
   Contract: docs/design/2026-10-03-layered-concepts.md section 4C. */
(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const ease = (t) => t * t * (3 - 2 * t);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* ---------------------------------------------------------- the road scenes */
  $$('.road-scene').forEach((scene) => {
    const mode = scene.dataset.road;
    const stage = $('.road-stage', scene);
    const mid = $('.l-mid', scene), far = $('.l-far', scene), sky = $('.l-sky', scene), near = $('.l-near', scene);
    const road = $('.road', scene), truckArt = $('.truck-art', scene);
    const signs = $$('.sign', mid);
    const tabs = $$('[data-drive]', scene);
    let u = 1, W = 1, cams = [], holds = [];
    let cam = 0, active = '';

    const parked = $$('[data-park]', mid);
    const TRAVEL = 1400;
    function measure() {
      const h = stage.clientHeight || 700; W = stage.clientWidth || 1200; u = h / 800;
      // camera so that each chapter's centre sits at its anchor (fraction of screen width)
      cams = signs.map((s) => parseFloat(s.dataset.x) - (parseFloat(s.dataset.anchor) - 0.5) * (W / u));
      if (mode === 'sub') {
        const cEnd = (cams[0] || 0) + TRAVEL;
        parked.forEach((el) => el.style.setProperty('--x', (cEnd + (parseFloat(el.dataset.park) - 0.5) * (W / u)).toFixed(1)));
      }
      if (mode === 'home') {
        // chapter order: start, shop, workshop, hands, reel. p holds around each.
        const n = cams.length, seg = 1 / (n - 1);
        holds = cams.map((c, i) => ({ c, p: i * seg }));
      }
    }
    function camAt(p) {
      if (mode === 'sub') { const c0 = cams[0] || 0; return c0 + ease(clamp((p - 0.1) / 0.62)) * TRAVEL; }
      const n = holds.length; if (!n) return 0;
      const seg = 1 / (n - 1), i = Math.min(n - 2, Math.floor(p / seg)), t = (p - i * seg) / seg;
      // hold 16% at each end of a segment, move through the middle 68%
      const m = ease(clamp((t - 0.16) / 0.68));
      return holds[i].c + (holds[i + 1].c - holds[i].c) * m;
    }
    function apply(p) {
      cam = camAt(p);
      const px = (k) => `translate3d(${(W / 2 - cam * k * u).toFixed(1)}px,0,0)`;
      mid.style.transform = px(1); far.style.transform = px(0.28); sky.style.transform = px(0.08); near.style.transform = px(1.38);
      road.style.backgroundPositionX = `${(W / 2 - cam * u).toFixed(1)}px`;
      truckArt.style.setProperty('--wheel', (cam * 0.55).toFixed(1));
      // which chapter is under the camera? (home only)
      if (mode === 'home') {
        let best = 0, bd = Infinity;
        cams.forEach((c, i) => { const d = Math.abs(c - cam); if (d < bd) { bd = d; best = i; } });
        signs.forEach((s, i) => s.classList.toggle('is-here', i === best && bd < 260 / 1));
        const id = signs[best]?.dataset.chapter;
        if (id !== active) { active = id; tabs.forEach((t) => t.setAttribute('aria-pressed', String(t.dataset.drive === id))); }
      }
    }
    measure(); apply(0);
    scene.addEventListener('tdo:progress', (e) => apply(e.detail.p));
    addEventListener('resize', () => { measure(); apply(parseFloat(getComputedStyle(scene).getPropertyValue('--p')) || 0); }, { passive: true });

    // tabs are destinations: glide to the stall (scroll position), keyboard-reachable buttons
    tabs.forEach((t) => t.addEventListener('click', () => {
      const i = signs.findIndex((s) => s.dataset.chapter === t.dataset.drive);
      if (i < 0 || !holds[i]) return;
      window.TDO.scrollSceneTo(scene, holds[i].p, window.TDO.motionOn() ? 'smooth' : 'auto');
    }));
  });

  /* ---------------------------------------------------------- Ferris wheel selector */
  $$('[data-wheel]').forEach((set) => {
    const svg = $('.fw-svg', set);
    let turn = 180; svg.style.setProperty('--turn', '180');
    set.addEventListener('tdo:env', (e) => {
      const n = e.detail.n, target = 180 - (n - 1) * (360 / 7);
      const delta = ((target - turn + 540) % 360) - 180;
      turn += delta; svg.style.setProperty('--turn', turn.toFixed(2));
      $$('.gondola', svg).forEach((g, i) => g.classList.toggle('is-sel', i + 1 === n));
    });
  });
})();
