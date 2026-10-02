# Reference behaviour, mapped to purpose

Date: 3 October 2026. Fresh live pass with the Playwright browser at 1440 × 900 (natural wheel scroll, 4 positions per site, pointer hover), on top of `2026-10-02-motion-study.md` and `visual-references.md`. Those two files hold the source-level timing declarations; this file does something different. It asks, for every behaviour that makes the five references feel alive: **what job does it do?** The earlier concepts copied the *surface* of these behaviours (things wobble, drift, fade in) and lost the job, which is why they read as "good but not great" and sometimes as distracting.

Observed states below are what the page showed after wheel scroll; they are not frame-rate measurements.

## What we saw

### kinder-und-klinik.de — the illustration is the page structure
- 0 px: a flat indigo field, two huge eyes whose pupils sit at the lower left, a mint "eyebrow" block. Nothing else competes.
- 500 px: the eyes have scrolled off; the **cyan mouth** with four white teeth is now the container for the first text block ("Die Experten…"). The heading is *inside* the character.
- 1000–1700 px: copy is plain, white, left-aligned, calm. Lower in the same container a green germ sits on a tooth and a **giant toothbrush crosses the container's bottom edge into the next section**.
- Job: the character *is* the section boundary. Nothing is decorative: the mouth holds the text, the toothbrush hands the eye from one section to the next, and the adult-information copy that follows is quiet.

### happiloop (Webflow template) — type, object and characters occlude each other
- 0 px: a 290 px wordmark tilted across the stage, a giant tilted bottle sitting **in front of** the letters, three spiky characters overlapping the letter edges, handwritten arrows pointing at the bottle and at the variant picker.
- 1000 px: a scalloped paper edge changes the section; text is calm, the photos are cut into scalloped blobs.
- Job: overlap creates depth without any parallax. The arrows are directions, not decoration: one says "look here", one says "choose here".

### poptastic — type as a texture, the product as the only sharp thing
- 0 px: six rows of huge tone-on-tone type run behind one bowl; the bowl's flat black shadow is part of the composition. One blue CTA.
- 1000 px: a tilted bag beside a torn-paper white card carrying the facts; below it a shelf with arrows.
- Job: the moving text gives *energy* but stays tone-on-tone so it never competes with the one readable thing. The fact card is quiet, boxed, torn-edged: information is physically separate from spectacle.

### lockerland.com.au — objects as navigation, tags as labels
- 0 px: a fan of tilted die-cut cards, the centre one larger; each has an illustration and a **label tag overlapping its lower edge**. Dots show position. A sticky pill nav appears on scroll.
- 1000 px: stat "stickers" (circle, scallop, arch) each with a prop overlapping its edge (a box, a cursor, a locker). Checker bands between sections.
- Job: the cards are the navigation. Scale and tilt tell you what is selected; the tag tells you what it is; the prop overlapping the edge gives the flat badge a z-axis.

### react.gg — one object you can hold
- 0 px: a thick-edged card deck; the visible stack of card edges shows how many are left. Dragging the top card away reveals the next.
- 1700 px: a board-game track curves through the page; the track is the table of contents.
- Job: manipulation teaches the product. The deck's edges are information (quantity), and the track makes "scroll" feel like "progress along a game".

## Transfer table: behaviour → job → Thinkadoo use

| Reference behaviour | Job it does | Thinkadoo transfer | What we refuse to copy |
|---|---|---|---|
| Mouth is the section container (Kinder) | Illustration *is* the boundary between sections | The curtain, the room, the road, the sticker sheet each hold the copy and mark section changes | A mascot that wobbles beside unrelated text |
| Prop crosses a section edge (Kinder toothbrush) | Carries the eye down the page | A paint brush, a bunting line or a paper tab straddles two sections in every concept | Props floating in empty gutters |
| Object in front of type (Happiloop, Poptastic) | Depth through occlusion; static, so it costs nothing | Headlines sit behind the principal object in at least the home hero of each concept | Letters that move independently to "feel dynamic" |
| Handwritten arrow (Happiloop) | Tells the visitor what to do | A single hand-drawn arrow per hero pointing at the one thing to try | Arrows on every control |
| Tone-on-tone type field (Poptastic) | Background energy that cannot be misread | Doc phrases such as BUILD · AIM · FOLD · DISCOVER set as one band, tone-on-tone, one per page, paused off-screen | Several competing tickers |
| Torn / scalloped cards for facts (Poptastic, Happiloop) | Separates information from spectacle | Product facts and workshop details always sit on a flat, still paper card | Facts floating on animated art |
| Fan of tilted cards, label tags (Locker Land) | Objects are navigation; scale = selection | Sticker-book deck, theatre playbills, cubby envelopes | Cards that move after you have stopped |
| Stat stickers with an overlapping prop (Locker Land) | A flat badge gets a z-axis | Die-cut sticker style with a white border and one overlapping prop | Gratuitous stickers |
| Draggable deck whose edges show the count (react.gg) | Direct manipulation teaches; edges inform | Sticker-book deck of three cards (two kits, one workshop) with visible card edges | A deck with more cards than content |
| Curving track as table of contents (react.gg) | Scroll becomes progress | The Mela road carries the visitor between Shop, Workshop and the statement | A track that is only a drawing |
| Spring hover on a card (Locker Land) | Touchability feedback | Only on things that *do* something on click, and the response previews the click | Hover rotation on static art |
| Orchestrated load of headline + object (Happiloop) | Establishes hierarchy in one beat | One entrance per page, finite (≤ 1.2 s), then still | Sections that all fade up the same way |

## Rules this study imposes on the new set

1. **Overlap before parallax.** Depth is first composed (occlusion, cropping, a prop crossing a boundary). Motion then only *reveals* that depth.
2. **Every moving thing has a job** (reveal, explain, depth, feedback, transition). Anything else is deleted. See the Motion Charter in `docs/design/2026-10-03-layered-concepts.md`.
3. **Copy never moves unless an object carries it** (a curtain, a billboard on a road, a sheet of paper) or the motion is the meaning (lines of the mela passage appearing as their object appears).
4. **Facts sit still.** Product details, prices, workshop facts and contact routes live on flat cards that do not animate.
5. **The first hover must tell you something.** If the hover result does not preview the click result, it is not a hover state, it is decoration.
