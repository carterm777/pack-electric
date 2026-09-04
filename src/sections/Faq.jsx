import { useId } from 'react'
import { Plus, Phone } from 'lucide-react'
import { useAccordion, useInView } from '../lib/motion.js'
import { SectionTitle, Eyebrow } from '../components/Bits.jsx'
import { FAQS, PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './faq.css'

export default function Faq() {
  const { toggle, isOpen } = useAccordion(0)
  const [ref, inView] = useInView({ threshold: 0.14, rootMargin: '0px 0px -12% 0px' })
  const uid = useId()

  return (
    <section className="faq section band-paper" id="faq" aria-labelledby="faq-title">
      <div className="shell faq-shell" ref={ref} data-in={inView ? 'true' : 'false'}>
        <div className="faq-aside">
          <div className="s-head">
            <Eyebrow className="eyebrow--ink">Common Questions</Eyebrow>
            <SectionTitle id="faq-title">
              The Things People Ask <em>Before They Book</em>
            </SectionTitle>
          </div>
          <p className="faq-aside-copy">
            Not on the list? Call and ask. We would rather answer it on the phone than have you
            guess.
          </p>
          <a className="btn btn--ghost faq-call" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <ul className="faq-list list-reset">
          {FAQS.map((f, i) => {
            const open = isOpen(i)
            const btnId = `${uid}-q${i}`
            const panelId = `${uid}-a${i}`
            return (
              <li
                key={f.q}
                className="faq-item"
                data-open={open ? 'true' : 'false'}
                data-reveal="rise"
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <h3 className="faq-q">
                  <button
                    type="button"
                    id={btnId}
                    className="faq-trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-q-text">{f.q}</span>
                    <Plus className="lucide faq-mark" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  aria-hidden={!open}
                >
                  <div className="faq-panel-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
