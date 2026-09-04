import { useInView } from '../lib/motion.js'
import { SectionTitle, Eyebrow } from '../components/Bits.jsx'
import './story.css'

export default function Story() {
  const [ref, inView] = useInView({ threshold: 0.12, rootMargin: '0px 0px -12% 0px' })
  const [figRef, figIn] = useInView({ threshold: 0.2, rootMargin: '0px 0px -10% 0px' })

  return (
    <section className="story section band-cream grain" id="story" aria-labelledby="story-title">
      <div className="shell story-shell">
        <div className="story-col" ref={ref} data-in={inView ? 'true' : 'false'}>
          <div className="s-head story-head">
            <Eyebrow className="eyebrow--ink">Our Story</Eyebrow>
            <SectionTitle id="story-title">
              We Started This Because Of <em>The Same Complaint</em>
            </SectionTitle>
          </div>

          <div className="story-prose" data-reveal="rise" style={{ '--reveal-delay': '120ms' }}>
            <p>
              We started this company because too many Central Alberta homeowners had the same
              story: an electrician who quoted one number and billed another, or a job that got
              scheduled and then quietly pushed back three times. That&#39;s the part of the
              trade we wanted no part of.
            </p>
            <p>
              So we built the business around the parts that matter most to the person paying
              the bill. A quote that holds. A crew that shows up when it says it will. Work
              that passes inspection the first time because it was done right the first time,
              not patched together to get out the door faster.
            </p>
          </div>

          <blockquote
            className="story-quote"
            data-reveal="settle"
            style={{ '--reveal-delay': '340ms' }}
          >
            <p>Small jobs and big jobs get the same attention: figure out what&#39;s wrong before touching a single wire.</p>
          </blockquote>

          <div className="story-prose" data-reveal="rise" style={{ '--reveal-delay': '460ms' }}>
            <p>
              Most calls start the same way — a breaker that keeps tripping, a panel older than
              the house&#39;s second owner, an outlet that just went dead one afternoon. Small
              jobs and big jobs get the same attention: figure out what&#39;s wrong before
              touching a single wire. We keep the truck stocked for the common repairs, so a
              lot of calls get solved in one visit instead of two.
            </p>
            <p>
              Central Alberta winters are hard on electrical systems in ways a lot of
              homeowners don&#39;t think about until something fails on the coldest morning of
              the year. We&#39;ve seen enough panels give out in January to know the small
              warning signs are worth catching early, on our schedule, not yours.
            </p>
          </div>
        </div>

        <div className="story-stack" ref={figRef} data-in={figIn ? "true" : "false"}>
          <div className="story-stack-inner">
          <figure className="story-plate story-plate--crew" data-reveal="settle">
            <img
              src="/images/about-crew.webp"
              alt="Five Pack Electric crew members lined up in front of two service vans inside the shop."
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
            <figcaption>The crew, most mornings</figcaption>
          </figure>
          <figure
            className="story-plate story-plate--winter"
            data-reveal="settle"
            style={{ '--reveal-delay': '200ms' }}
          >
            <img
              src="/images/winter-house.webp"
              alt="A single-storey Alberta home in deep snow at cold blue dusk with its porch light on."
              width="2000"
              height="1125"
              loading="lazy"
              decoding="async"
            />
          </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
