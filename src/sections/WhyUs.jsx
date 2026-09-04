import { HandCoins, ShieldCheck, CalendarCheck, Sparkles } from 'lucide-react'
import { useInView, useParallax } from '../lib/motion.js'
import { SectionTitle, Eyebrow } from '../components/Bits.jsx'
import './why.css'

const REASONS = [
  {
    n: '01',
    icon: HandCoins,
    title: 'Upfront, Honest Pricing',
    body:
      'We walk through the cost before any tools come out, so the number on the invoice is the number we quoted.',
  },
  {
    n: '02',
    icon: ShieldCheck,
    title: 'Licensed And Insured Work',
    body:
      'Every job, from a single outlet to a full panel swap, meets the electrical code inspectors check for.',
  },
  {
    n: '03',
    icon: CalendarCheck,
    title: 'Scheduling You Can Count On',
    body:
      'We show up in the window we give you, and we call ahead if a job runs long.',
  },
  {
    n: '04',
    icon: Sparkles,
    title: 'Clean, Respectful Job Sites',
    body:
      'We put down floor protection before we start and haul away every offcut and packaging scrap when we are done.',
  },
]

/* Numeral Drift: the oversized numerals ride a slow parallax layer so they lag
   their own text by a few pixels. Desktop only — useParallax flattens itself
   below 900px and under reduced motion. */
function Reason({ n, icon: Icon, title, body, delay }) {
  const numRef = useParallax(0.06, { disableBelow: 900 })
  return (
    <li className="why-item" data-reveal="rise" style={{ '--reveal-delay': `${delay}ms` }}>
      <span className="why-n" ref={numRef} aria-hidden="true">{n}</span>
      <div className="why-body">
        <h3 className="why-title">
          <Icon className="lucide why-icon" aria-hidden="true" />
          {title}
        </h3>
        <p className="why-copy">{body}</p>
      </div>
      <i
        className="why-rule"
        data-reveal="draw"
        style={{ '--reveal-delay': `${delay + 160}ms` }}
        aria-hidden="true"
      />
    </li>
  )
}

export default function WhyUs() {
  const [ref, inView] = useInView({ threshold: 0.14, rootMargin: '0px 0px -12% 0px' })

  return (
    <section className="why section band-cream" id="why" aria-labelledby="why-title">
      <div className="why-shell" ref={ref} data-in={inView ? 'true' : 'false'}>
        <figure className="why-figure" data-reveal="settle">
          <img
            src="/images/explaining-panel.webp"
            alt="An electrician pointing out a breaker inside an open panel while explaining it to a homeowner."
            width="2000"
            height="1125"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="why-cap">
            Every quote starts with a look at what is actually in the panel.
          </figcaption>
        </figure>

        <div className="shell">
          <div className="why-main">
            <div className="s-head why-head">
              <Eyebrow className="eyebrow--ink">Why People Call Back</Eyebrow>
              <SectionTitle id="why-title">
                Four Things We Get Right <em>Every Time</em>
              </SectionTitle>
            </div>

            <ol className="why-list list-reset">
              {REASONS.map((r, i) => (
                <Reason key={r.n} {...r} delay={120 * i} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
