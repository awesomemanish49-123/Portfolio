import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'

const rows = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phone, href: site.phoneHref },
  { label: 'LinkedIn', value: 'manish-kumar-52b490194', href: site.linkedin },
]

export default function Contact() {
  return (
    <section className="contact">
      <div className="shell">
        <div className="contact__inner">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 22 }}>
              Contact
            </p>
            <h1 className="contact__title">
              Let&rsquo;s talk about your <em>product</em>.
            </h1>
            <p className="contact__note">
              Open to full-time product design roles and to freelance work on
              enterprise dashboards, design systems and healthcare products.
              Replies usually within a day.
            </p>
            <p
              className="mono"
              style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 9 }}
            >
              <span className="dot" /> {site.availability} · {site.location}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="contact__rows">
              {rows.map((row) => (
                <a
                  key={row.label}
                  className="contact__row"
                  href={row.href}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                  rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="contact__row-label">{row.label}</span>
                  <span className="contact__row-value">{row.value}</span>
                </a>
              ))}
            </div>

            <div
              style={{
                marginTop: 40,
                padding: '22px 24px',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-md)',
                background: 'var(--paper-2)',
              }}
            >
              <p className="mono" style={{ marginBottom: 8 }}>
                Currently
              </p>
              <p style={{ fontSize: '.9375rem', lineHeight: 1.6 }}>
                Designing at <strong>EHS25 HR India</strong> — GuruPayroll HRMS,
                and product work for <strong>Aarogya India</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
