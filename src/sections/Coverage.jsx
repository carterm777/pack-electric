import { Truck, Phone } from 'lucide-react'
import { useInView } from '../lib/motion.js'
import { SectionTitle, Eyebrow } from '../components/Bits.jsx'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './coverage.css'

const TOWNS = [
  { name: 'Red Deer', note: 'Home base' },
  { name: 'Sylvan Lake', note: '25 min west' },
  { name: 'Blackfalds', note: '15 min north' },
  { name: 'Lacombe', note: '25 min north' },
  { name: 'Innisfail', note: '25 min south' },
  { name: 'Penhold', note: '15 min south' },
]

export default function Coverage() {
  const [ref, inView] = useInView({ threshold: 0.14, rootMargin: '0px 0px -12% 0px' })

  return (
    <section className="cov section band-wash" id="coverage" aria-labelledby="cov-title">
      <div className="shell cov-shell" ref={ref} data-in={inView ? 'true' : 'false'}>
        <div className="cov-copy">
          <div className="s-head">
            <Eyebrow className="eyebrow--ink">Where We Work</Eyebrow>
            <SectionTitle id="cov-title">
              Red Deer And The Towns <em>Around It</em>
            </SectionTitle>
          </div>
          <p className="lede cov-lede">
            Most days, our trucks are somewhere between Red Deer and the smaller communities
            around it. We serve Red Deer, Sylvan Lake, Blackfalds, Lacombe, Innisfail, and
            Penhold, with panel work, rewiring, lighting, and repair calls across all of them.
          </p>

          <ul className="cov-grid list-reset">
            {TOWNS.map((t, i) => (
              <li
                key={t.name}
                className="cov-cell"
                data-reveal="rise"
                style={{ '--reveal-delay': `${240 + i * 80}ms` }}
              >
                <span className="cov-cell-rule" aria-hidden="true" />
                <h3 className="cov-town">{t.name}</h3>
                <span className="cov-note">{t.note}</span>
              </li>
            ))}
          </ul>

          <p className="cov-extra">
            <Truck className="lucide" aria-hidden="true" />
            <span>
              We get out to Bowden and Eckville too — call and we will tell you straight
              whether we can get a truck to you this week.
            </span>
          </p>

          <a className="btn btn--teal cov-btn" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <div className="cov-plates">
          <figure className="cov-plate cov-plate--main" data-reveal="settle">
            <img
              src="/images/panorama-hills-hero.webp"
              alt="Elevated view across Central Alberta rooftops toward the horizon in late golden light."
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Central Alberta, end to end</figcaption>
          </figure>
          <figure
            className="cov-plate cov-plate--inset"
            data-reveal="settle"
            style={{ '--reveal-delay': '180ms' }}
          >
            <img
              src="/images/vans-morning.webp"
              alt="Two white service vans idling on a snowy street at sunrise while the crew loads up."
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
