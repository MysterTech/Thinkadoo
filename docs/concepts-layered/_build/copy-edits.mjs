// The ONLY differences between the source deck and the site copy. Logged in docs/design/2026-10-03-copy-polish.md.
// [source wording, site wording]. verify.mjs applies these to the deck and fails if any source wording survives in a built page.
export const edits = [
  ['Precut MDF boards', 'Pre-cut MDF boards'],
  ['2 Paper cores, Trigger, 2 Rubberbands, End cap sticker, 6 cups', '2 paper cores, trigger, 2 rubber bands, end-cap sticker, 6 cups'],
  ['Felt, Yarn, Needle, Eyes and nose sticker', 'Felt, yarn, needle, eyes-and-nose sticker'],
  ['3 gypsum lollipop, Glitter, Thermocol case, Base sticker', '3 gypsum lollipops, glitter, Thermocol case, base sticker'],
  ['Wheels, Axle stick, Thread', 'Wheels, axle stick, thread'],
  ['paper folding stick', 'bone folder'],
  ['child safe gypsum waiting for your imagination', 'child-safe gypsum, waiting for your imagination'],
  ['Brush tipped 12 acrylic markers for a mess free experience.', '12 brush-tipped acrylic markers for a mess-free experience.'],
  ['stickers which are part of the story telling process', 'stickers that are part of the storytelling process'],
  ['2 flower shaped gems', '2 flower-shaped gems'],
  ['22.5 gm bottle for all pasting purposes.', '22.5 g bottle for all your pasting.'],
  ['Time to complete: 3 hrs', 'Time to complete: 3 hours'],
  ['Bookable physical experiences, with a corresponding kit/product wherever relevant.', 'Bookable in-person experiences, with a matching kit wherever relevant.'],
  ['Paint my God', 'Paint My God'],
];
// Wording that must not appear anywhere in a built page (case-sensitive, includes attributes).
export const banned = [
  'Precut', 'Rubberbands', 'End cap sticker', 'Eyes and nose sticker', '3 gypsum lollipop,', 'Axle stick', 'paper folding stick',
  'child safe', 'Brush tipped', 'mess free', 'story telling', 'flower shaped', ' gm bottle', '3 hrs', 'physical experiences', 'kit/product', 'Paint my God',
  'SHOP for Products', 'BOOK a workshop',
];
