import { Phone } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './sticky.css'

/* Mobile sticky call-only bar. It stays out of the way until the hero — which
   already carries a call button — has scrolled past, so it never eats into the
   above-the-fold budget. */
export default function StickyCall() {
  const y = useScrollY()
  const isMobile = useMediaQuery('(max-width: 1023px)')
  if (!isMobile) return null

  return (
    <div className="stky" data-show={y > 560 ? 'true' : 'false'}>
      <a className="btn btn--wide stky-btn" href={PHONE_TEL}>
        <Phone className="lucide" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
      <p className="stky-note">Free estimates. No obligation.</p>
    </div>
  )
}
