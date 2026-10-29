import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <p className="eyebrow eyebrow--invert" style={{ marginBottom: 20 }}>
              Available for new work
            </p>
            <h2 className="footer__title">
              Let&rsquo;s make something <em>clear</em>.
            </h2>
          </div>

          <div className="footer__contact">
            <a className="footer__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p style={{ color: 'var(--on-ink-muted)', fontSize: '.875rem' }}>
              {site.location} · {site.phone}
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. Designed and built with care.
          </span>
          <div className="footer__links">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
