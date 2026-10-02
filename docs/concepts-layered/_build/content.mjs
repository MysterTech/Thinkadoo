// Customer copy for every concept. Source: "Website Content" Google Doc, snapshot at
// docs/research/2026-10-02-website-content.md. Wording is verbatim; only capitalisation and
// line breaks may change in rendering. Editorial parentheses, layout notes and bracketed
// placeholders are NOT here as customer copy (see docs/design/2026-10-03-layered-concepts.md §6).

export const PENDING_PRICE = { pending: 'price' };
export const PENDING_EMAIL = { pending: 'email' };

// Interface strings: not customer copy. Kept separate so the checker can allow them.
export const ui = {
  brand: 'Thinkadoo',
  cart: 'Cart',
  cartCount: (n) => `Cart, ${n} ${n === 1 ? 'item' : 'items'}`,
  motionOn: 'Motion on',
  motionOff: 'Motion off',
  menu: 'Menu',
  close: 'Close',
  previous: 'Previous',
  next: 'Next',
  play: 'Play',
  pause: 'Pause',
  allConcepts: 'All concepts',
  skip: 'Skip to content',
  illustrated: 'Illustrated preview',
  addToCart: 'Add to cart',
  buyNow: 'Buy now',
  bookNow: 'Book now',
  exploreKits: 'Explore workshop kits',
  hostWorkshop: 'Host a workshop',
  explore: 'Explore',
  priceTbc: 'Price to be confirmed',
  emailTbc: 'Email to be added',
  quantity: 'Quantity',
  remove: 'Remove',
  subtotal: 'Subtotal',
  cartEmpty: 'Your cart is empty.',
  cartEmptyCta: 'Shop',
  unpricedNote: 'Not included in the subtotal: price to be confirmed.',
  checkoutUnavailable: 'Checkout is not part of this design prototype. Nothing has been ordered or charged.',
  bookingUnavailable: 'Booking is not part of this design prototype. No dates, venue or places have been confirmed yet.',
  policyUnavailable: 'This page has not been written yet.',
  emailUnavailable: 'No email address has been added yet.',
  addedToCart: 'Added to cart',
  prototype: 'A design prototype. Orders, bookings and enquiries are not live.',
  reelLabel: 'Product and workshop reel',
  reelDots: 'Choose a clip',
  passport: 'Mela Passport',
  passportCount: (n) => `${n} of 7 stickers`,
  passportCountTpl: '{n} of 7 stickers',
  earned: 'Earned',
  notEarned: 'Not yet earned',
  deckLabel: 'Kits and workshops',
  envelope: 'Envelope',
  clipOf: (i, n) => `Clip ${i} of ${n}`,
  tabs: 'Shop or workshop',
  stepOf: (i, n) => `${i} of ${n}`,
  openEnvelope: 'Open envelope',
  selectedEnvelope: 'Selected',
  menuPanel: 'Main menu',
};

export const nav = [
  { id: 'shop', label: 'Shop', href: 'shop.html' },
  { id: 'workshops', label: 'Workshops', href: 'workshops.html' },
  { id: 'story', label: 'Our Story', href: 'our-story.html' },
  { id: 'contact', label: 'Contact', href: 'contact.html' },
];

export const footerPolicies = [
  { id: 'faq', label: 'FAQ' },
  { id: 'shipping', label: 'Shipping' },
  { id: 'returns', label: 'Returns/Refunds' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'terms', label: 'Terms' },
];

export const seoKeywords = 'DIY kits for kids, DIY craft kits, creative activities for kids, creative workshops, kids workshops Bangalore, art workshops Bangalore';

// ---------------------------------------------------------------- HOME
export const home = {
  headline: 'A brighter, kinder, more creative world begins with small hands.',
  subline: 'Thinkadoo creates DIY kits, cultural toys and hands-on experiences for curious minds.',
  tabs: [
    {
      id: 'shop', label: 'SHOP', eyebrow: 'Products',
      text: 'DIY kits, cultural toys, activity kits, gifts.',
      cta: 'Shop products', href: 'shop.html',
    },
    {
      id: 'workshop', label: 'WORKSHOP', eyebrow: 'Experiences',
      text: 'Bookable in-person experiences, with a matching kit wherever relevant.',
      cta: 'Book a workshop', href: 'workshops.html',
    },
  ],
  hands: 'Because sometimes the best way to understand the world is to get your hands dirty.',
};

// ---------------------------------------------------------------- SHOP
export const shop = {
  title: 'Let’s make something.',
  cards: [
    { id: 'mela', name: 'Mela Truck', href: 'mela-truck.html' },
    { id: 'paint', name: 'Paint My God', href: 'paint-my-god.html' },
  ],
};

// ---------------------------------------------------------------- MELA TRUCK
export const mela = {
  kicker: 'THE GREAT INDIAN MELA TRUCK',
  title: 'BUILD A MELA. MAKE A STORY.',
  story: {
    lead: 'There is something magical about a mela.',
    list: ['The bright colours.', 'The little stalls.', 'The games.', 'The noise.', 'The food.', 'The people.'],
    close: 'A whole little world appears, and for a few hours, anything can happen.',
    withBefore: 'With ', withBold: 'Mela Truck', withAfter: ', children get to build that world themselves.',
    steps: ['Put it together.', 'Paint it.', 'Decorate it.', 'Then make up the stories.'],
    questions: ['Who is visiting the mela?', 'What\'s happening at the stalls?', 'Where is the truck going next?'],
    single: 'There is no single way to play.',
    punch: 'You build the mela. You make the story.',
  },
  inside: {
    title: 'WHAT\'S INSIDE THE BOX?',
    sub: '7 ACTIVITY ENVELOPES. 7 WAYS TO PLAY.',
    intro: 'Each envelope contains everything you need for a different mela activity.',
    outro: 'Load up your imagination and take your mela wherever you go.',
    envelopes: [
      { n: 1, id: 'ferris', name: 'FERRIS WHEEL', verbs: 'BUILD · ASSEMBLE · PLAY',
        lines: ['Put together your very own working Ferris wheel using the wooden MDF pieces.', 'Build it. Paint it. Get it turning.'],
        contains: 'Pre-cut MDF boards, Passport sticker.' },
      { n: 2, id: 'shooter', name: 'SHOOTING GAME', verbs: 'AIM · PULL · HIT',
        lines: ['Build your own mini shooting game using paper cores, a rubber-band launcher and a simple trigger mechanism.', 'Set up the paper-cup targets.', 'Take aim.', 'Can you knock them all down?'],
        contains: '2 paper cores, trigger, 2 rubber bands, end-cap sticker, 6 cups, Passport sticker.' },
      { n: 3, id: 'leopard', name: 'LEOPARD HAND PUPPET', verbs: 'SNIP · FOLD · GLUE',
        lines: ['Turn a sheet of beautiful prints into a playful leopard hand puppet.', 'Bring your leopard to life and make up your own stories.'],
        contains: 'Leopard print, Passport sticker.' },
      { n: 4, id: 'kaleido', name: 'KALEIDOSCOPE', verbs: 'MAKE · LOOK · DISCOVER',
        lines: ['Build your own kaleidoscope with mirrors, a paper core and a transparent chamber filled with colourful beads and gems.', 'Turn it.', 'Look through it.', 'Watch the world transform.'],
        contains: 'Paper core, 3 mirrors, 3 mirror stickers, Passport sticker.' },
      { n: 5, id: 'stitch', name: 'STITCH CRAFT', verbs: 'THREAD · WEAVE · CREATE',
        lines: ['Thread by thread, weave a little bunny onto a felt sheet.', 'Add its eyes and nose.', 'And watch a few simple threads become a character you made yourself.'],
        contains: 'Felt, yarn, needle, eyes-and-nose sticker, Passport sticker.' },
      { n: 6, id: 'candy', name: 'CANDY PAINTING', verbs: 'PAINT · DECORATE · IMAGINE',
        lines: ['Decorate your very own candy-bar-shaped gypsum pieces with the colours, glue and materials provided.', 'Make them sweet.', 'Make them strange.', 'Make them completely yours.'],
        contains: '3 gypsum lollipops, glitter, Thermocol case, base sticker, Passport sticker.' },
      { n: 7, id: 'truck', name: 'BUILD YOUR MELA TRUCK', verbs: 'BUILD · ROLL · GO',
        lines: ['The box itself becomes the final adventure.', 'Transform the packaging into your very own Mela Truck using the wheels, axles and drag-string mechanism inside.'],
        contains: 'Wheels, axle stick, thread, Passport sticker.' },
    ],
  },
  need: {
    title: 'EVERYTHING YOU NEED TO MAKE',
    intro: 'Along with the seven activity envelopes, you\'ll also find:',
    items: [
      { id: 'markers', name: 'ACRYLIC MARKERS', text: ['For colouring, decorating and bringing your creations to life.'] },
      { id: 'scissors', name: 'SCISSORS', text: ['For cutting and crafting.'] },
      { id: 'folder', name: 'BONE FOLDER', text: ['For making those crisp folds.'] },
      { id: 'glue', name: 'GLUE', text: ['For putting your creations together.'] },
      { id: 'passport', name: 'PASSPORT BOOK', text: ['Your very own Mela Passport.', 'Complete an activity, earn its sticker and collect them all.'] },
      { id: 'avatars', name: 'AVATAR STICKERS', text: ['Create your own little mela character and make the adventure yours.'] },
    ],
  },
  adventure: {
    title: 'SEVEN ACTIVITIES. ONE BIG ADVENTURE.',
    intro: 'Mela Truck is designed to take children through different kinds of making.',
    verbs: ['BUILD.', 'AIM.', 'FOLD.', 'DISCOVER.', 'STITCH.', 'PAINT.', 'PLAY.'],
    outro: ['Each activity is different.', 'Each one asks them to use their hands in a new way.'],
  },
  more: {
    title: 'MORE THAN A DIY TOY',
    intro: 'Mela Truck is designed to encourage:',
    items: [
      { name: 'CREATIVITY', text: 'Make choices. Experiment. Decorate. Invent.' },
      { name: 'IMAGINATIVE PLAY', text: 'Create characters, stories and adventures around your mela.' },
      { name: 'PROBLEM SOLVING', text: 'Build mechanisms, follow instructions and figure things out.' },
      { name: 'FINE MOTOR SKILLS', text: 'Cutting, folding, threading, painting and assembling all involve careful hands-on work.' },
      { name: 'CURIOSITY', text: 'Each activity introduces a different material, process or little piece of discovery.' },
    ],
    closeLead: 'And perhaps most importantly:',
    close: 'It gives children something to do, not just something to watch.',
  },
  perfect: {
    title: 'PERFECT FOR',
    items: ['Creative activities for kids', 'Screen-free play', 'DIY activity kits', 'Imaginative play', 'Cultural toys', 'Children\'s creative gifts', 'Weekend activities', 'Family bonding', 'Craft activities for kids', 'Storytelling and pretend play', 'School and community activities'],
  },
  details: {
    title: 'PRODUCT DETAILS',
    rows: [
      ['Product', 'Mela Truck — DIY Creative Activity & Cultural Toy Kit'],
      ['Activities', '7 hands-on activities'],
      ['Recommended age', '5+ years'],
      ['Time to complete', 'Multiple sessions'],
      ['What\'s included', '7 activity envelopes, Ferris wheel DIY kit, shooting game, leopard hand puppet, kaleidoscope, stitch craft, candy painting, Mela Truck conversion kit, acrylic markers, scissors, bone folder, glue, passport book and avatar stickers.'],
      ['Price', PENDING_PRICE],
      ['Made by', 'Thinkadoo'],
    ],
  },
  ready: {
    title: 'READY TO BUILD YOUR MELA?',
    lines: ['Don\'t just visit a mela.', 'Make one.'],
    steps: ['Build it.', 'Play it.', 'Take it with you.'],
    product: 'MELA TRUCK',
    price: PENDING_PRICE,
  },
  share: {
    title: 'MADE SOMETHING AMAZING?',
    lines: ['We want to see what your mela looks like.', 'Share your creations with us:'],
    handle: '@THINKADOO',
    tags: ['#MelaTruck', '#MadeWithThinkadoo'],
    close: 'Every mela has a story. What\'s yours?',
  },
};

// ---------------------------------------------------------------- PAINT MY GOD
export const paint = {
  kicker: 'PAINT MY GOD',
  title: 'MAKE A GANESHA. MAKE A MEMORY.',
  story: {
    lines: ['Festivals often arrive at our doorstep.'],
    list: ['The flowers are ready.', 'The sweets are ready.', 'The idol is ready.'],
    question: 'But what if a child could make a little part of the celebration themselves?',
    withBefore: 'With ', withBold: 'Paint My God', withAfter: ', Ganesha becomes a canvas for little hands and big imaginations.',
    verbs: 'Paint. Decorate. Experiment.',
    discover: 'Discover the colours, symbols and stories woven into a festival we have celebrated for generations.',
    done: 'And when it\'s done, there is something more than a Ganesha sitting in front of you.',
    piece: 'There is a little piece of the festival that they made themselves.',
    quote: '“I made this.”',
  },
  inside: {
    title: 'WHAT\'S INSIDE THE BOX?',
    intro: 'Everything you need to create your own Ganesha.',
    items: [
      { id: 'ganesha', name: 'GANESHA IDOL', text: 'A ready-to-paint Ganesha made from child-safe gypsum, waiting for your imagination.' },
      { id: 'markers', name: 'ACRYLIC BRUSH MARKERS', text: '12 brush-tipped acrylic markers for a mess-free experience.' },
      { id: 'stickers', name: 'STICKERS', text: 'A sheet of 6 stickers that are part of the storytelling process.' },
      { id: 'gems', name: 'GEMS & EMBELLISHMENTS', text: '5 large gems + 5 small gems + 2 flower-shaped gems + 5 assorted gems + 2 googly eyes.' },
      { id: 'glue', name: 'GLUE', text: '22.5 g bottle for all your pasting.' },
      { id: 'mantap', name: 'REVERSIBLE MANTAP PACKAGING', text: 'Flip the packaging to transform it into a little mantap for your finished Ganesha.' },
      { id: 'comic', name: 'COMIC BOOK', text: 'A delightful comic book featuring Ganesha and his vahana, Mushak.' },
    ],
  },
  more: {
    title: 'MORE THAN A DIY CRAFT KIT',
    intro: 'Paint My God is designed to encourage:',
    items: [
      { name: 'CREATIVITY', text: 'Experiment with colours, patterns and ideas.' },
      { name: 'CONCENTRATION', text: 'Slow down and work on something with your hands.' },
      { name: 'FINE MOTOR SKILLS', text: 'Painting, sticking and decorating involve careful hand movements.' },
      { name: 'SELF-EXPRESSION', text: 'There is no single "correct" result.' },
      { name: 'CULTURAL CURIOSITY', text: 'A familiar festival becomes an opportunity to ask questions and discover stories. Most importantly, it creates an experience that children and adults can share.' },
    ],
  },
  perfect: {
    title: 'PERFECT FOR',
    items: ['Creative activities for kids', 'Screen-free family time', 'Festival activities', 'Ganesh Chaturthi activities', 'DIY craft projects', 'Children\'s art activities', 'Creative gifts', 'Family bonding', 'School and community activities'],
  },
  details: {
    title: 'PRODUCT DETAILS',
    rows: [
      ['Product', 'Paint My God — DIY Ganesha Painting Kit'],
      ['Activity', 'Painting & creative decoration'],
      ['Recommended age', '5+ years'],
      ['Time to complete', '3 hours'],
      ['What\'s included', 'Ganesha idol, acrylic markers, stickers, gems, glue, reversible mantap packaging and comic.'],
      ['Price', '₹1,199'],
      ['Made by', 'Thinkadoo'],
    ],
  },
  ready: {
    title: 'READY TO MAKE YOUR GANESHA?',
    lines: ['Don\'t just bring home a Ganesha.', 'Make one.'],
    product: 'PAINT MY GOD',
    price: '₹1,199',
  },
  share: {
    title: 'MADE SOMETHING BEAUTIFUL?',
    lines: ['We want to see it.', 'Share your creation with us:'],
    handle: '@THINKADOO',
    tags: ['#PaintMyGod', '#MadeWithThinkadoo'],
    close: ['Your Ganesha doesn\'t have to look like anyone else\'s.', 'That\'s the point.'],
  },
};

// ---------------------------------------------------------------- WORKSHOPS
export const workshops = {
  title: 'Let’s make something together.',
  intro: [
    'Some things are more fun when you make them with other people.',
    'Thinkadoo workshops are hands-on creative experiences for curious minds.',
  ],
  verbs: ['Learn something new.', 'Make something beautiful.', 'Meet other makers.', 'Go home with something you made yourself.'],
  bookbinding: {
    name: 'BOOKBINDING',
    lines: ['Make your own handmade notebook. Learn the basics of bookbinding and create a notebook from scratch.', 'No previous experience required.'],
    facts: '3 HOURS · SMALL GROUP · BENGALURU',
    price: '₹999',
  },
  expect: {
    title: 'WHAT TO EXPECT',
    items: [
      { name: 'COME CURIOUS.', lines: ['You don\'t need to know how to draw.', 'You don\'t need to be "creative".', 'You don\'t need previous experience.', 'Just bring your curiosity.'] },
      { name: 'MAKE WITH YOUR HANDS.', lines: ['Everything you need is provided.', 'We teach you the process, then give you room to make it your own.'] },
      { name: 'MEET OTHER MAKERS.', lines: ['Thinkadoo workshops are deliberately small.', 'Because creativity is more interesting when people talk, exchange ideas and see how differently everyone approaches the same thing.'] },
      { name: 'TAKE SOMETHING HOME.', lines: ['Every workshop ends with something you\'ve made.', 'And wherever possible, you can take a Thinkadoo kit home and continue making.'] },
    ],
  },
  loop: {
    title: 'LEARN → MAKE → TAKE HOME → MAKE AGAIN',
    steps: ['LEARN', 'MAKE', 'TAKE HOME', 'MAKE AGAIN'],
    line: 'The workshop is only the beginning.',
  },
  host: {
    title: 'WANT TO HOST A THINKADOO WORKSHOP?',
    lead: 'We collaborate with:',
    items: ['Schools', 'Apartment communities', 'Cafés', 'Bookstores', 'Cultural spaces', 'Companies', 'Festivals', 'Art communities'],
    close: 'Bring Thinkadoo to your space.',
  },
};

// ---------------------------------------------------------------- ABOUT + COMMUNITY
export const about = {
  title: 'ABOUT',
  open: ['Today you can access almost anything instantly.'],
  list: ['A picture.', 'A video.', 'A game.', 'An answer.'],
  but: 'But there are some things a screen cannot give you.',
  senses: ['The resistance of paper.', 'The smell of paint.', 'The satisfaction of fitting two pieces together.'],
  surprise: 'The surprise of discovering that your hands can make something you didn\'t know how to make five minutes ago.',
  bring: ['We want to bring more of that back.', 'Not by taking you away from the modern world.', 'But by giving you more ways to experience it.'],
  with: 'WITH YOUR HANDS.',
  founders: [
    'Thinkadoo is founded by Gayathri Jeaks and Girish Madhavan, designers and storytellers with backgrounds in animation, communication design, film and visual storytelling.',
    'Gayathri and Girish are graduates of IIT Bombay\'s postgraduate design programmes, with Gayathri specialising in Animation and Film Design and Girish in Communication Design.',
    'Our work has always been about communicating ideas through images, stories, objects and experiences.',
    'Thinkadoo brings that thinking into the world of children\'s creativity, DIY crafts, cultural toys and hands-on experiences.',
  ],
  belief: 'We believe a more creative generation can build a more thoughtful world.',
};

export const community = {
  title: 'COMMUNITY',
  head: 'THE THINKADOO COMMUNITY',
  sub: 'MAKING IS BETTER TOGETHER.',
  lines: ['We are building more than a shop.', 'We\'re building a community of people who like to make things.'],
  who: ['Kids.', 'Parents.', 'Artists.', 'Designers.', 'Teachers.', 'Makers.', 'Curious adults.'],
  welcome: 'Everyone is welcome.',
};

// ---------------------------------------------------------------- CONTACT
export const contact = {
  title: 'SAY HELLO.',
  lines: ['Have a question?', 'Want to collaborate?', 'Want to host a workshop?', 'Want to stock Thinkadoo?', 'Want to tell us about something interesting you made?'],
  close: 'We\'d love to hear from you.',
  routes: [
    { id: 'general', name: 'GENERAL', value: PENDING_EMAIL },
    { id: 'workshops', name: 'WORKSHOPS & COLLABORATIONS', value: PENDING_EMAIL },
    { id: 'retail', name: 'WHOLESALE & RETAIL', value: PENDING_EMAIL },
    { id: 'instagram', name: 'INSTAGRAM', value: '@THINKADOO' },
  ],
};

// Cart products known to the prototype. price: number in rupees, or null when unconfirmed.
export const products = {
  mela: { id: 'mela', name: 'Mela Truck', title: 'MELA TRUCK', price: null, href: 'mela-truck.html' },
  paint: { id: 'paint', name: 'Paint My God', title: 'PAINT MY GOD', price: 1199, href: 'paint-my-god.html' },
};

// Reel clips (the "video carousel of the products/workshop"): names are doc copy.
export const reel = [
  { id: 'mela', name: 'Mela Truck', line: 'BUILD A MELA. MAKE A STORY.', href: 'mela-truck.html' },
  { id: 'paint', name: 'Paint My God', line: 'MAKE A GANESHA. MAKE A MEMORY.', href: 'paint-my-god.html' },
  { id: 'bookbinding', name: 'BOOKBINDING', line: 'Make your own handmade notebook.', href: 'workshops.html' },
];
