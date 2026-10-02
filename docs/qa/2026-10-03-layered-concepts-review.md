# QA record: four layered concepts (3 Oct 2026)

Surface: `docs/concepts-layered/`, served with `python3 -m http.server 4173` from the repo root. Browser: Playwright (Chromium), 1440 × 900, 390 × 844, 360 × 800. Prototype scope: no payments, bookings or messages leave the browser.

## Commands that gate the build

```bash
node docs/concepts-layered/_build/build.mjs     # writes 32 pages + nothing else
node docs/concepts-layered/_build/verify.mjs    # copy + structure + cross-concept parity
node --check docs/concepts-layered/shared/engine.js
node ~/.claude/skills/impeccable/scripts/detect.mjs --json docs/concepts-layered/<concept>/*.css
```

Result at the end of this pass: `verify.mjs` → all checks passed (304 deck lines, 4 concepts × 8 pages, parity across concepts). `node --check` clean on the three scripts.

## Verified in the browser

| Check | Result |
|---|---|
| Console / page errors across all 32 pages at 1440 and 360 | none |
| Horizontal overflow, 32 pages × 360 and 1440 | none after fixes (header at 360; tape band in Sticker Book) |
| Page transitions (`is-leaving` → `is-entering` → settled), nav click and Back, all four concepts | pass |
| Motion off (toggle, persisted): running CSS animations on all four home pages | 0; pinned scenes collapse to a complete still composition |
| Home hero at rest and scrolled, both tab states | Theatre (push-in, set change), Playroom (painting, pan), Road (five chapters, tab drive-to, `aria-pressed` follows the camera), Sticker Book (stack, deck) |
| Hover previews the click | Theatre props, Playroom toys, Road product stalls, Sticker cards (corner peel) |
| Direct manipulation | Sticker Book deck drag/flick moved Mela to the back and promoted Paint My God; arrows and tabs match |
| Mela envelopes | Theatre spotlight, Playroom cubbies, Road Ferris wheel, Sticker Passport: all select, animate and fill the right content |
| Passport persistence | opening envelopes 2, 4, 6 filled three slots; header count 3; the dialog lists them |
| Cart | add Paint My God and Mela Truck, quantities, remove, subtotal excludes the unpriced Mela Truck and says so |
| Accessibility scripted pass | no unnamed controls, no `tabindex` > 0, no unlabeled `role=img` SVG, no duplicate IDs (one found and fixed: `wclip`), touch targets ≥ 44 px after fixes |
| Copy | every edited deck line present; no pre-edit wording in any page (attributes included); same deck lines per page in all four concepts |

## Bugs found and fixed during the pass

1. SVG name tags lost their position when hover CSS replaced the `transform` attribute (Theatre, Playroom): the tag is now an inner group.
2. Pointer-event wrapper (`.plane-wrap`, `.room-box`) swallowed hover on props: wrappers are `pointer-events:none`, props opt in.
3. Road sub-pages collapsed to a narrow column because a modifier class collided with the sub-headline class (`road-sub`).
4. Road camera mapped the wrong origin (world x at the left edge, not the screen centre): chapters did not align with the truck.
5. Road shop stalls scrolled past before the hero ended: end-of-hero parking positions are now computed from the viewport.
6. Playroom sub-pages were blank on phones: a global `svg{max-width:100%}` clamped the oversized plane.
7. Duplicate SVG clip ID on pages with two windows; unlabeled 36 px footer buttons; 23 px "All concepts" link.
8. Sticker Book: stacked card names showed through the card above; the tape band overflowed the page at 1440.

## Detector (impeccable) triage

21 warnings across the four stylesheets, all reviewed: 3 "side-tab" borders on page-transition curtains and 1 `layout-transition` were fixed; the rest are "bounce easing" on sticker/press feedback (the brief asks for squish and bounce on buttons and stickers, and the charter limits overshoot to things that are being *placed*) and "border accent on rounded" for 4 px outline-style borders that are part of the flat outlined illustration language of the reference concepts. Accepted deliberately.

## Not verified / not claimed

- `file://` loading was not run in an automated browser (Playwright blocks it); every reference is relative, so double-click opening should work, but treat it as unchecked.
- No real-device performance measurement; the pinned scenes use one `requestAnimationFrame` per frame and only while visible, but frame rates were not measured.
- No formal WCAG conformance review and no user research. Contrast on text over illustrated planes was checked by eye only; white-on-red text is limited to large sizes.
- Safari and Firefox were not exercised. The Playroom's painting relies on `@property` and `clip-path: inset()` on SVG groups, Road on container units, Sticker Book on SVG filters.
