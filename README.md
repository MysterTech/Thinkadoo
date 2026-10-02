<p align="center">
  <img src="docs/concepts/assets/thinkadoo-red.png" alt="Thinkadoo" width="360">
</p>

# Thinkadoo

Thinkadoo is a children's craft-kit and workshop brand that turns imagination, art and creative discovery into screen-free hands-on experiences for children.

This repository holds the **design exploration** for the Thinkadoo public website: the product and design docs, and four generations of standalone HTML concepts to compare. No visual direction has been chosen yet and the architecture has not been decided. There is no production frontend.

## See the concepts

**Start with the newest set: [docs/concepts-layered/index.html](docs/concepts-layered/index.html).** It is a review board with a preview of each concept, what to try in it, and links to all eight of its pages.

### Option 1: a local server (recommended)

From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

| What | Address |
|---|---|
| **Layered concepts** (newest) | <http://127.0.0.1:4173/docs/concepts-layered/index.html> |
| Four worlds in motion | <http://127.0.0.1:4173/docs/concepts-motion/index.html> |
| Round two | <http://127.0.0.1:4173/docs/concepts-round2/index.html> |
| First set | <http://127.0.0.1:4173/docs/concepts/index.html> |

The layered set was built and checked this way. Stop the server with Ctrl+C.

### Option 2: open the files directly

The pages are static HTML, so you can also double-click a board, or from the repository root run `open docs/concepts-layered/index.html` (macOS), `xdg-open docs/concepts-layered/index.html` (Linux) or `start docs\concepts-layered\index.html` (Windows). Every reference is a relative path, but direct file opening of the layered set has not been tested; if anything looks off, use the server.

Fonts load from Google Fonts. Offline the pages still work, with fallback fonts.

### Things to know while reviewing

- **Motion toggle.** Every layered page has a Motion button in the header. Turn it off (or set your system to reduce motion) and nothing animates; the pinned scroll scenes collapse to a still, complete layout.
- **Hover and drag.** Hover on props, toys, product stalls and cards previews where the click goes. The Sticker Book's deck can be dragged.
- **Shared state.** The cart and the Mela Passport are kept in the browser's local storage, so the four layered concepts share them when served from the same address. Clear site data to reset.
- **Prototypes, not a store.** Nothing takes orders, payments or bookings and nothing collects personal data. *Buy now* and *Book now* open a message saying so.
- **Illustrations only.** There is no photography or video yet. The reels are illustrated clips labelled "Illustrated preview". Prices that were not supplied (the Mela Truck) and e-mail addresses show as "to be confirmed".

## The concepts

### Layered concepts (3 Oct 2026, current)

Four worlds, each with the same eight pages (Home, Shop, Mela Truck, Paint My God, Workshops, Our Story, Contact, Cart). Each home page is one staged scene of four planes: backdrop, middle, principal object, foreground. Every moving thing has a stated job (reveal, explain, depth, feedback or transition) and anything else was removed.

| | Concept | Idea | Folder |
|---|---|---|---|
| A | **The Paper Theatre** | A navy proscenium. Scrolling pushes the camera toward a four-plane stage and parts the curtains; the tabs swap the whole set; page changes close and open the curtains. | [theatre/](docs/concepts-layered/theatre/index.html) |
| B | **The Playroom** | A cobalt room. Toys start as paper sketches and the scroll paints them with a brush; the tabs pan to a craft-table room. | [playroom/](docs/concepts-layered/playroom/index.html) |
| C | **The Mela Road** | A pinned side-scroll. The truck stays put while four planes slide past; SHOP and WORKSHOP are stalls the tabs drive to; a Ferris wheel selects the seven activities. | [mela-road/](docs/concepts-layered/mela-road/index.html) |
| D | **The Sticker Book** | Die-cut stickers on cream sheets on a green desk. A draggable deck, sheets that step back as the next lands, and a Passport that fills as envelopes are opened. | [sticker-book/](docs/concepts-layered/sticker-book/index.html) |

All four read customer copy from one file, `docs/concepts-layered/_build/content.mjs`. It differs from the source Google Doc only by the logged wording edits in [copy-polish.md](docs/design/2026-10-03-copy-polish.md), so the four always say the same thing.

### Earlier sets (kept for reference)

| Set | Concepts | Notes |
|---|---|---|
| [Four worlds in motion](docs/concepts-motion/index.html) (2 Oct) | Unbox a little universe, Type is a toy, A world in a fold, The print club | Reviewed and not chosen. Superseded by the layered set. |
| [Round two](docs/concepts-round2/index.html) (2 Oct) | The Wonder Wheel, Little Big Studio, The Storybook | Content-led set built on the Website Content doc. |
| [First set](docs/concepts/index.html) (27 Sep) | The maker's table, The playroom, The craft journal, The paper theatre | **The playroom and the paper theatre are the taste anchors** for the layered set (flat saturated colour, deep-blue outlines, layered cut-paper scenes). |

All sets use the supplied red and yellow wordmarks unchanged and the seven source colours: red `#ef3a24`, yellow `#fcda00`, teal `#32c3e0`, green `#5cba47`, blue `#2960ad`, deep blue `#201b4a` and ink `#221f1f`.

## What's here

```
docs/
  concepts-layered/    The newest set
    index.html         Review board: previews, what to try, links to all 32 pages
    theatre/ playroom/ mela-road/ sticker-book/
                       One folder per concept: 8 pages + its own CSS (and JS where needed)
    shared/            engine.js (motion, scroll scenes, tabs, reel, cart, dialogs),
                       base.css, blocks.css, art.css used by all four
    assets/            Wordmarks and the board's preview images
    _build/            Generator and checks (Node, no dependencies):
                         content.mjs     the one copy file
                         copy-edits.mjs  the only differences from the source doc
                         art-*.mjs       illustration library (flat SVG)
                         theatre.mjs, playroom.mjs, mela-road.mjs, sticker-book.mjs   page templates
                         build.mjs       writes the pages     verify.mjs  copy + structure checks
    _gallery.html      Every illustration on one page (dev aid)
  concepts-motion/     Four worlds in motion (earlier)
  concepts-round2/     Round two (earlier)
  concepts/            First set, with its own board and verify.mjs
  design/
    2026-10-03-layered-concepts.md   Contract for the layered set: motion charter, layers, pages
    2026-10-03-copy-polish.md        Every copy edit, with the reason
    PRODUCT.md  DESIGN.md            Audience, purpose, constraints; shared design system
    (earlier contracts: website-concepts.md, 2026-10-02-*.md)
  research/            Reference-site studies, source snapshots, the Website Content text
  qa/                  QA record of the layered pass
  plans/ workflows/    Earlier execution plans and gate profile
frontend/              Reserved for the production frontend. Empty until a direction is chosen.
```

## Rebuilding and checking the layered set

The pages in `docs/concepts-layered/<concept>/` are generated. If you edit copy, a template or a stylesheet's markup, rebuild and check from the repository root (Node 18+, no packages to install):

```bash
node docs/concepts-layered/_build/build.mjs      # rewrites the 32 pages
node docs/concepts-layered/_build/verify.mjs     # must print "all checks passed"
node docs/concepts-layered/_build/board.mjs      # rewrites the review board
```

`verify.mjs` fails if an edited deck line is missing from a concept, if wording from before the copy edits survives in any page (attributes included), if two concepts carry different copy on the same page, if a long visible sentence is not in the content deck, or if a page breaks structure rules (one `h1`, routes that exist, no header hash links, `alt` on images, no third-party scripts).

To change wording: edit `content.mjs`, add the pair to `copy-edits.mjs`, log it in [copy-polish.md](docs/design/2026-10-03-copy-polish.md), rebuild and verify. The first set has its own check: `node docs/concepts/verify.mjs`.

Browser checks (interactions, mobile widths, Motion off) were done by hand; the results and the known gaps are in [docs/qa/2026-10-03-layered-concepts-review.md](docs/qa/2026-10-03-layered-concepts-review.md).

## Prototype boundaries

- Nothing takes orders, payments or bookings, and nothing collects personal data.
- Confirmed from the source doc: Paint My God ₹1,199, 5+ years, 3 hours; Bookbinding ₹999, 3 hours, small group, Bengaluru; the Mela Truck's seven activities and contents. Not supplied: the Mela Truck's price, workshop dates and venue, e-mail addresses, the Instagram link, policies, photography and video.
- Illustrations are newly authored SVG made for this exploration. They are not photographs of real products.

Final catalogue, photography, commerce, workshop logistics, architecture and the chosen direction are still open. [PRODUCT.md](docs/design/PRODUCT.md) tracks them.

## Working in this repo

Docs come before code. Changes to the concepts start with the contract in `docs/design/` and [DESIGN.md](docs/design/DESIGN.md), and the build follows the updated contract. Keep design and planning material in `docs/` and leave `frontend/` empty until a direction is chosen.
