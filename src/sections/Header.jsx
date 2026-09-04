import { useEffect, useId, useRef, useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react'
import { useScrollY, useMediaQuery } from '../lib/motion.js'
import {
  PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_HREF, CITY, NAV_SERVICES, NAV_AREAS,
} from '../lib/site.js'
import './header.css'

/* Dropdown that opens on hover for pointer users and on click/keyboard for
   everyone else. aria-expanded/aria-controls are real, not decorative. */
function NavDropdown({ label, href, items, columns = 1, wide = false }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onDocDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', onDocDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDocDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      className="hdr-drop"
      ref={wrapRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => { if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false) }}
    >
      <button
        type="button"
        className="hdr-link hdr-drop-btn"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sweep">{label}</span>
        <ChevronDown className="lucide hdr-caret" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        className={`hdr-panel${wide ? ' hdr-panel--wide' : ''}`}
        data-open={open ? 'true' : 'false'}
        hidden={!open}
      >
        <div className="hdr-panel-inner" style={{ '--cols': columns }}>
          <a className="hdr-panel-all" href={href}>
            All {label}
          </a>
          <ul className="hdr-panel-list list-reset">
            {items.map((it, i) => (
              <li key={it.label ?? it} style={{ '--i': i }}>
                <a href={it.href ?? href} className="sweep" onClick={() => setOpen(false)}>
                  {it.label ?? it}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const y = useScrollY()
  const compact = y > 40
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <header className="hdr" data-compact={compact ? 'true' : 'false'}>
      <div className="hdr-sub">
        <div className="shell shell--wide hdr-sub-inner">
          <a className="hdr-sub-item" href={PHONE_TEL}>
            <Phone className="lucide" aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a className="hdr-sub-item" href={EMAIL_HREF}>
            <Mail className="lucide" aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
          <span className="hdr-sub-item hdr-sub-item--plain">
            <MapPin className="lucide" aria-hidden="true" />
            <span>{CITY}</span>
          </span>
        </div>
      </div>

      <div className="hdr-bar">
        <div className="shell shell--wide hdr-bar-inner">
          <nav className="hdr-nav hdr-nav--left" aria-label="Primary">
            <a className="hdr-link" href="#top"><span className="sweep">Home</span></a>
            <a className="hdr-link" href="#story"><span className="sweep">About</span></a>
            <NavDropdown label="Services" href="#services" items={NAV_SERVICES} columns={2} wide />
          </nav>

          <a className="hdr-mark" href="#top" aria-label="Pack Electric — back to top">
            <span className="hdr-mark-name">Pack Electric</span>
            <span className="hdr-mark-sub">Red Deer &amp; Central Alberta</span>
          </a>

          <div className="hdr-right">
            <nav className="hdr-nav hdr-nav--right" aria-label="Secondary">
              <NavDropdown label="Service Areas" href="#coverage" items={NAV_AREAS} />
              <a className="hdr-link" href="#faq"><span className="sweep">FAQ</span></a>
              <a className="hdr-link" href="#footer"><span className="sweep">Blog</span></a>
              <a className="hdr-link" href="#contact"><span className="sweep">Contact</span></a>
            </nav>
            <a className="btn hdr-call" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              <span className="hdr-call-full">{PHONE_DISPLAY}</span>
              <span className="hdr-call-short">Call</span>
            </a>
          </div>
        </div>

        {/* Mobile: no hamburger. A quiet anchor rail at rest that gives way to
            the call button as soon as the page starts moving. */}
        {!isDesktop && (
          <div className="hdr-rail" aria-hidden={compact ? 'true' : 'false'}>
            <div className="hdr-rail-track">
              <a href="#reviews">Reviews</a>
              <a href="#why">Why Us</a>
              <a href="#services">Services</a>
              <a href="#coverage">Service Areas</a>
              <a href="#story">About</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
