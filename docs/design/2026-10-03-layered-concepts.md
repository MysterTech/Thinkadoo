# Thinkadoo: four layered, purposeful-motion concepts

Contract date: 3 October 2026. Review code lives in `docs/concepts-layered/`. Earlier sets (`docs/concepts`, `concepts-round2`, `concepts-motion`) are preserved untouched. `frontend/` stays reserved for whichever direction is chosen. These are documentation prototypes, not an implementation: no payments, bookings, enquiries or personal data leave the browser, and no build tooling is needed to review them (the generator in `_build/` only writes static HTML).

Mode: Persuade, with Experience moments. `ui-ux-designer` governs utility, states and critique; `impeccable` governs craft. The two-agent SWE workflow is **not** used (user instruction, 3 Oct: this is documentation, not an implementation task).

## 1. What the user told us (and what changed because of it)

| Feedback | Consequence |
|---|---|
| The motion concepts were "good but not great". Scroll and hover motion "are there to no effect"; it is "distracting if not designed properly". | The **Motion Charter** (§3). Every animation has a job and a row in a table. Anything else is deleted. |
| `docs/concepts/04-paper-theatre.html` and `02-playroom.html` were given for **layering**: "3 or 4 layers of objects making a delightful experience". | Every hero is a composed scene of four named planes (§4). Depth comes from occlusion and cropping first; motion only reveals it. |
| Content must be "exactly as mentioned" in the Website Content doc; later (3 Oct): "polish the language … keep all four using the same content", clarified as *refining wording while preserving the exact meaning*. | Copy lives in one module (`_build/content.mjs`). The only differences from the source deck are the logged edits in `copy-edits.mjs` / `2026-10-03-copy-polish.md`. A checker (`_build/verify.mjs`) fails the build if an edited deck line is missing, if pre-edit wording survives anywhere, if two concepts carry different deck lines on the same page, or if a long visible sentence is not in the deck (§6). No invented headlines, taglines, captions or stickers. |
| "Each link in the navbar is a separate page." | Eight real HTML pages per concept; no header link is a same-page hash (§5). |
| Do the reference sites' *behaviour*, not only their look. | `docs/research/2026-10-03-reference-behaviour-to-purpose.md` maps each behaviour to its job; each concept transfers jobs, not surface effects. |
| Use the Playroom and Paper Theatre as the taste anchor. | Flat saturated fills, 4–6 px deep-blue outlines, hard offset shadows, paper-white cards, zig-zag/scalloped paper edges, one staged scene per viewport, chunky rounded type. |

## 2. Sources

- Primary design notes: Google Doc `1Z4dyktCG_hYdKzRoZ1Gg_AuqCDDCeY2_XpU0DxUDFrg` (menu, visual direction, palette, five references).
- Content deck: Google Doc `1UBCT5TBNHEqAWIK76QhEV_lmkf_-AbhARYzYl1AaAE4`, re-read in full on 3 Oct 2026 and found identical to `docs/research/2026-10-02-website-content.md`, which is the machine-checked copy deck.
- Brand: `docs/concepts/assets/thinkadoo-red.png` and `thinkadoo-yellow.png` (1950 × 606, unmodified, copied into `docs/concepts-layered/assets/`). Palette: red `#ef3a24`, yellow `#fcda00`, teal `#32c3e0`, green `#5cba47`, blue `#2960ad`, deep blue `#201b4a`, ink `#221f1f`; paper white `#fffdf8` permitted. No gradients.
- Illustration: all newly authored SVG in `_build/art.mjs` in the same flat/outlined grammar as the two liked concepts. Not photographs; every page that shows product or workshop art carries an "Illustrated preview" label because no real photography or video exists.

## 3. The Motion Charter (applies to all four)

**Five jobs only.** A motion is allowed if, and only if, it does one of these:

1. **Reveal**: puts content on screen at the moment it is needed (a tab's set, an envelope's contents, a mela line arriving with its object).
2. **Explain**: shows how an object works (a wheel turns, a puppet's jaw opens, a notebook is stitched).
3. **Depth**: keeps the spatial hierarchy legible (planes shift by unequal amounts during a scroll *story*, or the pointer).
4. **Feedback**: answers a hand (press, hover that previews the click, focus, drop).
5. **Transition**: carries the visitor between places or states (page change, tab change, section boundary).

**The freeze test.** Freeze the page at the start and at the end of an animation. If the end contains no new information, action or orientation, delete it. Ambient loops fail this test and are removed, with two exceptions: the *reel* clips (they are the stand-in for the video the doc asks for) and one tone-on-tone phrase band per page that stops when off-screen, on hover/focus, and when Motion is off.

**Hover** appears only on things that do something on click, and previews that result (lift + name tag, flap opens, corner peels). Static art never reacts.

**Text** moves only when an object carries it (curtain, billboard on a road, sheet of paper) or when the movement *is* the meaning (the mela passage's lines arrive as their objects arrive). Headlines, prices, facts and legal text never animate after their one entrance.

**Scale of motion.** The hero scene of each home page gets the big, scroll-scrubbed story. Everything else is small and consistent: 140 ms feedback, 320 ms hover, 600–900 ms transitions, ease `cubic-bezier(.2,.8,.2,1)`, overshoot only when something is *placed* (a stamp, a sticker, an envelope landing).

**Stable rest states.** A scroll story has 2–4 authored states with plateaus between them (the engine eases each stage, so it holds a composition for roughly the first and last 15 % of each stage). No scroll hijacking, no snap, no custom cursor, no sound.

**Controls and accessibility (all concepts, all pages)**
- Header Motion toggle plus `prefers-reduced-motion`: either one sets `html[data-motion="off"]`; every animation, scroll story and pointer effect stops, and pinned scenes collapse to their complete rest composition at normal height. Manual controls (tabs, steppers, deck arrows) keep working instantly.
- Every pointer interaction has a button/keyboard equivalent. Tab, carousel and stepper patterns use real `button`s with `aria-pressed`/`aria-selected`/`aria-live`.
- Native `<dialog>` only where a stop is warranted: *Buy now*, *Book now* and the Mela Passport. Footer policies and missing e-mail addresses answer with a toast, because they need no interruption.
- Visible `:focus-visible` ring on every control; 44 px minimum targets.
- Fine-pointer depth effects are disabled on coarse pointers. Off-screen scenes do no work (IntersectionObserver gate). One rAF per frame per page.
- Mobile (390 × 844, and a 360 px overflow check): scenes are recomposed, not shrunk; nav is a menu button with a panel listing all routes.
- Fonts from Google Fonts with system fallbacks; the pages still read without them.

## 4. The four worlds

Each home hero is one staged scene of **four planes** and one story. The same planes, lighter, repeat in every sub-page hero.

Shared planes vocabulary: **P0 backdrop** (establishes the world, moves least), **P1 middle** (establishes the activity), **P2 principal** (the object that carries the interaction), **P3 foreground** (a frame or tool that creates intimacy and clears away when it helps).

### A. The Paper Theatre — "Curtain up" (`theatre/`)

Taste anchor: `04-paper-theatre.html`. Navy proscenium, teal sky, red curtains, yellow type. Baloo 2 + Nunito Sans.

| Plane | Contents |
|---|---|
| P0 | Blue arch band, teal sky, dotted halo, paper clouds |
| P1 | Scalloped hills, Ferris wheel, two stalls, a bunting line (home: *Shop set*). Workshop set: shelved back wall, long table with pots and notebooks |
| P2 | The Mela truck (and a Ganesha prop on the right stall). Workshop set: an open notebook with two cut-paper hands stitching |
| P3 | Red curtains, pelmet, footlight lip with a paper fan, pot and crate |

**Home story.** The headline sits above the stage (readable, still). Scrolling is a **camera push toward the stage**: P0 grows 6 %, P1 18 %, P2 55 %, while the foreground curtains part and leave. The truck's wheels turn with the distance travelled. The tabs under the stage **change the set**: the current flats fly up and the other set drops in, staggered by plane, like a theatre set change.

| Trigger | Motion | Job | What the visitor learns |
|---|---|---|---|
| Load | Curtains open once (≈1.2 s), headline words rise once | Transition | The site is a stage; the headline is the title card |
| Scroll through hero | Push-in: planes scale by unequal amounts, curtains part, wheels turn | Depth + Explain | The set has real depth; the truck is the thing to look at |
| Tab SHOP ↔ WORKSHOP | Set change: flats fly up/down, staggered | Reveal + Transition | Tabs are two different scenes, not two blurbs |
| Hover truck / Ganesha / notebook | Prop lifts, a paper name tag drops on a string, cursor becomes pointer | Feedback | It is a link; this is where it goes |
| Any link | Curtains close, next page opens them | Transition | You are moving to another scene |
| Sub-page scroll | Curtains close over the hero as the paper content arrives | Transition | The act ends; the information begins |
| Envelope hover (Mela page) | Flap lifts 8°, envelope rises 10 px | Feedback | It opens |
| Envelope select | Envelope slides to the spotlight panel; the activity illustration performs its small action (wheel turns, cup tumbles, jaw opens, mirror pattern turns, thread draws, lollipop painted, truck rolls) | Reveal + Explain | What the activity is and how it works |
| Reel | Clips are illustrated loops; arrows, dots and pause; auto-advances only while visible | Reveal | Stand-in for the doc's product/workshop video carousel |

Cart = *box office*, Contact = *stage door*, Workshops = *rehearsal room*, Our Story = *the hands behind the curtain*.

### B. The Playroom — "A room that gets painted" (`playroom/`)

Taste anchor: `02-playroom.html`. Cobalt wall, yellow shelves, white paper toys, red/green accents. Fredoka + DM Sans.

| Plane | Contents |
|---|---|
| P0 | Cobalt wall, round window with teal sky and hills, a pennant string |
| P1 | Two yellow shelves with brackets, books, jars |
| P2 | Toys on the shelves: Mela truck, Ganesha, kaleidoscope, leopard puppet, Ferris wheel, notebook. Workshop room: a craft table in front of the window |
| P3 | Floor, green rug, giant paper fan, paint pot, and the **brush** that does the painting |

**Home story: the toys start blank and the scroll paints them.** Each toy exists as a paper-white sketch and a fully coloured twin; the colour is revealed bottom-up by a clip whose progress is tied to scroll. The foreground brush travels along the shelf to the toy being painted. At rest (Motion off, or the end of the story) every toy is painted. Pointer movement tilts the planes (desktop). Tabs **pan the camera** to the next room (shelf room ⟷ craft-table room), planes moving at different speeds.

| Trigger | Motion | Job | What the visitor learns |
|---|---|---|---|
| Scroll through hero | Toys are painted left to right; the brush travels with the colour | Explain + Depth | Thinkadoo kits begin blank and you finish them; the scroll position is a progress bar |
| Pointer move | Planes shift by 2/5/10/18 px, lamp swings | Depth | The room is a room |
| Hover/focus a toy | Lifts 12 px, hanging tag drops with its name, a blank toy paints itself in 300 ms | Feedback | This toy is clickable; this is its name |
| Tab SHOP ↔ WORKSHOP | Camera pans sideways to the craft-table room | Transition + Reveal | Shop and workshops are neighbouring rooms |
| Enter "get your hands dirty" section | Four coloured handprints stamp in once, 120 ms apart | Reveal (the sentence) | The sentence made literal |
| Sub-page scroll | The page's principal object (truck, Ganesha, notebook) paints in as the hero scrolls away | Explain | Same idea on every page |
| Mela envelopes | A cubby bookcase of seven; hover pulls the envelope halfway out, select pulls it onto the play mat where the toy performs | Feedback + Reveal | |

### C. The Mela Road — "Drive to the stall" (`mela-road/`)

New world in the same taste. Sunny: teal sky, yellow ground, red awnings, deep-blue road. Lilita One + Figtree.

| Plane | Contents |
|---|---|
| P0 | Sky, paper clouds, far green hills (moves 0.2×) |
| P1 | Giant Ferris wheel and far tents (0.45×) |
| P2 | The stalls that hold the copy (1×) with the **truck fixed at screen centre**, wheels turning with the distance |
| P3 | Near bunting poles, kids' silhouettes, fence posts (1.35×) |

**Home story: a pinned side-scroll.** Vertical scroll drives the camera along the road. Chapters: the title billboard (headline and supporting line), the **Shop stall** (Products), the **Workshop stall** (Experiences), the *get-your-hands-dirty* billboard and the drive-in screen (the reel). The SHOP / WORKSHOP tabs are the "drive to" controls and follow the camera; clicking one smooth-scrolls to its stall. Billboards and stall signs are real HTML riding in the stall plane, so the copy moves only because the *world* moves.

| Trigger | Motion | Job | What the visitor learns |
|---|---|---|---|
| Scroll through hero | Four planes slide at 0.2/0.45/1/1.35×, wheels turn, Ferris wheel turns slowly with distance | Depth + Explain | You are travelling; far things are far |
| Tab click | Camera glides to that stall (800 ms), truck wheels spin, awning pops up on arrival | Transition | Tabs are destinations |
| Stall arrival | The stall's sign lights (colour swap) | Feedback | This is the active chapter |
| Mela page: Ferris wheel | Seven gondolas; wheel turns so the chosen activity is at the bottom; gondola stays upright; scroll (pinned) or arrows step it | Reveal + Explain | Seven activities, one at a time, in order |
| Sub-page scroll | Truck drives off to the right while the page's stall opens | Transition | |
| Mela passage (`There is something magical…`) | Each line (*The bright colours*, *The little stalls*, *The games*, *The noise*, *The food*, *The people*) appears together with its object in the road scene | Reveal | Copy and picture arrive as one |

### D. The Sticker Book — "Collect the passport" (`sticker-book/`)

New world; Locker Land's sticker-and-tag objects, react.gg's deck, the doc's **Passport sticker** idea. Green desk, cream sheets, die-cut stickers with white borders and a dark outline. Bricolage Grotesque + Figtree.

| Plane | Contents |
|---|---|
| P0 | Green desk, cream sheet with a stitched edge |
| P1 | Washi tape, paper scraps, tone-on-tone type field (the doc's phrases) |
| P2 | The **deck**: three die-cut cards, Mela Truck, Paint My God, Bookbinding, with visible card edges |
| P3 | Loose die-cut stickers overlapping the headline and the deck's corners |

**Home story: a deck you can hold, a passport that fills.** The headline sits *behind* the deck and stickers (occlusion). Drag or flick the top card to reveal the next; arrows do the same. Tabs choose which card is on top (SHOP → Mela Truck, WORKSHOP → Bookbinding). Sections below are cream **sheets that stack**: each new sheet slides over the last, which steps back (scale .96, dims), so the page reads as a pile on a desk. The **Mela Passport** (header button) fills as the visitor opens the seven envelopes on the Mela page; it persists across pages in the browser.

| Trigger | Motion | Job | What the visitor learns |
|---|---|---|---|
| Load | Deck and loose stickers *slap on* once, staggered | Transition | These are stickers, laid on a sheet |
| Drag / arrows on deck | Top card follows the pointer, flicks off, next card rises; edges show count | Feedback + Reveal | One object, three destinations; how many are left |
| Tab SHOP ↔ WORKSHOP | Chosen card moves to the top | Reveal | |
| Hover a sticker or card | Corner peels (a fold), lift 6 px | Feedback | It is a link |
| Scroll between sheets | Next sheet slides over; previous steps back | Depth + Transition | A stack of pages |
| Open envelope (Mela) | Flap opens, activity sticker peels out and sticks into its passport slot with an overshoot | Reveal + Feedback | Completing an activity earns its sticker (doc: PASSPORT BOOK) |
| Header Passport button | Opens a dialog listing the seven slots; filled ones show the sticker | Reveal | State persists |

## 5. Page architecture (identical for all four; four distinct treatments)

Files in each concept folder: `index.html`, `shop.html`, `mela-truck.html`, `paint-my-god.html`, `workshops.html`, `our-story.html`, `contact.html`, `cart.html`.

- Header: logo → `index.html`; nav **Shop · Workshops · Our Story · Contact** (the menu in the design notes), each a different page; `Cart` with live count; `Motion` toggle; a small `All concepts` link to the board. `aria-current="page"` marks the current route. Product pages mark **Shop** as current.
- Footer: Home, Shop, Workshops, Our Story, Contact, then FAQ, Shipping, Returns/Refunds, Privacy, Terms (the footer set in the design notes). These five have no authored content, so each answers with a short toast that says so plainly. A one-line prototype disclosure sits at the bottom.
- **Shop** = "Let's make something." and two large visual cards (Mela Truck, Paint my God) leading to the two product pages.
- **Mela Truck / Paint My God** carry the full product descriptions, the inside-the-box content, benefits, perfect-for, details, call to action and share block.
- **Workshops** = intro, Bookbinding card (Upcoming workshops tab), what to expect, learn → make → take home → make again, host a workshop.
- **Our Story** = About, founders and Community (the content deck lists Community separately; it is not a menu item in the design notes, so it lives on Our Story).
- **Contact** = Say hello and the four routes.
- **Cart** = items (local), quantity, known subtotal; items without a price are listed and excluded from the subtotal; Buy now / checkout is an honest "unavailable in this prototype" dialog.
- Cart persists in `localStorage` (wrapped in try/catch; works without it).

## 6. Copy rules and treatment of the source's editorial marks

`_build/content.mjs` is the only place customer copy exists. Wording differs from the source deck only by the edits in `_build/copy-edits.mjs`, logged with reasons in `2026-10-03-copy-polish.md` (refinement that preserves meaning: hyphenation, agreement, one name per thing, lighter phrasing). `_build/verify.mjs` (a) fails if any line of the *edited* deck (minus the ignore list below) is missing from a concept's pages, (b) fails if any pre-edit wording survives in any built page, attributes included, (c) fails if a page carries different deck lines in one concept than in the others, and (d) fails if a long visible sentence (≥ 5 words) is absent from the deck and not on the interface-string allowlist.

| Source mark | Treatment |
|---|---|
| Parentheses after the home headline, subline and tabs | Editorial alternatives, not customer copy. Not rendered. The home uses "A brighter, kinder, more creative world begins with small hands." and "Thinkadoo creates DIY kits, cultural toys and hands-on experiences for curious minds." |
| `SHOP/WORKSHOP (Two tabs … Link it to shop and workshop links)` | Rendered as two tabs; each tab's panel has the doc's CTA, linking to the page |
| `"We can have a video carousel of the products/workshop"` | An illustrated **reel** with three clips (Mela Truck, Paint My God, Bookbinding), labelled "Illustrated preview" |
| `SHOP for Products → Products`, `BOOK a workshop → Experiences` | Tab panels: title *Products* / *Experiences*, text from the doc, CTA *SHOP for Products* / *BOOK a workshop* |
| `Large Visual cards`, `Large photographs/videos…`, `(Tab)` | Layout notes, not rendered |
| `Tab · Other products` | Not rendered: no content exists |
| SEO keywords | `<meta name="keywords">` only |
| `₹[INSERT PRICE]`, `₹[PRICE]` | Rendered as a dashed *Price to be confirmed* chip. Cart treats it as unpriced |
| `₹1,199`, `₹999` | Rendered verbatim |
| `[EMAIL]` | Rendered as a dashed *Email to be added* chip |
| `[@THINKADOO]`, `@THINKADOO` | Rendered as the handle (no URL has been supplied) |
| `[ ADD TO CART ]`, `[ BUY NOW ]`, `[BOOK NOW]`, `[EXPLORE WORKSHOP KITS →]`, `[HOST A WORKSHOP →]` | Buttons *Add to cart*, *Buy now*, *Book now*, *Explore workshop kits*, *Host a workshop*. Add to cart works locally; Buy now and Book now open an honest unavailable dialog; the other two are links |
| Markdown fragments in Paint My God's inside list (`### **…**`) | Stripped; the words are unchanged |
| Capitalisation / line breaks | May change (the deck is uppercase in places); wording may not |

Interface strings that are *not* customer copy (nav labels, Motion on/off, Close, Previous/Next, Quantity, Remove, Cart is empty, dialog explanations, "Illustrated preview", "All concepts", prototype disclosure) are allowed and live in `content.mjs` under `ui`.

## 7. States and edge cases covered

Cart empty / populated / unpriced item / quantity 1–9 / remove; booking and checkout unavailable; policy pages unavailable; Passport empty / partial / complete (D); motion on / off / reduced; no JavaScript (content visible; scenes show at rest); no web fonts; touch (no hover-only information; tags also appear on focus/tap); keyboard (all tabs, steppers, deck, cubbies, wheel); 1440 × 900, 390 × 844, 360 × 800; long Indian-language names are not an issue today (English only; layouts avoid fixed-width labels).

## 8. Acceptance (what "done" means for this pass)

1. Four folders × eight pages exist, build from `_build/build.mjs`, and open from `file://` or a static server.
2. `node docs/concepts-layered/_build/verify.mjs` passes: every deck line present, no invented long sentences, every nav destination exists and is distinct, one `<h1>` per page, no horizontal overflow assertions in the browser pass, no `<script src>` to third-party code.
3. Browser pass at 1440 × 900 and 390 × 844: hero at two scroll positions and both tab states per concept; hover on one prop; the signature widget; cart add/remove; Motion off.
4. A frame-by-frame critique against the Charter: for each animation, the screenshot pair that proves the end state says something the start did not.
5. Review board `docs/concepts-layered/index.html` explains each concept in two lines and links to its eight pages.

Not claimed: user-research validation, formal WCAG conformance, real-device performance, or any selected direction. These prototypes test layering and motion hypotheses.

## 9. As built (3 Oct 2026): where the build differs from the plan above

- **Playroom**: a short brush stroke plays once on load so the painting idea is taught before the first scroll (Explain). The home hero's two tabs pan between two rooms.
- **Mela Road**: signs and stalls park at fixed screen positions at the end of every sub-page hero (computed at runtime from the viewport) so the shop's two product stalls are always visible when the truck stops.
- **Sticker Book**: the Mela Passport button sits in every page's header; its state (like the cart) is stored in `localStorage`, which the four concepts share when served from one origin. The sheet "steps back" only on the home page and in sub-page heroes (sheets taller than the viewport are never pinned).
- **All**: every page keeps the Motion toggle; with Motion off no CSS animation runs (checked: 0 running animations on all four home pages) and pinned scenes collapse to a still, complete composition.
- **Not done / out of scope**: real photography or video, final contact addresses and prices, the optional "Other products" tab, payment, booking, e-mail sending.
