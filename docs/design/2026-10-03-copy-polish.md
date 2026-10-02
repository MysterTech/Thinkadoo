# Copy polish: edit log

Date: 3 October 2026. Decision (user, 3 Oct): "polish the language of the content, but keep making sure all four are using the same content." This relaxes the earlier exact-copy rule in `2026-10-03-layered-concepts.md` §6 in one controlled way: wording may be **copy-edited**, but only through the log below, and every concept must carry exactly the same edited text.

## How "same content" is enforced

1. There is **one** copy module: `docs/concepts-layered/_build/content.mjs`. No concept writes customer copy of its own.
2. `docs/concepts-layered/_build/copy-edits.mjs` is the **only** list of differences between the source deck (`docs/research/2026-10-02-website-content.md`, untouched) and the site copy.
3. `node docs/concepts-layered/_build/verify.mjs` now (a) checks that every line of the *edited* deck appears in each concept, (b) fails if any original (pre-edit) wording survives anywhere in any built page, including attributes such as `aria-label`, (c) fails if a page carries a different set of deck lines in one concept than in the others, and (d) still fails on long visible sentences that are in neither the deck nor the interface allowlist.

## Principles of the edit

- Keep Thinkadoo's voice: short lines, plain words, no new claims, no new promises, no new facts.
- Fix what is mechanically wrong: missing hyphens in compound modifiers, plural/number agreement, inconsistent capitalisation inside lists, inconsistent units, one term for one thing.
- Do not paraphrase for style. Where a line was already clear it is untouched.
- Editorial marks remain excluded as before (parentheses, `[placeholders]`, layout notes).

## The edits

| # | Where | Source text | Site text | Why |
|---|---|---|---|---|
| 1 | Mela, envelope 1 | Precut MDF boards | Pre-cut MDF boards | Hyphenation |
| 2 | Mela, envelope 2 | 2 Paper cores, Trigger, 2 Rubberbands, End cap sticker, 6 cups | 2 paper cores, trigger, 2 rubber bands, end-cap sticker, 6 cups | List capitalisation; "rubber bands" is two words (the same card already says "rubber-band launcher"); compound modifier |
| 3 | Mela, envelope 5 | Felt, Yarn, Needle, Eyes and nose sticker | Felt, yarn, needle, eyes-and-nose sticker | List capitalisation; compound modifier |
| 4 | Mela, envelope 6 | 3 gypsum lollipop, Glitter, Thermocol case, Base sticker | 3 gypsum lollipops, glitter, Thermocol case, base sticker | Plural agreement after "3"; list capitalisation |
| 5 | Mela, envelope 7 | Wheels, Axle stick, Thread | Wheels, axle stick, thread | List capitalisation |
| 6 | Mela, product details | paper folding stick | bone folder | The kit calls this item "BONE FOLDER" two sections earlier; one name for one thing |
| 7 | Paint My God, inside the box | child safe gypsum waiting for your imagination | child-safe gypsum, waiting for your imagination | Compound modifier; comma before the participle |
| 8 | Paint My God, inside the box | Brush tipped 12 acrylic markers for a mess free experience | 12 brush-tipped acrylic markers for a mess-free experience | Number first, as in every other item; compound modifiers |
| 9 | Paint My God, inside the box | stickers which are part of the story telling process | stickers that are part of the storytelling process | "that" for a defining clause; "storytelling" is one word (the Mela copy writes it so) |
| 10 | Paint My God, inside the box | 2 flower shaped gems | 2 flower-shaped gems | Compound modifier |
| 11 | Paint My God, inside the box | 22.5 gm bottle for all pasting purposes. | 22.5 g bottle for all your pasting. | SI symbol is "g"; lighter phrase, same meaning |
| 12 | Paint My God, product details | Time to complete: 3 hrs | Time to complete: 3 hours | Spelled out, matching "3 HOURS" in Workshops and "Multiple sessions" in Mela |
| 13 | Home, Workshop tab | Bookable physical experiences, with a corresponding kit/product wherever relevant. | Bookable in-person experiences, with a matching kit wherever relevant. | "physical" and "kit/product" are internal-doc shorthand |
| 14 | Home, tab buttons | SHOP for Products / BOOK a workshop | Shop products / Book a workshop | Sentence-style button labels; mixed capitals read as shouting |
| 15 | Shop cards, reel, tags, titles | Paint my God | Paint My God | The product is "Paint My God" in its own description and details; one spelling everywhere |

## Left as written, deliberately

Headlines and rhythm lines (BUILD A MELA. MAKE A STORY., "Don't just visit a mela. Make one.", "I made this."), the founder biographies, the benefits lists, the workshop and community copy, "Thermocol" (the trade name used in India), "mantap", "vahana", "Mushak", the heading capitalisation (kept as uppercase literals, styled per concept), and the heading-level uppercase in lists such as ACRYLIC MARKERS.

## Open for the author

Not changed because they are voice or fact decisions, not errors: whether "Paint My God" should read "Paint my God" in running text; whether "DIY" should be spelled out on first use; whether the Mela price line should carry a currency note; and whether the doc's `Everyone is welcome.` should lead the Community block instead of closing it.
