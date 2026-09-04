import { useEffect, useState } from 'react'
import { Camera, X, Phone, ArrowRight, Lock, Check } from 'lucide-react'
import { usePhotoDiagnosis } from '../lib/usePhotoDiagnosis.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './photo-diagnosis.css'

/* The page's signature element: an intake form that reads like a service form
   filled in at the truck — a ruled masthead with a form number, three numbered
   steps each closed by a hairline, writing-line inputs, a perforated foot, and
   a stamped receipt for the success state.

   Two techniques written for this build live here:
     · Ruled-Line Ignition — each step rule draws left-to-right on load, 90ms
       apart, and re-draws in rust when that step takes focus.
     · Stamp Impression — the RECEIVED stamp lands with a scale and rotate
       settle plus an ink-bleed opacity ramp.
   Both collapse to their final state under prefers-reduced-motion. */
export default function PhotoDiagnosis() {
  const pd = usePhotoDiagnosis()
  const [lit, setLit] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setLit(true), 80)
    return () => clearTimeout(t)
  }, [])

  const step = (n) => ({
    className: 'pd-step',
    'data-active': active === n ? 'true' : 'false',
  })

  return (
    <div className="pd" data-in={lit ? 'true' : 'false'}>
      <div className="pd-mast">
        <div className="pd-mast-text">
          <p className="pd-mast-kicker">Photo Diagnosis</p>
          <h2 className="pd-mast-title" data-reveal="clip" style={{ '--reveal-delay': '90ms' }}>
            Show Us The Problem
          </h2>
        </div>
        <span className="pd-mast-no" aria-hidden="true">
          Form
          <br />
          PE&#8209;01
        </span>
      </div>

      {pd.status === 'done' ? (
        <div className="pd-done" role="status" aria-live="polite">
          <span className="pd-stamp" aria-hidden="true">
            <span className="pd-stamp-top">Received</span>
            <span className="pd-stamp-rule" />
            <span className="pd-stamp-bottom">Pack Electric</span>
          </span>
          <h3 className="pd-done-title">Got It — Thanks</h3>
          <p className="pd-done-body">
            Your photo and note are on our list. One of us will call you back to talk through
            what you&#39;re looking at and what it takes to fix it. No charge for the look.
          </p>
          <dl className="pd-done-meta">
            <div>
              <dt>Reference</dt>
              <dd>PE&#8209;01&#8209;4482</dd>
            </div>
            <div>
              <dt>Logged</dt>
              <dd>Just now</dd>
            </div>
          </dl>
          <div className="pd-done-actions">
            <a className="btn btn--wide" href={PHONE_TEL}>
              <Phone className="lucide" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <button type="button" className="pd-reset" onClick={pd.reset}>
              Send another photo
            </button>
          </div>
        </div>
      ) : (
        <form className="pd-form" onSubmit={pd.submit} noValidate>
          {/* 01 — the photo */}
          <div {...step(1)}>
            <span className="pd-step-n" aria-hidden="true">01</span>
            <div className="pd-step-body">
              <span className="pd-label" id="pd-photo-label">
                Photo of the problem (optional)
              </span>

              {pd.preview ? (
                <div className="pd-thumb">
                  <img src={pd.preview} alt="The photo you selected, ready to send." />
                  <div className="pd-thumb-meta">
                    <span className="pd-thumb-name">{pd.file?.name}</span>
                    <span className="pd-thumb-ok">
                      <Check className="lucide" aria-hidden="true" />
                      Attached
                    </span>
                  </div>
                  <button
                    type="button"
                    className="pd-thumb-x"
                    onClick={pd.clearPhoto}
                    aria-label="Remove the attached photo"
                  >
                    <X className="lucide" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="pd-drop"
                  data-dragging={pd.dragging ? 'true' : 'false'}
                  onClick={pd.openPicker}
                  onFocus={() => setActive(1)}
                  onBlur={() => setActive(null)}
                  aria-describedby="pd-photo-label"
                  {...pd.dropProps}
                >
                  <Camera className="lucide pd-drop-icon" aria-hidden="true" />
                  <span className="pd-drop-text">
                    <span className="pd-drop-lead">Take a photo or drag one here</span>
                    <span className="pd-drop-sub">JPG, PNG or HEIC &middot; 10MB max</span>
                  </span>
                </button>
              )}

              <input
                ref={pd.inputRef}
                type="file"
                accept={pd.accepted}
                className="sr-only"
                onChange={pd.onFileInput}
                tabIndex={-1}
                aria-hidden="true"
              />
              {pd.errors.file && <p className="pd-error">{pd.errors.file}</p>}
            </div>
            <i className="pd-rule" data-reveal="draw" style={{ '--reveal-delay': '160ms' }} />
          </div>

          {/* 02 — what is going on */}
          <div {...step(2)}>
            <span className="pd-step-n" aria-hidden="true">02</span>
            <div className="pd-step-body">
              <label className="pd-label" htmlFor="pd-desc">
                What&#39;s it doing?
              </label>
              <textarea
                id="pd-desc"
                className="pd-input pd-textarea"
                rows={2}
                placeholder="Breaker keeps tripping when the dryer runs..."
                value={pd.fields.description}
                onChange={pd.setField('description')}
                onFocus={() => setActive(2)}
                onBlur={() => setActive(null)}
                aria-invalid={pd.errors.description ? 'true' : undefined}
              />
              {pd.errors.description && <p className="pd-error">{pd.errors.description}</p>}
            </div>
            <i className="pd-rule" data-reveal="draw" style={{ '--reveal-delay': '250ms' }} />
          </div>

          {/* 03 — who we call back */}
          <div {...step(3)}>
            <span className="pd-step-n" aria-hidden="true">03</span>
            <div className="pd-step-body pd-step-body--pair">
              <div className="pd-field">
                <label className="pd-label" htmlFor="pd-name">Your name</label>
                <input
                  id="pd-name"
                  className="pd-input"
                  type="text"
                  autoComplete="name"
                  placeholder="First and last"
                  value={pd.fields.name}
                  onChange={pd.setField('name')}
                  onFocus={() => setActive(3)}
                  onBlur={() => setActive(null)}
                  aria-invalid={pd.errors.name ? 'true' : undefined}
                />
                {pd.errors.name && <p className="pd-error">{pd.errors.name}</p>}
              </div>
              <div className="pd-field">
                <label className="pd-label" htmlFor="pd-phone">Phone</label>
                <input
                  id="pd-phone"
                  className="pd-input"
                  type="tel"
                  autoComplete="tel"
                  placeholder="403-000-0000"
                  value={pd.fields.phone}
                  onChange={pd.setField('phone')}
                  onFocus={() => setActive(3)}
                  onBlur={() => setActive(null)}
                  aria-invalid={pd.errors.phone ? 'true' : undefined}
                />
                {pd.errors.phone && <p className="pd-error">{pd.errors.phone}</p>}
              </div>
            </div>
            <i className="pd-rule" data-reveal="draw" style={{ '--reveal-delay': '340ms' }} />
          </div>

          <div className="pd-foot">
            <button type="submit" className="btn btn--wide pd-submit" data-sending={pd.status === 'sending'}>
              <span>{pd.status === 'sending' ? 'Sending your photo' : 'Send It Over'}</span>
              <ArrowRight className="lucide" aria-hidden="true" />
            </button>
            <p className="reassure pd-reassure">
              <Lock className="lucide" aria-hidden="true" />
              <span>
                Costs nothing and books you into nothing. Your photo and number stay with
                the crew.
              </span>
            </p>
          </div>
        </form>
      )}

      <div className="pd-perf" aria-hidden="true" />
    </div>
  )
}
