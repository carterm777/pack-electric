import { ArrowUp } from 'lucide-react'
import { useScrollY, prefersReducedMotion } from '../lib/motion.js'
import './back-to-top.css'

/* Back-to-Top Button Scroll Reveal (animations/footer). The page runs past
   9,000px on desktop, which is the case that entry is written for. Hidden below
   1024px, where the sticky call bar already owns the bottom edge. */
export default function BackToTop() {
  const y = useScrollY()

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className="btt"
      data-show={y > 1400 ? 'true' : 'false'}
      onClick={toTop}
      aria-label="Back to the top of the page"
      tabIndex={y > 1400 ? 0 : -1}
    >
      <ArrowUp className="lucide" aria-hidden="true" />
    </button>
  )
}
