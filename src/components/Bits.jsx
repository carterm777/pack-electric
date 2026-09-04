/* Small shared pieces. Nothing here owns spacing — only the section that uses
   a piece decides where it sits. */
import { Star } from 'lucide-react'
import { useInView } from '../lib/motion.js'

/* Section title with the Clip Reveal DIRECTION.md asks for on every one.
   The heading level is always passed in explicitly so the document outline is
   never accidental. */
export function SectionTitle({ as: Tag = 'h2', children, className = '', id, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -12% 0px' })
  return (
    <Tag id={id} ref={ref} className={`s-title ${className}`} data-in={inView ? 'true' : 'false'}>
      <span data-reveal="clip" style={{ '--reveal-delay': `${delay}ms`, display: 'block' }}>
        {children}
      </span>
    </Tag>
  )
}

export function Eyebrow({ children, className = '', ...rest }) {
  return (
    <p className={`eyebrow ${className}`} {...rest}>
      {children}
    </p>
  )
}

/* Five filled stars. `sweep` staggers them for the aggregate callout only. */
export function Stars({ sweep = false, label = 'Rated 5 out of 5 stars' }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className="lucide star"
          aria-hidden="true"
          style={sweep ? { '--reveal-delay': `${i * 70}ms` } : undefined}
        />
      ))}
    </span>
  )
}

/* Google's own mark, drawn rather than imported, so the reviews block reads
   unmistakably as Google without pulling a remote asset. */
export function GoogleG({ size = 16 }) {
  return (
    <svg
      className="google-g"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.3z"
      />
      <path
        fill="#34A853"
        d="M24 46c6 0 11-2 14.5-5.2l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.4v5.7C7.9 41 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.7 28.3c-.4-1.3-.7-2.7-.7-4.3s.2-2.9.7-4.3v-5.7H4.4A22 22 0 0 0 2 24c0 3.6.9 6.9 2.4 9.9l7.3-5.6z"
      />
      <path
        fill="#EA4335"
        d="M24 10.6c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4 30 2 24 2 15.4 2 7.9 7 4.4 14.2l7.3 5.7c1.7-5.2 6.6-9.3 12.3-9.3z"
      />
    </svg>
  )
}
