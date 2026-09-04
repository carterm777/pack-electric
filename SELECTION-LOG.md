# Selection log — Pack Electric

Working document for `section-style-repo.md`'s three-phase process. Filled in from
Step 0 onward; both finishing passes read from and write back to it.

---

## Step 0 — Page inventory

| # | Section | Type file used | Real imagery available |
|---|---|---|---|
| 1 | Header / Nav | navigation | none (wordmark is type) |
| 2 | Hero (+ photo-diagnosis widget) | hero + interactive | `home-hero.webp` |
| 3 | Google Reviews | social-proof | none — deliberate (see log) |
| 4 | Trust Badges Banner | credibility | `tex-steel.webp` (texture only) |
| 5 | Why Us | value-proposition | `explaining-panel.webp` |
| 6 | Core Services | services | 5 photos, one per service |
| 7 | Coverage / Service Area | location | `panorama-hills-hero.webp`, `vans-morning.webp` |
| 8 | Our Story | about-story | `about-crew.webp`, `winter-house.webp` |
| 9 | FAQ | faq | none — deliberate (see log) |
| 10 | Final CTA | calls-to-action | `flatlay-materials.webp` |
| 11 | Footer | footer | `tex-copper.webp` (texture only) |

**Page ambition level:** mixed — *a quiet page with two loud moments*, per DIRECTION.md.
The two loud moments are (1) the hero + photo-diagnosis intake form and (2) the Final CTA
band. Everything between them is restrained: hairlines, type scale, and one photograph
per idea.

**Tonal rhythm set at Step 0** (so section choices compound rather than clash):

header cream → HERO DEEP TEAL → reviews cream → trust teal band → why cream →
SERVICES DEEP TEAL → coverage teal-wash → story cream → faq paper →
FINAL CTA WARM OCHRE → footer deep teal

Deep teal (#1F5F5B and its darker steps) is the dominant field, not the cream —
this is the deliberate break from the cream/serif/terracotta default named in
`front-end-design.md` and flagged in DIRECTION.md. Rust (#C1592B) appears only as
small marks: the primary button, a hairline under an active form row, a numeral, a
single rule. Ochre (#D9A441) carries hairlines, stars, and the certificate frame.

**Type decision:** Fraunces is set with `font-optical-sizing: none` and an explicitly
pinned low `opsz` (14) plus `SOFT 0 / WONK 0`, with negative tracking on every display
size. That is the sturdier, lower-contrast cut of Fraunces — it kills the high-contrast
"AI default serif" silhouette the direction warned about. Karla carries all body,
utility, and label roles (uppercase + wide tracking for the utility role) so no third
family is loaded.

**Font substitutions:** none required. Fraunces and Karla are both on Google Fonts and
are used as named in the brief.

---

## Per-section decisions

### 1. Header / Navigation
- **Layout:** Centered Logo Split Nav *(layouts/navigation)*
- **Visual style:** Minimal Underline Link Treatment *(visual-styles/navigation)*, plus
  Textured Hairline Nav Divider for the rule beneath
- **Style family:** editorial + minimal-clean
- **Animation:** Underline Grow on Hover *(animations/navigation)*; Mega Menu Column
  Stagger Reveal on the Services dropdown; nav condenses on scroll
- **Element sequence:** header renders on load (no entrance — it is chrome, not content).
  Dropdown panel: panel enters as one unit (140ms), then its columns stagger 60ms apart.
  Per-link underline sweep 240ms ease-out-quart on hover/focus.
- **Rationale — layout:** Centered Logo Split Nav is the DIRECTION assignment and it fits:
  the brief's nav has 6 primary items, which splits 3/3 around a wordmark cleanly. Standard
  Horizontal Nav Bar was the realistic alternative and loses on "the brand wants a more
  distinctive first impression than the most common nav pattern provides."
- **Deviation logged:** the brief mandates a click-to-call button on the right, which a pure
  centered-logo split nav does not have. Resolved with a 3-column grid (`1fr auto 1fr`) so
  the wordmark stays optically centred while the call button sits at the far right of the
  right group. Brief wins over direction where they conflict.
- **Rationale — visual style:** Minimal Underline Link Treatment keeps the nav quiet so the
  hero can be the loud moment. Bold Color-Block Nav Bar was rejected: the teal is needed
  immediately below and a teal nav over a teal hero erases the header entirely.
- **Rationale — animation:** Underline Grow on Hover is the matching entry for that visual
  style and is the only nav motion the page can afford before the hero's load sequence.

### 2. Hero + photo-diagnosis widget
- **Layout:** Asymmetric Layered Hero *(layouts/hero)*
- **Visual style:** Editorial Typographic Overlap *(visual-styles/hero)*, with Gradient
  Scrim over the photo layer for legibility
- **Image technique:** Overlapping or Bleeding Image *(image-and-visual-richness)* — use 1
  of 2. `home-hero.webp` bleeds off the right edge of the shell and the intake form card
  overlaps it, so the photo is never a rectangle in a box.
- **Style family:** editorial + glass-depth (layout) / editorial (style)
- **Animation:** Staggered Load-In + Weighted Word Reveal on the H1 *(animations/hero)*;
  CTA Micro-Interaction on both buttons
- **Motion budget:** 5 stagger groups. Element sequence (all `load`-triggered, since a
  scroll trigger would never fire above the fold):
  1. eyebrow — clip reveal, 0ms
  2. H1 — Weighted Word Reveal, 120ms start, 62ms/word (once-per-page technique)
  3. subheadline — rise, 620ms
  4. value-badge row (all 4 as one group, then 70ms internal stagger) — rise, 760ms
  5. CTA pair + reassurance line as one unit — rise, 900ms
  6. intake-form card — depth settle, 300ms (early, so it is never the last thing to arrive
     above the fold)
- **Reduced motion:** WordReveal renders plain text; every `data-load` collapses to final
  state via `motion.css`'s reduced-motion block.
- **Rationale — layout:** Asymmetric Layered Hero is the DIRECTION assignment and is the
  only hero layout that can hold a 63-character headline, four badges, two CTAs *and* a
  full intake form above the fold. "Hero with Embedded Quote/Booking Form" was the close
  alternative; it loses because its Content-shape field wants "3-5 form fields on the
  other" side with a *short* headline, and this headline is not short.
- **Rationale — visual style:** Editorial Typographic Overlap's Avoid-when is "the headline
  copy is long." Mitigated deliberately: the overlap is between the *eyebrow rule* and the
  photo/card edge, not the headline body, so the long headline never crosses the image.
- **Signature element:** Card-Based Widget Container pushed editorial — the intake form
  reads as a mailed-in service form: a teal masthead with a form number, three numbered and
  ruled steps, writing-line inputs, a perforated bottom edge, and a stamped success state.

### 3. Google Reviews
- **Layout:** Testimonial Card Grid *(layouts/social-proof)*
- **Visual style:** Oversized Quote Mark Typography *(visual-styles/social-proof)*
- **Image technique:** Textured or Patterned Background, No Photo — deliberate. There are no
  real customer photos and inventing them for placeholder reviews would be the exact
  "AI-assembled" tell `IMAGES.md` warns about. The section gets a paper grain and an ochre
  double-rule instead.
- **Style family:** editorial
- **Animation:** Staggered Rise for the cards + Counting Numerals on the 4.9 aggregate
  *(animation-and-motion-richness)*, plus Star Rating Fill Animation on the aggregate stars
- **Motion budget:** 3 groups. Sequence: (1) section title clip-reveal → (2) aggregate panel
  as one unit, with the numeral counting 0→4.9 over 1500ms ease-out-expo and the stars
  sweeping in 70ms apart → (3) the five cards stagger 110ms apart in reading order.
  Threshold 0.18 / rootMargin `0px 0px -12% 0px`.
- **Site-specific technique #3 — Rating Rule Sweep:** a hairline beneath the aggregate
  numeral draws to 98% of its track (4.9/5) as the count-up runs, so the rule *is* the
  score. Reduced motion: rule renders at full length instantly.
- **Rationale — layout:** five reviews of 20–30 words each is exactly Testimonial Card
  Grid's "three to six testimonials displayed simultaneously"; its Avoid-when ("quotes are
  long") does not apply. Testimonial Carousel loses because a carousel hides four of the
  five reviews at any moment and this section was moved out of the hero precisely so it
  could show breadth.
- **Rationale — visual style:** Oversized Quote Mark's Avoid-when is "the layout shows many
  testimonials at once, where this treatment gets repetitive." Honoured by giving the
  oversized mark to the featured card only; the other four get a small ochre tick rule.

### 4. Trust Badges Banner
- **Layout:** Certification Badge Wall, one hairline-divided row *(layouts/credibility)*
- **Visual style:** Textured Certificate-Style Panel *(visual-styles/credibility)*
- **Image technique:** Background Pattern Behind Foreground Photo — adapted: `tex-steel.webp`
  at low opacity under a teal wash provides the certificate's substrate.
- **Style family:** textured-organic
- **Animation:** Badge Fade and Scale-In on Scroll *(animations/credibility)*
- **Motion budget:** 2 groups. Sequence: (1) section title + ochre double rule draw
  (Sequential Line Draw) → (2) four badges stagger 90ms apart, each badge's icon + label
  moving as one unit. Threshold 0.18.
- **Site-specific technique #4 — Divider Hairline Lift:** on hover/focus the vertical
  hairline to the badge's left grows from 40% to 100% height and the icon lifts 3px, so the
  row's shared rule system is what reacts, not the badge box. Reduced motion: colour change
  only.
- **Rationale:** four badges is exactly Certification Badge Wall's stated floor and its
  premium note ("give every badge equal size and consistent padding") is the brief's own
  requirement restated. Awards and Press Mention Bar was rejected outright — its Avoid-when
  is "no genuine mentions exist," which is the case here.

### 5. Why Us
- **Layout:** Numbered Reasons List *(layouts/value-proposition)*
- **Visual style:** Underline Accent Rule Treatment *(visual-styles/value-proposition)*
- **Image technique:** Grid-Breaking Oversized Image — `explaining-panel.webp` runs full
  column height beside the list and bleeds to the left gutter, so the section is not four
  paragraphs on a flat ground.
- **Style family:** editorial + minimal-clean
- **Animation:** Underline Draw Animation *(animations/value-proposition)*
- **Motion budget:** 3 groups. Sequence: (1) title clip-reveal → (2) image depth-settle →
  (3) four reasons stagger 120ms apart; within each, the numeral + heading + body rise as
  one unit and the accent rule draws immediately after (scaleX, 620ms ease-out-quart).
- **Site-specific technique #5 — Numeral Drift:** the oversized numerals sit on a separate
  parallax layer at 0.06 speed, so they lag their own text by a few pixels on scroll.
  Desktop ≥900px only; flattened on mobile and under reduced motion.
- **Rationale — layout:** the four reasons are ordered by what a homeowner asks about first
  (price → licensing → scheduling → site condition), so the numbering encodes real
  sequence rather than decorating — which is the test `front-end-design.md` sets for
  numbered markers. Icon + Blurb Grid was the alternative and loses because a 2×2 icon grid
  is the single most templated shape available for this content.
- **Rationale — visual style:** Underline Accent Rule is explicitly "for restrained,
  confident brands avoiding boxy grids" and shares the hairline vocabulary the intake form
  established.

### 6. Core Services
- **Layout:** Zig-Zag Alternating Service List *(layouts/services)*
- **Visual style:** Editorial Magazine-Style Service Spread *(visual-styles/services)*
- **Image technique:** Framed or Bordered Photo Insert — each service photo carries a thin
  ochre hairline frame offset from the image, matching the certificate vocabulary.
- **Style family:** editorial
- **Animation:** Staggered Grid Fade-In on Scroll, re-read as row-by-row *(animations/services)*
  + Image Zoom on Hover
- **Motion budget:** 2 groups per row (6 total across 5 rows + title). Sequence per row:
  image clip-reveals from the side it sits on → 140ms later the numeral + heading + body +
  link rise as one unit. Reading order follows the zig-zag (left-to-right, then
  right-to-left). Threshold 0.18 / rootMargin `0px 0px -12% 0px`.
- **Rationale — layout:** five services at 30–45 words each with one strong photo apiece is
  Zig-Zag's exact content shape ("3-6 services each needing 40-100 words plus a supporting
  image"). Service Card Grid loses because it flattens five services of genuinely different
  scope into equal tiles.
- **Rationale — visual style:** this is the section carrying the page's second big block of
  deep teal; Editorial Magazine-Style Spread's large type and asymmetric crops are what
  make a dark band read as art-directed rather than as a dark card grid.

### 7. Coverage / Service Area
- **Layout:** Service Area List or Coverage Zone Grid *(layouts/location)*
- **Visual style:** Editorial Photo-Led Location Block *(visual-styles/location)*
- **Image technique:** Overlapping or Bleeding Image — use 2 of 2. `panorama-hills-hero.webp`
  bleeds past the shell to the page edge and `vans-morning.webp` overlaps its lower corner
  as a smaller inset.
- **Style family:** industrial-utilitarian (layout) + editorial (style)
- **Animation:** Coverage Zone Highlight on Hover *(animations/location)*
- **Motion budget:** 3 groups. Sequence: (1) title clip-reveal → (2) photo pair depth-settle,
  inset 180ms after the main plate → (3) town rows stagger 80ms apart. Hover/focus on a town
  row fills its cell with a teal wash and draws its left rule in rust.
- **Rationale — layout:** the business covers six named towns and has no storefront, which is
  Coverage Zone Grid's exact Best-for and Map Embed's exact Avoid-when. A real map embed was
  also rejected because a third-party iframe on a demo build is a broken-request risk.
- **Rationale — visual style:** Editorial Photo-Led Location Block needs "a strong
  environmental photo" and `panorama-hills-hero` is the one shot in the library that reads
  as *a whole region*, which is what the copy is about.

### 8. Our Story
- **Layout:** Single-Column Long-Form Story *(layouts/about-story)*
- **Visual style:** Editorial Pull-Quote Typography *(visual-styles/about-story)*
- **Image technique:** Layered Photo Stack — `about-crew.webp` and `winter-house.webp` sit as
  an offset pair breaking out of the measure at the section's right edge.
- **Style family:** editorial
- **Animation:** Pull-Quote Fade and Scale-In *(animations/about-story)*
- **Motion budget:** 4 groups. Sequence: (1) title clip-reveal → (2) paragraphs 1–2 rise as
  one unit → (3) pull-quote as a standalone beat, after the prose has settled (scale
  1.02→1, 900ms) → (4) paragraphs 3–4 rise. Photo pair settles independently on its own
  observer so it is not tied to the prose rhythm.
- **Rationale — layout:** four paragraphs of continuous first-person prose is exactly
  Single-Column Long-Form's content shape. Chronological Timeline Narrative was rejected on
  its own Avoid-when — there are no dated milestones in the copy to mark.
- **Rationale — visual style:** the pull-quote is set in Fraunces at display scale with a
  rust hanging rule while the body is Karla, satisfying the entry's premium note that the
  quote must be "a genuinely different type treatment, not just larger."

### 9. FAQ
- **Layout:** Classic Accordion List *(layouts/faq)*
- **Visual style:** Minimal Line-Divided Accordion *(visual-styles/faq)*
- **Image technique:** none — deliberate. Five dense question/answer pairs is the case
  `image-and-visual-richness.md` names as genuinely text-appropriate, and this is the page's
  designed quiet beat immediately before the loud Final CTA.
- **Style family:** minimal-clean
- **Animation:** Accordion Expand and Collapse with Height Transition + Icon Rotate on Expand
  + Staggered Fade-In on Scroll *(animations/faq)*
- **Motion budget:** 2 groups. Sequence: (1) title clip-reveal → (2) five question rows
  stagger 90ms apart, question text + icon together. Click: grid-template-rows 0fr→1fr over
  420ms ease-out-quart, plus icon rotate 45° (plus → ×) over 200ms ease-in-out, both on the
  same click with no offset.
- **Rationale — layout:** five questions sits just under Classic Accordion's stated 6–12
  band; Conversational FAQ Feed (5–8, all expanded) was the genuine alternative and lost
  because the answers run 40–60 words each and five of them expanded is the "wall of text"
  its own Avoid-when describes.

### 10. Final CTA
- **Layout:** Full-Width CTA Banner *(layouts/calls-to-action)*
- **Visual style:** Textured Warm CTA Background *(visual-styles/calls-to-action)*
- **Image technique:** Duotone Background Wash Behind Photo — `flatlay-materials.webp` under
  an ochre-warm wash at low opacity, plus grain.
- **Style family:** textured-organic + warm-approachable
- **Animation:** Banner Background Slow Pan *(animations/calls-to-action)* + Button Magnetic
  Hover on the call button
- **Motion budget:** 2 groups + 1 ambient. Sequence: background pans continuously at 24s
  (Slow Ambient Drift timing band); (1) headline clip-reveal → (2) supporting sentence +
  both action buttons + reassurance line rise together as one band, 160ms later.
- **Rationale — layout:** Full-Width CTA Banner's Avoid-when is "the CTA needs to be combined
  with additional supporting content" — it does not; the copy is a headline, one sentence,
  and one action. Split CTA with Form was rejected because the page already has a far more
  ambitious form in the hero and a second one here would compete with the signature element.
- **Rationale — visual style:** this is the one place the warm half of the palette is allowed
  to take a whole band. It gives the page its second loud moment without spending the rust
  on anything larger than a button, which is the DIRECTION.md constraint.

### 11. Footer
- **Layout:** Mega Footer *(layouts/footer)*
- **Visual style:** Textured Footer Background *(visual-styles/footer)*
- **Image technique:** Textured or Patterned Background, No Photo — `tex-copper.webp` at very
  low opacity under the deep teal, warming the close without a literal photograph.
- **Style family:** textured-organic
- **Animation:** Link Column Staggered Fade-In on Scroll *(animations/footer)* + Underline
  Sweep on every link + Social Icon Hover
- **Motion budget:** 1 group. Four columns stagger left-to-right 100ms apart, each column's
  heading and its links moving as one unit.
- **Rationale:** four content columns with a 15-item service vocabulary behind them is Mega
  Footer's Best-for. Simple Single-Row was rejected on its Avoid-when — there is real
  navigation depth here.

---

## Site-specific motion techniques written for this build

Beyond the shared kit, five techniques are original to this page. Each is derived from a
real entry in `references/animation-and-motion-richness.md` and each has a reduced-motion
fallback written alongside it.

1. **Ruled-Line Ignition** (intake form) — from *Sequential Line Draw* + *Field Focus
   Highlight*. Each numbered step's hairline draws left-to-right as the card enters, 90ms
   apart; on focus the active row's rule re-draws in rust and its step numeral shifts from
   ink to rust. Reduced motion: rules render at full length, focus is a colour change only.
2. **Stamp Impression** (intake form success state) — from *Success State Confirmation
   Animation*. The RECEIVED stamp lands at scale 1.16 → 1 with a rotate settle and an
   ink-bleed opacity ramp over 520ms ease-out-quart. Reduced motion: stamp appears at final
   scale and rotation, no transition.
3. **Rating Rule Sweep** (reviews aggregate) — from *Counting Numerals* + *Sequential Line
   Draw*. The hairline under 4.9 draws to 98% of its track in lockstep with the count-up.
   Reduced motion: full-length rule, final numeral, no animation.
4. **Divider Hairline Lift** (trust banner) — from *Magnetic Lift*, moved off the card and
   onto the shared rule. Hover/focus grows the badge's left hairline from 40% to 100% and
   lifts the icon 3px over 260ms. Reduced motion: hairline colour change only.
5. **Numeral Drift** (Why Us) — from *Layered Parallax Drift*. Oversized numerals track at
   0.06 scroll speed against their static text. Desktop >=900px only; static otherwise.

---


## Finishing pass 1 — elevation sweep

Run after every section existed once. Each section's visual-styles, animations and
`image-and-visual-richness` entries were reopened and checked for a more distinctive
option that still respects that entry's own **Avoid when** field.

| Section | Outcome |
|---|---|
| Header | **Upgraded.** The nav divider was a plain 1px border; it is now a genuinely textured hairline (a fine repeating ochre dash via `border-image`), which is what *Textured Hairline Nav Divider* actually describes. |
| Hero | **Upgraded.** Added *Slow Ambient Drift* to the photo layer only — 28s loop, low amplitude. The hero was completely static once its load sequence finished, which is the gap that entry exists to fill. The entry's Avoid-when (foreground motion already running) is satisfied because the load-in is finite, not continuous. Also added a "on the road daily" town line pinned to the bottom of the copy column so it balances against the taller form card. |
| Photo-diagnosis widget | **Upgraded.** Clip Reveal added to the card masthead title so the signature element opens with the same gesture every other section title uses. |
| Google Reviews | **Upgraded.** Added *Cursor-Reactive Glow* to the featured review card — the only dark panel in a light section, and the page's single use of the technique, exactly the restraint that entry asks for. The featured card was also widened to span 4 of 6 columns so the first row closes cleanly instead of leaving a ragged column. |
| Trust Badges | **Upgraded, lightly.** Added the certificate's second hairline just inside each edge (inset box-shadow) and softened the steel plate so it reads as sheen rather than a smudge. Clip Reveal added to its title. Otherwise left alone: it is a thin band by design and more ambition here would compete with the hero directly above it. |
| Why Us | **Upgraded.** The oversized numerals were a flat rust tint; they are now outlined (`-webkit-text-stroke`), which keeps rust as a *line* rather than a field — the DIRECTION constraint — and reads far more art-directed. |
| Services | **Upgraded.** *Bordered Frame Draw* adopted: the offset ochre frame now wipes in 700ms after the image's own clip reveal rather than arriving with it. |
| Coverage | **Left as-is on ambition, adjusted on composition.** Already carries the page's second deliberate bleeding image. The main plate went from 4:5 to 1:1 and gained a caption so the column stopped ending 300px above the photo. |
| Our Story | **Upgraded.** *Story Section Sticky Scroll Progress* adopted: the photo pair now pins beside the prose instead of sitting in 600px of dead column. Logged as a deviation from the pure Single-Column Long-Form reading — the layout is unchanged, only the visual's behaviour. |
| FAQ | **Upgraded.** *Active Question Highlight Glow* adopted — the open row keeps a warm ochre ground while it is read, carried on a pseudo-element so it never fights the row's entrance transition. |
| Final CTA | **Left as-is.** Banner slow pan + magnetic button already at the right ambition; a warm gradient wash was added over the left third only so the headline is not competing with a photograph of breakers. |
| Footer | **Upgraded.** *Back-to-Top Button Scroll Reveal* adopted — the page runs to 9,800px on desktop, which is the case that entry is written for. Desktop only; the sticky call bar owns the bottom edge on mobile. |

## Finishing pass 2 — coherence sweep

- **Motion load.** Two continuous ambient layers now exist (hero photo drift, CTA
  background pan). They sit ~9,000px apart and neither is the focal motion of its
  section, so both stay. Cursor-Reactive Glow is used exactly once. Weighted Word
  Reveal is used exactly once. No section exceeds four stagger groups.
- **Walked back:** nothing. The one candidate was the hero ambient drift (Pass 1's most
  additive change); it survives because the hero is otherwise inert after ~1.3s and the
  drift is sub-pixel-per-second.
- **Style-family balance re-checked.** editorial: hero, reviews, why, services, coverage,
  story. textured-organic: trust, final CTA, footer. minimal-clean: navigation, FAQ.
  That matches the assigned primary family (editorial + textured-organic) without any
  family taking four consecutive sections.
- **Flatness check.** Only the FAQ is text-only, and that is the logged deliberate quiet
  beat before the loud CTA. It now carries a sticky aside, a warm active row and an ochre
  rule, so it is quiet by decision rather than by omission.
- **Consistency fixes found by the sweep, not by the fit check:**
  - The shared `.band-teal .reassure` rule was bleeding light-on-dark colour onto the
    intake form's microcopy, which sits on paper inside a teal section. Re-grounded.
  - The shared grain layer painted *under* the hero photo, leaving a visible vertical
    seam at the photo's left edge. Lifted above the photo; the hero art is now clipped so
    its ambient drift cannot spill past the scrim either.
  - Four section titles were clamped with a `ch` max-width set on the *wrapper* (measured
    in Karla body size) rather than on the title (measured in Fraunces display size),
    which broke them into four- and six-line stacks. Moved onto the titles.
  - `.pd-input:focus-visible { outline: none }` had killed the keyboard focus ring on the
    signature element's fields. Restored; a 90-stop tab sweep now finds a visible ring on
    every focusable element on the page.
  - Horizontal overflow at 768 and 1024 (a full-bleed figure that also carried a negative
    gutter margin, and the header's call button) — both fixed. All four breakpoints now
    report `scrollWidth === innerWidth`.

## Build note

`vite.config.js` needed one addition: the shared kit ships JSX inside
`src/lib/motion.js`, and esbuild loads a `.js` file with the plain-JS loader, so Rollup
could not parse it. A four-line `enforce: 'pre'` plugin runs that one directory through
esbuild's JSX loader. Nothing else in the config changed.
