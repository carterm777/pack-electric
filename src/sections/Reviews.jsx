import { useCountUp, useInView, useCursorGlow } from '../lib/motion.js'
import { SectionTitle, Eyebrow, Stars, GoogleG } from '../components/Bits.jsx'
import { REVIEWS } from '../lib/site.js'
import './reviews.css'

export default function Reviews() {
  const [countRef, rating] = useCountUp(4.9, { duration: 1500, decimals: 1 })
  const [aggRef, aggIn] = useInView({ threshold: 0.3 })
  const [gridRef, gridIn] = useInView({ threshold: 0.14, rootMargin: '0px 0px -10% 0px' })
  /* Cursor-Reactive Glow: used exactly once on the page, on its one dark panel. */
  const glowRef = useCursorGlow()

  return (
    <section className="rev section band-cream grain" id="reviews" aria-labelledby="rev-title">
      <div className="shell">
        <div className="rev-head">
          <Eyebrow className="eyebrow--ink">Straight From Google</Eyebrow>
          <SectionTitle id="rev-title">
            What Central Alberta Homeowners <em>Actually</em> Say
          </SectionTitle>
        </div>

        {/* Aggregate callout — Counting Numerals + the Rating Rule Sweep. */}
        <div className="rev-agg" ref={aggRef} data-in={aggIn ? 'true' : 'false'}>
          <div className="rev-agg-score">
            <span className="rev-agg-num" ref={countRef}>
              {rating.toFixed(1)}
            </span>
            <span className="rev-agg-of">out of 5</span>
          </div>

          <div className="rev-agg-body">
            <Stars sweep label="Rated 4.9 out of 5 stars" />
            <p className="rev-agg-count">
              Based on <strong>63 Google reviews</strong>
            </p>
            <div className="rev-agg-track" aria-hidden="true">
              <span className="rev-agg-fill" />
            </div>
          </div>

          <div className="rev-agg-brand">
            <GoogleG size={22} />
            <span>
              Google
              <br />
              Reviews
            </span>
          </div>
        </div>

        <ul className="rev-grid list-reset" ref={gridRef} data-in={gridIn ? 'true' : 'false'}>
          {REVIEWS.map((r, i) => (
            <li
              key={r.name}
              className={`rev-item${i === 0 ? ' rev-item--feature' : ''}`}
              data-reveal="rise"
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <article
                className={`rev-card${i === 0 ? ' rev-card--feature' : ''}`}
                ref={i === 0 ? glowRef : undefined}
                data-glow-surface={i === 0 ? '' : undefined}
              >
                <span className="rev-mark" aria-hidden="true">&ldquo;</span>
                <Stars />
                <p className="rev-quote">{r.quote}</p>
                <div className="rev-by">
                  <h3 className="rev-name">{r.name}</h3>
                  <span className="rev-src">
                    <GoogleG size={13} />
                    Posted on Google
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="rev-note">
          Placeholder reviews for this demo build. Pack Electric&#39;s real Google Business
          Profile reviews get swapped in before this page goes live.
        </p>
      </div>
    </section>
  )
}
