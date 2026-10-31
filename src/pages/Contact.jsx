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
          <Reveal as="p" className="mono">
            ( Time to connect )
          </Reveal>

          <Reveal as="h1" className="contact__title" delay={40}>
            Let&rsquo;s talk about your <em>product</em>.
          </Reveal>

          <Reveal as="p" className="contact__note" delay={80}>
            Open to full-time product design roles and to freelance work on
            enterprise dashboards, design systems and healthcare products.
            Replies usually within a day.
          </Reveal>

          <Reveal className="contact__rows" delay={120}>
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
          </Reveal>

          <Reveal className="contact__card" delay={160}>
            <p>
              Currently designing at <strong>EHS25 HR India</strong> —
              GuruPayroll HRMS — and product work for{' '}
              <strong>Aarogya India</strong>.
            </p>
            <span className="mono">
              {site.availability} · {site.location}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
