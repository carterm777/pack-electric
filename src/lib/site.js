/* Single source of truth for the business facts and the copy blocks that are
   reused in more than one place (nav, footer, CTAs). Everything here is
   verbatim from PROMPT.txt. */

export const PHONE_DISPLAY = '403-336-9332'
export const PHONE_TEL = 'tel:+14033369332'
export const PHONE_SMS = 'sms:+14033369332'
export const EMAIL = 'packelectric@gmail.com'
export const EMAIL_HREF = 'mailto:packelectric@gmail.com'
export const CITY = 'Red Deer, AB, Canada'

export const NAV_SERVICES = [
  { label: 'Panel & Service Upgrades', href: '#svc-panel' },
  { label: 'Home Rewiring', href: '#svc-rewiring' },
  { label: 'Lighting Installation & Design', href: '#svc-lighting' },
  { label: 'Electrical Troubleshooting & Repairs', href: '#svc-troubleshooting' },
  { label: 'EV Charger Installation', href: '#svc-ev' },
  { label: 'Outlet & Switch Installation', href: '#services' },
  { label: 'Ceiling Fan Installation', href: '#services' },
  { label: 'Surge Protection', href: '#services' },
  { label: 'Generator Panel Installation', href: '#services' },
  { label: 'Smoke & CO Detector Installation', href: '#services' },
  { label: 'Hot Tub & Appliance Wiring', href: '#services' },
  { label: 'Knob-and-Tube Rewiring', href: '#services' },
  { label: 'Small Commercial Electrical', href: '#services' },
  { label: 'Tenant Improvement Wiring', href: '#services' },
  { label: 'Electrical Safety Inspections', href: '#services' },
]

export const NAV_AREAS = [
  'Red Deer',
  'Sylvan Lake',
  'Blackfalds',
  'Lacombe',
  'Innisfail',
  'Penhold',
  'Bowden',
  'Eckville',
]

export const SERVICES = [
  {
    id: 'svc-panel',
    n: '01',
    title: 'Panel & Service Upgrades',
    body:
      'We replace outdated fuse panels and undersized services with a system sized for how your home or building uses power today.',
    img: '/images/panel-upgrade-hero.webp',
    alt: 'Gloved hands testing the busbars of a modern breaker panel with a screwdriver probe.',
  },
  {
    id: 'svc-rewiring',
    n: '02',
    title: 'Home Rewiring & Wiring Repairs',
    body:
      "From a single room to a full-house rewire, we trace down the problem first so you're not paying to replace wiring that's still doing its job.",
    img: '/images/rewiring-hero.webp',
    alt: 'Stud-framed interior mid-renovation with new electrical cable run overhead between the joists.',
  },
  {
    id: 'svc-lighting',
    n: '03',
    title: 'Lighting Installation',
    body:
      'Pot lights, fixture swaps, and outdoor lighting, wired cleanly and finished properly the first time.',
    img: '/images/lighting-hero.webp',
    alt: 'Modern kitchen at dusk lit by warm under-cabinet strips and recessed pot lights.',
  },
  {
    id: 'svc-troubleshooting',
    n: '04',
    title: 'Electrical Troubleshooting & Repairs',
    body:
      'Tripped breakers, dead outlets, and flickering lights all have a real cause. We find it instead of guessing.',
    img: '/images/troubleshooting-hero.webp',
    alt: 'Electrician kneeling at a baseboard outlet taking a reading with a multimeter, flashlight on the floor beside him.',
  },
  {
    id: 'svc-ev',
    n: '05',
    title: 'EV Charger Installation',
    body:
      'We check what your panel can handle before we recommend a charger, then install it where it makes sense for your garage or driveway.',
    img: '/images/ev-charger-hero.webp',
    alt: 'Wall-mounted EV charger and disconnect box in a clean garage with the nose of a car in frame.',
  },
]

export const REVIEWS = [
  {
    name: 'Jason M.',
    quote:
      'Called about a breaker that kept tripping every time we ran the dryer. They found the issue in twenty minutes and had it fixed before supper.',
  },
  {
    name: 'Karen D.',
    quote:
      "We were quoted a fair price for our panel upgrade and that's exactly what we paid. No surprises on the invoice.",
  },
  {
    name: 'Trevor L.',
    quote:
      'Explained why our old fuse panel needed replacing before we asked. Made the whole thing easy to understand.',
  },
  {
    name: 'Priya S.',
    quote:
      'Booked us in for the EV charger install within the week and walked us through where it would sit in the garage.',
  },
  {
    name: 'Wade F.',
    quote:
      'Showed up when they said they would and cleaned up after themselves. That put them ahead of the last two electricians we tried.',
  },
]

export const FAQS = [
  {
    q: 'How Do I Know If My Breaker Panel Needs To Be Replaced?',
    a: "If breakers trip often, your panel still uses fuses, or you're planning a major renovation or EV charger, it's worth having a licensed electrician take a look. A quick inspection tells you whether you need a full panel upgrade or just a repair, and we'll always give you the honest answer either way.",
  },
  {
    q: 'Do You Offer Free Estimates?',
    a: "Yes. We'll come take a look, walk you through what the job involves, and give you a clear number before any work starts, with no obligation to book.",
  },
  {
    q: 'Can You Install An EV Charger In My Garage?',
    a: "In most cases, yes. We check your panel's capacity first to confirm it can handle the extra load, then recommend the right charger and location for your garage or driveway.",
  },
  {
    q: 'Why Do My Lights Flicker When A Large Appliance Turns On?',
    a: "This usually points to a loose connection, an overloaded circuit, or wiring that's due for an upgrade. It's worth having it checked before it turns into a bigger repair.",
  },
  {
    q: 'Do You Work On Both Homes And Small Businesses?',
    a: 'Yes. We handle residential wiring, panel upgrades, and lighting, along with smaller commercial electrical work for shops and offices across Central Alberta.',
  },
]
