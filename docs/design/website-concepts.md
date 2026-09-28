# Thinkadoo: four website concepts

Date: 27 September 2026. Status: design exploration requested; no selected concept yet.

## Source and decisions

Freshly read source: [Website Design Notes](https://docs.google.com/document/d/1Z4dyktCG_hYdKzRoZ1Gg_AuqCDDCeY2_XpU0DxUDFrg/edit), one tab, revision ANLCKQkxfHbn-RoKzi0A8dAkw6pC8k_H0gK7GdDUCQrI9krrpZk-Ee7qtnB_4YKYnuFZ9LEBtML9JAHdwV8DmC6YYpHjPyxFDVaHvinw9HE.

The user explicitly rejected the linked homepage concept. Do not reuse its composition, kit placeholder boxes, section rhythm or giant three-line slogan. User-confirmed positioning (28 September): “Thinkadoo is a children's craft-kit and workshop brand that turns imagination, art and creative discovery into screen-free hands-on experiences for children.” Lead with this broader creative purpose. Traditions may inspire individual kits but do not define the whole brand. The two provisional example products are The Great Indian Mela Truck and Paint My God; prices, ages and workshop details are not confirmed.

Architecture and payment providers are deferred by the current user request. The earlier draft's provider choice is not part of this visual decision. This round has no live payment integration. Every transaction preview explains that checkout is unavailable in the concept, without implementation details. Do not invent success states, paid orders, testimonials, trust statistics, scarcity, safety certifications, dates, contact addresses or policy details.

Requested deliverables: four fully designed responsive HTML homepage concepts with meaningful animation and local interactions, plus one comparison/review entry page. All artifacts and planning live under docs/. frontend/ remains reserved for the eventual chosen production frontend.

## Shared customer scope

Each full homepage has clear Shop, Workshops, Our Story and Contact navigation, kit discovery, workshop discovery, a story section and useful footer navigation. A kit action opens a local product preview with illustration, description and a clear non-live checkout explanation. A workshop action opens a local format/booking preview, allows at least one choice and explains the non-live checkout. All visible controls either work locally, navigate to real sections, or explicitly explain an unavailable operation. Policy/contact links may open an honest preview disclosure; do not invent public policy or a contact email. No dead hash links.

Use polished provisional editorial copy, not lorem ipsum or image placeholders. Product imagery can be original SVG/CSS craft illustrations. State on the review board that artwork and product copy are concept material. Do not imply the illustrations are photographs of the actual products. A four-concept switcher or quiet review link is outside the customer navigation.

Workshop choices are labelled sample activities, not dates or bookable inventory. Omit unconfirmed ages, prices, locations, capacity and availability. Transactional previews never create an order or reservation. Use action labels such as Explore kit or Preview workshop; an unavailable checkout control is disabled and accompanied by: Checkout is unavailable in this design preview. Product previews also identify illustrated contents and descriptions as provisional.

## Visual foundations

Primary source colours: red #ef3a24, yellow #fcda00, teal #32c3e0, green #5cba47. Dark accents: blue #2960ad, deep blue #201b4a, ink #221f1f. Use distinct subsets, dominance and composition across concepts. White or paper neutrals may support them. Flat colour only; no gradients. Heavy expressive headlines, straightforward readable body text, oversized meaningful craft motifs. No generic SaaS card layouts, fake metrics, or a recolour of the rejected concept.

Do not share a hero composition or section skeleton between concepts. 01 uses a close overhead desk and product rows; 02 uses a centred shelf and colour rails; 03 uses editorial spreads and an event list; 04 uses a panoramic stage and chapter navigation. 01 and 04 must have independently drawn illustrations and different camera perspectives, even when they feature the same product.

### 01 — The maker's table

File: docs/concepts/01-makers-table.html. An intimate overhead craft desk, with a precise paper-white base, deep blue text, red accents, and generous breathing room. Typography: Bricolage Grotesque display and Manrope body, with robust local fallbacks. A large asymmetrical desk scene is the protagonist: illustrated decorated toy truck, folded paper, brush, paint dishes and a hand-lettered note surround an offset headline. Use detailed SVG/CSS object construction and tactile shadows, not empty geometric filler. Headline idea: A little mess. A lot of wonder. An Open the kit control triggers an assembly/unpacking sequence, with replay. Lower layout is spacious product rows and a compact workshop strip. Palette: paper #fffdf8, deep blue #201b4a, red #ef3a24, yellow #fcda00, teal #32c3e0. Personality: warm human activity, disciplined layout, calm surrounding chrome.

### 02 — The playroom

File: docs/concepts/02-playroom.html. A striking typographic play space with cobalt #2960ad dominant, white, yellow #fcda00 and green #5cba47. Typography: Fredoka display and DM Sans body. Broad centered or edge-to-edge rounded typography and an interactive horizontal toy shelf; no left-copy/right-picture default hero. Headline idea: Small hands. Big possibilities. User-controlled Make / Paint / Play modes change the central illustrated object or scene. Objects arrive in one bouncy entrance and respond to selection; avoid endless random wobbling. Product browsing uses large colour fields and rail-like composition; workshops feel like an invitation to a club. Deliberately contemporary and graphic, not a recreation of the previous yellow hero.

### 03 — The craft journal

File: docs/concepts/03-craft-journal.html. A contemporary cultural design publication and storefront with large editorial image/illustration fields and surprising scale changes. Typography: Archivo Black display, Archivo body, optional restrained handwritten annotations; avoid warm-cream serif clichés and dense broadsheet rules. Palette: white #ffffff, red #ef3a24, ink #221f1f, teal #32c3e0, yellow #fcda00 used sparingly. A large red typographic masthead or vertical title composition anchors a hand-block-print-inspired craft illustration. Headline idea: Old stories. Brand new hands. Alternating wide feature spreads and quiet product information make the objects desirable. Motion: a user-controlled colour/stamp interaction in the feature illustration and a single deliberate opening reveal. Workshops are a clear editorial event listing. Sophisticated parent appeal with cultural specificity.

### 04 — The paper theatre

File: docs/concepts/04-paper-theatre.html. Immersive layered cut-paper storytelling with deep blue #201b4a, teal #32c3e0, yellow #fcda00 and red #ef3a24. Typography: Baloo 2 display and Nunito Sans body. The hero is an entire wide story stage: cut-paper arches, a richly detailed illustrated mela truck moving through a miniature fair, foreground cutouts and clearly legible headline. Headline idea: Every box begins a story. An accessible Pull the curtain / Replay story control triggers a finite reveal, with pause support for any sustained animation. A story chapter control or scene selection provides local interaction. Follow with a quieter shop and workshop area; preserve conventional navigation. Make this cinematic and spatial, not neon tech or gradient space.

## Interaction and accessibility contract

Use semantic HTML, one h1 per concept, a main landmark, descriptive titles, viewport meta, labels, keyboard-visible focus, at least 44px primary touch controls and mobile navigation. Native dialog is appropriate: close control, Escape, focus kept inside while open, and focus restored on close. Never hijack scrolling or pointer. Match reduced-motion preference and offer a pause toggle for sustained motion; motion must not hide essential content. A preview flag may be subtle but transactional dialogs must explicitly state checkout is unavailable. No real personal data collection or external side effects.

Use inline styles/scripts and SVG where useful; each concept should open directly as an HTML file with its local assets folder. Local assets are required for logos. Google Fonts with fallbacks are permitted, but no dependency install or framework is needed. Offline illustrations and interaction must still work. Avoid fragile external image services. Content fits mobile at 360px without horizontal document overflow. Do not use overflow-hidden on the document to conceal broken layout.

## Research-driven refinements — 28 September

Read docs/research/visual-references.md and docs/design/DESIGN.md before building. These refine the earlier draft, which preceded the required deep reference study.

Use the actual supplied assets at docs/concepts/assets/thinkadoo-red.png and thinkadoo-yellow.png. They are 1950 by 606 transparent PNG wordmarks with irregular lettering, black outlines and stars. Do not replace them with typeset text, redraw, recolour, crop off the stars, or distort their ratio. Typically render at 150–190px wide in navigation; bigger when intentional. The yellow version reads best on dark saturated fields.

All four pages have a quiet fixed review link to index.html, outside customer navigation. Add a global Motion on/off toggle. Pause all animation and pointer/scroll transforms when off and when prefers-reduced-motion is active. Default content must remain visible even if JS fails. Decorative reveal effects may animate from 94% scale or small offsets; no blanket opacity-zero hidden sections.

Four exploratory directions are explicitly requested. They are the review artifacts themselves; no direction is pre-selected, and no extra image-approval gate precedes HTML. User directory instruction overrides skill default root PRODUCT.md/DESIGN.md: use docs/design/PRODUCT.md and docs/design/DESIGN.md. Display-size defaults may exceed 6rem because the source brief explicitly requires oversized, often full-width headlines. Do not add an architecture discussion or production framework.

### Required behavioral distinction

- Maker's table: open/unpack a kit with a finite, replayable assembly action. A few scene props can gently react to fine pointer; content never follows the pointer. Product information uses open, spacious rows. Use a bright yellow craft-art field rather than a generic beige website. Use assets/mela-craft-scene.png if present; a separate original animated assembly SVG remains necessary.
- Playroom: make/paint/play selects a visibly different central object or making state and updates concise supporting copy. Shelf objects have spring-like arrival, tactile press states, and a controlled horizontal rail. Oversized cobalt/white/yellow composition with Fredoka and a restrained body face. Use interactive original vector craft objects, not miniature product cards floating in an empty hero.
- Craft journal: red and white editorial scale, asymmetry and block-print rhythm. A meaningful stamp or colour interaction visibly prints a repeat pattern; reset is available. A large art field and product spreads replace the standard marketing grid. Use Archivo Black/Archivo. Avoid warm-cream serif and broadsheet defaults.
- Paper theatre: an entire wide miniature stage, independent illustrated perspective, opening curtains and at least three selectable chapters that change scenery/copy. Add next/previous controls so drag is optional. Let scroll connect stage to quieter shop and workshop sections without hijacking scrolling. Use Baloo 2/Nunito Sans and deep blue/yellow. Draw purposeful layers—arch, fair stalls, truck, paper fans—rather than random geometry.

### Motion and hover contract

Use transform-origin, staged delays, distinct easing, clip-path or masks where appropriate. Controls have pressed, hover and focus states in the world's grammar. Keep hover artwork tilt small (about 2–5 degrees) and optional; never move an entire readable text group. Sustained marquees, drifting props and spinning ornaments require the Motion toggle. No animated background gradients, scroll locks, custom cursors, sound or giant compulsory intro. Add fallback buttons for drag/touch actions. Use IntersectionObserver for isolated reveals and passive requestAnimationFrame-bounded scroll updates only if useful. Avoid sharing one repeated fade-up as the entire animation system.

### Shared factual content

Use two provisional example products from the linked draft: The Great Indian Mela Truck (build/decorate/play; six mela activities plus building the truck) and Paint My God (decorate Ganesha; packaging folds into a mantap). These are useful design content, not approved commercial specifications. Do not invent further named products. Workshops can illustrate a Mela makers or Paint and tell format; clearly mark format previews inside the booking panel. Story leads with imagination, art, creative discovery and the joy of making. Traditions may appear as one theme, never the exclusive brand premise. Do not invent founder biographies. No customer quotes, sales counts or fulfilment claims. For Craft Journal, prefer “Big ideas. Little hands.” or “A world of ideas. Made by you.” over the earlier heritage-led headline suggestion.

## Review surface

docs/concepts/index.html presents four live concept previews with separate open links, a clear A–D mapping, concise direction notes and a desktop/mobile preview option. A user can compare and report a favourite or a mix; no preference is automatically treated as approval for production. Keep the final frontend untouched until a direction is selected and architecture is agreed.

## Acceptance

Four distinct layouts, typography families, dominant palettes and motion signatures; all required sections and preview interactions work; desktop/mobile layouts checked; reduced motion covered; inline JavaScript is valid; no live payments or fabricated business claims; comparison board is opened for the user. Record evidence and limitations in docs/qa/concepts-review.md.

## Revision 2 — motion woven into browsing

User feedback: the first concepts are good but not great; the supplied references include motion and dynamics in hover and scrolling, including text and illustrations. Strengthen these behaviors in all four worlds. Existing button-triggered demonstrations alone do not satisfy this revision. Preserve the user-confirmed positioning, factual boundaries and distinct compositions above.

Every concept needs a visible, authored response to natural scrolling, a substantial illustration response to hover/focus, and a typographic motion treatment. The mechanisms must differ, with calm readable body copy. Record the exact gestures on the comparison board. Do not use one generic reveal across every section. Do not add compulsory intros, scroll locking, wheel interception, custom cursors or excessive empty scroll distance.

### Maker's table: pieces become a project

Make the desk feel spatial through restrained counter-movement of its paper note and art field. Add a visible scroll-driven assembly passage: separate pieces converge into a craft object across a short natural scroll range, with readable Unfold / Decorate / Imagine beats. Reuse this concept's original SVG parts, with a distinct wrapper so the existing Open / Replay interaction still works. Section type can settle from slightly misaligned paper lines. Product illustrations lift/straighten and their small decorative parts respond on hover or focus-within; actual action targets and body copy remain stable. Mobile uses a compact vertical passage and smaller displacements.

### Playroom: a shelf that reacts

Carry the shelf beyond mode switching. Oversized hero word lines counter-slide gently with scroll while the central scene stays readable. Objects on the shelf should lean/lift toward a fine pointer and settle with a short spring-like easing; keyboard focus and selection receive equivalent feedback. As the shop rail enters view, its objects arrive at distinct rotations and settle onto the shelf; products are still browsable via next/previous buttons on touch. Include a scroll-linked typographic colour-band transition, not a perpetual ticker. Preserve Make / Paint / Play and all dialogs.

### Craft journal: paper and ink

Let scroll straighten and open the print sheet within its red field, and move the oversized masthead subtly relative to the page. Add a large, clipped print-language strip whose opposing words travel with scroll; it must remain legible and must not cause document overflow. Product spreads respond like paper being lifted: bounded perspective/tilt, a moving decorative print mark, and a clear hover/focus cue for the stable kit action. Workshop rows reveal a contrasting paper/ink shape behind the title and rotate the stamp, with focus-within and touch activation parity. Preserve stamping, ink selection and reset.

### Paper theatre: scenery has depth

Give the wide stage at least three purposeful depth planes that move at different bounded rates with natural scroll: background arches/stalls, middle truck/characters, foreground cut-paper props. A short scroll passage opens the stage and carries the reader into the next content scene, without trapping the page. Chapter selection still explicitly changes scenery and copy, with next/previous alternatives. Hover/focus makes an individual fair object unfold or wave; the headline has a finite staged paper-letter arrival. Avoid moving whole readable paragraphs or making content dependent on watching the animation.

### Motion engineering and review

Use passive scroll listeners with at most one outstanding requestAnimationFrame, derived from element position rather than accumulated wheel deltas. Bound transforms, update visible scenes only, and reset transforms when motion is off. Fine-pointer movement is optional, bounded and disabled on coarse pointers. Motion-off and system reduced-motion must stop scroll transforms, perspective response and transitions as well as CSS animation. All sections, actions and final illustrative states remain usable. No external animation dependency is needed. Browser verification must compare a motion-bearing element at two scroll positions and exercise the relevant interaction; document source inspection separately from observed runtime behavior.

Review clarification before fixes: Motion off applies to the root element's smooth anchor scrolling, not only descendants. Focus indicators must remain visible on dark footers. Decorative SVG marks in a product field retain their explicit small dimensions instead of inheriting the main product illustration's full width. All accessible section labels resolve to an existing heading ID.
