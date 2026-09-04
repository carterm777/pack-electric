import { Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useInView } from '../lib/motion.js'
import {
  PHONE_DISPLAY, PHONE_TEL, PHONE_SMS, EMAIL, EMAIL_HREF, CITY,
} from '../lib/site.js'
import './footer.css'

const SERVICES = [
  ['Panel & Service Upgrades', '#svc-panel'],
  ['Home Rewiring & Repairs', '#svc-rewiring'],
  ['Lighting Installation', '#svc-lighting'],
  ['Electrical Troubleshooting', '#svc-troubleshooting'],
  ['EV Charger Installation', '#svc-ev'],
]

const LINKS = [
  ['Home', '#top'],
  ['About', '#story'],
  ['Services', '#services'],
  ['Service Areas', '#coverage'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

  return (
    <footer className="ftr band-teal grain on-dark" id="footer">
      <div className="shell shell--wide ftr-inner" ref={ref} data-in={inView ? 'true' : 'false'}>
        <div className="ftr-col ftr-col--brand" data-reveal="rise">
          <p className="ftr-mark">Pack Electric</p>
          <p className="ftr-mission">
            We&#39;re a Central Alberta electrical company serving Red Deer and the surrounding
            communities with honest pricing and dependable scheduling. Call us for anything
            from a single repair to a full panel upgrade.
          </p>
          <ul className="ftr-social list-reset" aria-label="Pack Electric on social media">
            <li>
              <a href="#footer" aria-label="Pack Electric on Facebook">
                <Facebook className="lucide" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#footer" aria-label="Pack Electric on Instagram">
                <Instagram className="lucide" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#footer" aria-label="Pack Electric on LinkedIn">
                <Linkedin className="lucide" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="ftr-col" data-reveal="rise" style={{ '--reveal-delay': '100ms' }}>
          <h3 className="ftr-h">Our Services</h3>
          <ul className="ftr-list list-reset">
            {SERVICES.map(([label, href]) => (
              <li key={label}>
                <a className="sweep" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr-col" data-reveal="rise" style={{ '--reveal-delay': '200ms' }}>
          <h3 className="ftr-h">Quick Links</h3>
          <ul className="ftr-list list-reset">
            {LINKS.map(([label, href]) => (
              <li key={label}>
                <a className="sweep" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr-col" data-reveal="rise" style={{ '--reveal-delay': '300ms' }}>
          <h3 className="ftr-h">Pack Electric</h3>
          <ul className="ftr-contact list-reset">
            <li>
              <MapPin className="lucide" aria-hidden="true" />
              <span>{CITY}</span>
            </li>
            <li>
              <Phone className="lucide" aria-hidden="true" />
              <a className="sweep" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <MessageSquare className="lucide" aria-hidden="true" />
              <a className="sweep" href={PHONE_SMS}>Text {PHONE_DISPLAY}</a>
            </li>
            <li>
              <Mail className="lucide" aria-hidden="true" />
              <a className="sweep ftr-email" href={EMAIL_HREF}>{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell shell--wide ftr-base">
        <p>&copy; {new Date().getFullYear()} Pack Electric. Red Deer &amp; Central Alberta.</p>
        <p className="ftr-note">
          Demo site. Address and reviews are placeholders pending confirmation.
        </p>
      </div>
    </footer>
  )
}
