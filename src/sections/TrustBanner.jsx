import { Shield, Home, Award, CheckCircle2 } from 'lucide-react'
import { useInView } from '../lib/motion.js'
import './trust.css'

/* Exactly the four badges the brief names, each with its own meaning-matched
   Lucide icon at one shared size and stroke weight. */
const BADGES = [
  { icon: Shield, title: 'Fully Licensed & Insured', note: 'Coverage on every job' },
  { icon: Home, title: 'Community-Based, Locally Run', note: 'Central Alberta crew' },
  { icon: Award, title: 'Years Of Hands-On Experience', note: 'Panels, wiring, repairs' },
  { icon: CheckCircle2, title: '100% Satisfaction Guarantee', note: 'We come back if it is not right' },
]

export default function TrustBanner() {
  const [ref, inView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' })

  return (
    <section className="trust band-teal grain on-dark" aria-labelledby="trust-title">
      <div className="shell shell--wide trust-inner" ref={ref} data-in={inView ? 'true' : 'false'}>
        <div className="trust-head">
          <span className="trust-rule" data-reveal="draw" aria-hidden="true" />
          <h2 className="trust-title" id="trust-title" data-reveal="clip">
            What Backs Up The Work
          </h2>
          <span
            className="trust-rule"
            data-reveal="draw"
            style={{ '--reveal-delay': '90ms' }}
            aria-hidden="true"
          />
        </div>

        <ul className="trust-row list-reset">
          {BADGES.map(({ icon: Icon, title, note }, i) => (
            <li
              key={title}
              className="trust-badge"
              data-reveal="rise"
              style={{ '--reveal-delay': `${180 + i * 90}ms` }}
            >
              <span className="trust-hair" aria-hidden="true" />
              <Icon className="lucide trust-icon" aria-hidden="true" />
              <div className="trust-text">
                <h3 className="trust-badge-title">{title}</h3>
                <span className="trust-note">{note}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
