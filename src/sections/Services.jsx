import { Phone, ArrowUpRight } from 'lucide-react'
import { useInView } from '../lib/motion.js'
import { SectionTitle, Eyebrow } from '../components/Bits.jsx'
import { SERVICES, PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './services.css'

function ServiceRow({ s, flip }) {
  const [ref, inView] = useInView({ threshold: 0.18, rootMargin: '0px 0px -12% 0px' })
  return (
    <li
      className="svc-row"
      id={s.id}
      data-flip={flip ? 'true' : 'false'}
      ref={ref}
      data-in={inView ? 'true' : 'false'}
    >
      <figure className="svc-plate">
        <span
          className="svc-frame"
          data-reveal="wipe"
          style={{ '--reveal-delay': '700ms' }}
          aria-hidden="true"
        />
        <span className="svc-crop" data-reveal="clip">
          <img
            src={s.img}
            alt={s.alt}
            width="2000"
            height="1125"
            loading="lazy"
            decoding="async"
          />
        </span>
      </figure>

      <div className="svc-text" data-reveal="rise" style={{ '--reveal-delay': '140ms' }}>
        <span className="svc-n" aria-hidden="true">{s.n}</span>
        <h3 className="svc-title">{s.title}</h3>
        <p className="svc-copy">{s.body}</p>
        <a className="svc-link sweep" href={PHONE_TEL}>
          Ask us about this
          <ArrowUpRight className="lucide" aria-hidden="true" />
        </a>
      </div>
    </li>
  )
}

export default function Services() {
  return (
    <section className="svc section band-teal grain on-dark" id="services" aria-labelledby="svc-title">
      <div className="shell">
        <div className="svc-head">
          <div className="s-head">
            <Eyebrow>Core Services</Eyebrow>
            <SectionTitle id="svc-title">
              The Work That Fills <em>Most Of Our Week</em>
            </SectionTitle>
          </div>
          <p className="lede svc-lede">
            Panels, wiring, lighting, repairs and chargers. If it is on a breaker, it is
            probably on this list — and if it is not, call and ask.
          </p>
        </div>

        <ol className="svc-list list-reset">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.id} s={s} flip={i % 2 === 1} />
          ))}
        </ol>

        <div className="svc-foot">
          <p className="svc-foot-copy">
            Not sure which one you need? Send a photo, or just call and describe it.
          </p>
          <a className="btn svc-foot-btn" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
