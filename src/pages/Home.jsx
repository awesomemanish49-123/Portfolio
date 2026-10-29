import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import MockDashboard from '../components/MockDashboard.jsx'
import { ArrowRight } from '../components/Icons.jsx'
import { site, stats, experience, skills, tools, process } from '../data/site.js'
import { featuredProjects } from '../data/projects.js'

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="shell">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="p" className="eyebrow">
                UI/UX Designer · Enterprise &amp; healthcare products
              </Reveal>

              <Reveal as="h1" className="hero__title" delay={60}>
                Manish <em>Kumar</em>
              </Reveal>

              <Reveal as="p" className="hero__sub" delay={120}>
                {site.intro}
              </Reveal>

              <Reveal className="hero__actions" delay={180}>
                <Link to="/work" className="btn btn--dark">
                  View selected work
                  <span className="btn__arrow">
                    <ArrowRight size={15} />
                  </span>
                </Link>
                <Link to="/about" className="btn btn--ghost">
                  About me
                </Link>
              </Reveal>

              <Reveal className="hero__meta" delay={240}>
                <span>
                  <span className="dot" /> {site.availability}
                </span>
                <span>{site.years} years experience</span>
                <span>{site.location}</span>
              </Reveal>
            </div>

            <Reveal className="hero__visual" delay={180}>
              <MockDashboard />
              <div className="hero__badge">
                <strong>74+</strong>
                <span>Modules shipped</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ---------------- Selected work ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">Selected work</p>
              <h2 className="h2">
                Complex operations, made <em className="serif" style={{ fontStyle: 'italic' }}>legible</em>.
              </h2>
            </div>
            <Link to="/work" className="link">
              All 15 projects <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="featured">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 60}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Stats ---------------- */}
      <section style={{ background: 'var(--ink)' }}>
        <div className="shell shell--wide">
          <div className="stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat__value" style={{ color: 'var(--on-ink)' }}>
                  {stat.value}
                </span>
                <span className="stat__label">{stat.label}</span>
                <span
                  className="mono"
                  style={{ color: 'var(--on-ink-muted)', opacity: 0.75 }}
                >
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Capabilities ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="about-grid" style={{ borderTop: 0, paddingTop: 0 }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                Capabilities
              </p>
              <h2 className="h2" style={{ marginBottom: 20 }}>
                What I actually <em style={{ fontStyle: 'italic' }}>do</em>
              </h2>
              <p className="lead">
                I am not a hand-off designer. I map the workflow, argue for the
                simpler structure, design the states nobody asks for, and stay in
                the room until it ships.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 7,
                  marginTop: 26,
                }}
              >
                {tools.map((tool) => (
                  <span className="chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section style={{ background: 'var(--ink)', color: 'var(--on-ink)' }}>
        <div className="shell" style={{ paddingBlock: 'clamp(56px, 8vw, 100px)' }}>
          <Reveal style={{ marginBottom: 36, maxWidth: '52ch' }}>
            <p className="eyebrow eyebrow--invert" style={{ marginBottom: 16 }}>
              Process
            </p>
            <h2 className="h2" style={{ color: 'var(--on-ink)' }}>
              How the work gets <em style={{ fontStyle: 'italic' }}>made</em>
            </h2>
          </Reveal>
        </div>
        <div className="process">
          {process.map((step, i) => (
            <div className="process__step" key={step.name}>
              <span className="process__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="process__name">{step.name}</span>
              <span className="process__desc">{step.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Experience ---------------- */}
      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <div className="section-head__text">
              <p className="eyebrow">Experience</p>
              <h2 className="h2">
                Six years, three <em style={{ fontStyle: 'italic' }}>teams</em>
              </h2>
            </div>
            <Link to="/about" className="link">
              Full profile <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="timeline">
            {experience.map((job) => (
              <Reveal className="timeline__row" key={job.company}>
                <span className="timeline__period">{job.period}</span>
                <div>
                  <div className="timeline__company">
                    <h3 className="h3">{job.company}</h3>
                    <span className="timeline__role">{job.role}</span>
                  </div>
                  <p
                    className="body-muted"
                    style={{ marginTop: 10, maxWidth: '62ch' }}
                  >
                    {job.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cta">
        <div className="cta__glow" aria-hidden="true" />
        <div className="shell">
          <Reveal className="cta__inner">
            <p className="eyebrow eyebrow--invert">Next step</p>
            <h2 className="cta__title">
              Have a product that needs <em>clarity</em>?
            </h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={`mailto:${site.email}`}
                className="btn btn--light"
              >
                Email me
                <span className="btn__arrow">
                  <ArrowRight size={15} />
                </span>
              </a>
              <Link
                to="/contact"
                className="btn"
                style={{
                  color: 'var(--on-ink)',
                  borderColor: 'var(--line-invert)',
                }}
              >
                Contact page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
