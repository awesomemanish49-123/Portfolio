import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { projects } from '../data/projects.js'

const links = [
  { to: '/work', label: 'Work', count: projects.length },
  { to: '/about', label: 'About' },
  { to: '/contact', label: "Let's talk" },
]

const drawerLinks = [{ to: '/', label: 'Home' }, ...links]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const drawerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on navigation. If focus was inside the drawer, hand it back to the
  // toggle first — a focused link inside a closed drawer is both a keyboard
  // trap and an aria-hidden violation.
  useEffect(() => {
    setOpen(false)
    if (drawerRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus({ preventScroll: true })
    }
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  // While open: move focus into the drawer and allow Escape to close it.
  useEffect(() => {
    if (!open) return

    drawerRef.current?.querySelector('a, button')?.focus({ preventScroll: true })

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus({ preventScroll: true })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <header className={`header ${scrolled ? 'is-compact' : ''}`}>
        <Link to="/" className="brand" aria-label={`${site.name} — home`}>
          <span className="brand__top">Design partner — India</span>
          <span className="brand__name">{site.name}</span>
          <span className="brand__meta">UI/UX · Enterprise systems</span>
          <span className="brand__mark" aria-hidden="true">
            MK
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {link.label}
              {link.count ? (
                <span className="nav__count">({link.count})</span>
              ) : null}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button
            ref={toggleRef}
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        id="site-drawer"
        ref={drawerRef}
        className={`drawer ${open ? 'is-open' : ''}`}
        inert={!open}
        aria-hidden={!open}
      >
        <nav className="drawer__list" aria-label="Mobile">
          {drawerLinks.map((link, index) => (
            <Link key={link.to} to={link.to} className="drawer__link">
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="drawer__footer">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}
