import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { ArrowUpRight } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__note">
            <span className="mono">( Available for new work )</span>
            <p>
              Enterprise SaaS, HRMS, CRM and healthcare product design — from
              flow map to developer-ready handoff.
            </p>
          </div>

          <a className="footer__mail" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={22} />
          </a>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/work" className="footer__link">
            Work
          </Link>
          <Link to="/about" className="footer__link">
            About
          </Link>
          <Link to="/contact" className="footer__link">
            Let&rsquo;s talk
          </Link>
        </nav>

        <div className="footer__socials">
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <span className="mono">{site.roleLong}</span>
        </div>

        <div className="footer__meta">
          <span>
            ©2019—{new Date().getFullYear()} {site.name}
          </span>
          <span>{site.location}</span>
          <span>Designed &amp; built with care</span>
        </div>
      </div>
    </footer>
  )
}
