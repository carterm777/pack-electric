import { useRef } from 'react'
import { Phone, MessageSquare, Lock } from 'lucide-react'
import { useInView, prefersReducedMotion } from '../lib/motion.js'
import { SectionTitle } from '../components/Bits.jsx'
import { PHONE_DISPLAY, PHONE_TEL, PHONE_SMS } from '../lib/site.js'
import './cta.css'

/* Button Magnetic Hover — a few pixels at most, per the entry's premium note. */
function useMagnet(strength = 5) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const r = el.getBoundingClientRect()
    const dx = ((e.clientX - r.left) / r.width - 0.5) * strength * 2
    const dy = ((e.clientY - r.top) / r.height - 0.5) * strength
    el.style.setProperty('--mag-x', `${dx.toFixed(1)}px`)
    el.style.setProperty('--mag-y', `${dy.toFixed(1)}px`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mag-x', '0px')
    el.style.setProperty('--mag-y', '0px')
  }
  return { ref, onPointerMove: onMove, onPointerLeave: onLeave }
}

export default function FinalCta() {
  const [ref, inView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' })
  const magnet = useMagnet(5)

  return (
    <section className="cta band-warm grain" id="contact" aria-labelledby="cta-title">
      <div className="cta-bed" aria-hidden="true">
        <div className="cta-bed-img" data-ambient style={{ '--ambient-dur': '24s' }} />
      </div>

      <div className="shell cta-inner" ref={ref} data-in={inView ? 'true' : 'false'}>
        <SectionTitle id="cta-title" className="cta-title">
          Need An Electrician Who Shows Up When They Say They Will?
        </SectionTitle>

        <div className="cta-body" data-reveal="rise" style={{ '--reveal-delay': '160ms' }}>
          <p className="cta-copy">
            Call today for a free estimate on your wiring, panel, or lighting project — we&#39;re
            happy to talk through the job before you book anything.
          </p>

          <p className="cta-action">Call {PHONE_DISPLAY} or text us to get started.</p>

          <div className="cta-buttons">
            <a className="btn cta-call" href={PHONE_TEL} {...magnet}>
              <Phone className="lucide" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a className="btn btn--ghost cta-text" href={PHONE_SMS}>
              <MessageSquare className="lucide" aria-hidden="true" />
              Text Us Instead
            </a>
          </div>

          <p className="reassure cta-reassure">
            <Lock className="lucide" aria-hidden="true" />
            <span>
              Estimates are free and there is nothing to sign. Whatever you tell us stays
              between you and the crew.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
