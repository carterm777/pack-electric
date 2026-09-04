import { ClipboardList, ThumbsUp, ShieldCheck, MapPin, Phone, ArrowRight } from 'lucide-react'
import { WordReveal } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import './hero.css'

const BADGES = [
  { icon: ClipboardList, label: 'Free Estimates' },
  { icon: ThumbsUp, label: 'Satisfaction Guaranteed' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: MapPin, label: 'Locally Owned & Operated' },
]

export default function Hero() {
  return (
    <section className="hero band-teal grain on-dark" id="top">
      <div className="hero-art">
        <img
          src="/images/home-hero.webp"
          alt="A Pack Electric service van parked at the curb of a Central Alberta bungalow with its rear doors open on a stocked interior."
          width="2000"
          height="1125"
          fetchpriority="high"
          decoding="async"
        data-ambient
        style={{ '--ambient-dur': '28s' }}
        />
      </div>

      <div className="shell shell--wide hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow" data-load style={{ '--reveal-delay': '60ms' }}>
            Homes &amp; Small Commercial
          </p>

          <h1 className="hero-h1">
            <WordReveal
              text="Trusted Residential Electricians Serving Red Deer & Central Alberta"
              step={52}
              start={110}
            />
          </h1>

          <p className="hero-sub" data-load style={{ '--reveal-delay': '620ms' }}>
            Experienced electricians delivering safe, code-compliant wiring and panel work for
            homes and businesses across Central Alberta.
          </p>

          <ul className="hero-badges list-reset" data-load style={{ '--reveal-delay': '760ms' }}>
            {BADGES.map(({ icon: Icon, label }, i) => (
              <li key={label} className="hero-badge" style={{ '--i': i }}>
                <Icon className="lucide" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="hero-cta" data-load style={{ '--reveal-delay': '900ms' }}>
            <a className="btn hero-call" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn--ghost-light hero-secondary" href="#services">
              See Our Services
              <ArrowRight className="lucide" aria-hidden="true" />
            </a>
          </div>

          <p className="hero-foot" data-load style={{ '--reveal-delay': '1040ms' }}>
            <span className="meta-label hero-foot-label">On the road daily</span>
            <span className="hero-foot-towns">
              Red Deer &middot; Sylvan Lake &middot; Blackfalds &middot; Lacombe &middot;
              Innisfail &middot; Penhold
            </span>
          </p>
        </div>

        <div className="hero-form" data-load style={{ '--reveal-delay': '300ms' }}>
          <PhotoDiagnosis />
        </div>
      </div>
    </section>
  )
}
