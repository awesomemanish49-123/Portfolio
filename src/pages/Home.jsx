import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import WordRotator from '../components/WordRotator.jsx'
import FeaturedPanels from '../components/FeaturedPanels.jsx'
import Mosaic from '../components/Mosaic.jsx'
import MockDashboard from '../components/MockDashboard.jsx'
import { ArrowUpRight } from '../components/Icons.jsx'
import { site, stats, experience, skills, tools, process } from '../data/site.js'
import { featuredProjects, projects } from '../data/projects.js'

export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="hero">
        <div className="shell">
          <div className="hero__top grid">
            <h1 className="hero__h1 col-1-6">
              UI/UX and product designer for enterprise systems people live
              in all day.
            </h1>
            <p className="hero__aside col-8-11">
              Product design, flows and design systems for HR, sales, warehouse
              and clinical teams.
            </p>
            <p className="hero__aside col-12-14">
              India.
              <br />
              Six years, three teams.
            </p>
          </div>

          <hr className="rule hero__rule" />
          <span className="mono hero__stamp">
            ©2019—2026 · 15 projects · 74 modules
          </span>

          <div className="grid">
            <p className="hero__statement">
              I design <span className="tag-inline">( enterprise )</span>{' '}
              products that people use for eight hours a day — payroll,
              dispatch, inventory, clinics — and make them{' '}
              <strong>calm, legible and usable</strong>.
            </p>
          </div>

          <div className="hero__actions">
            <Link to="/work" className="btn btn--dark">
              See the work
              <span className="btn__arrow">
                <ArrowUpRight size={15} />
              </span>
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Let&rsquo;s talk
            </Link>
            <span className="hero__availability">
              <span className="dot dot--signal" />
              {site.availability}
            </span>
          </div>

          <div className="hero__media-wrap grid">
            <div className="hero__media col-1-9">
              <MockDashboard />
            </div>
            <div className="hero__side col-10-14">
              <p className="mono">( Currently )</p>
              <p>
                Designing GuruPayroll HRMS at EHS25 HR India — 41 modules, five
                roles, web admin and a companion mobile app.
              </p>
              <p>
                Also design partner for Aarogya India: CRM, warehouse, hospital
                operations and the patient app.
              </p>
            </div>
          </div>

          <div className="stat-grid hero__stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
                <span className="stat-card__note">{stat.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WordRotator />

      {/* ---------------- Featured work ---------------- */}
      <FeaturedPanels projects={featuredProjects} />

      <Marquee />

      {/* ---------------- Capabilities ---------------- */}
      <section className="capabilities">
        <div className="shell">
          <div className="section-head">
            <div className="section-head__text">
              <span className="mono">( What I actually do )</span>
              <h2 className="h2">
                Complex operations,
                <br />
                made <em>legible</em>.
              </h2>
            </div>
            <Link to="/about" className="link">
              About the practice <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid">
            <span className="mono col-1-4">Not a hand-off designer.</span>
            <p className="capabilities__sub col-4-11">
              I map the workflow, argue for the simpler structure, design the
              states nobody asks for, and stay in the room until it ships.
            </p>
          </div>

          <div className="capabilities__cols">
            <div>
              <h4>Enterprise &amp; HR</h4>
              <p>
                GuruPayroll: 41 modules from vacancy to exit, plus five
                role-based dashboards reading from one data model.
              </p>
            </div>
            <div>
              <h4>CRM &amp; operations</h4>
              <p>
                Aarogya CRM, warehouse stock and B2B ledger — lead to delivered
                order, with the failures designed too.
              </p>
            </div>
            <div>
              <h4>Healthcare &amp; mobile</h4>
              <p>
                Clinic operations, patient and doctor apps, EMR and billing —
                designed to be used between appointments.
              </p>
            </div>
          </div>
        </div>

        <div className="wordmark capabilities__mark" aria-hidden="true">
          <span>Manish</span>
        </div>
      </section>

      {/* ---------------- One design language ---------------- */}
      <section className="trust">
        <div className="shell">
          <div className="trust__head">
            <div>
              <span className="mono">( One design language )</span>
              <h2 className="trust__title">
                Twelve products that should look like they belong together.
              </h2>
            </div>
            <span className="mono">GuruPayroll · Aarogya · Finoit</span>
          </div>

          <div className="trust__pills">
            {[
              'Research & flow maps',
              'Design systems',
              'Data-dense UI',
              'Mobile & responsive',
              'Developer handoff',
              'Brand & social',
            ].map((item) => (
              <span className="trust__pill" key={item}>
                <span>W/</span>
                {item}
              </span>
            ))}
          </div>

          <div className="trust__tools">
            {tools.map((tool) => (
              <span className="chip" key={tool}>
                {tool}
              </span>
            ))}
          </div>

          <div className="grid trust__skills">
            <ul className="skill-list col-1-7">
              {skills.slice(0, 5).map((skill) => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </li>
              ))}
            </ul>
            <ul className="skill-list col-8-14">
              {skills.slice(5).map((skill) => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Mosaic ---------------- */}
      <Mosaic projects={projects} />

      {/* ---------------- Experience ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="section-head__text">
              <span className="mono">( Experience )</span>
              <h2 className="h2">Where the six years went</h2>
            </div>
            <Link to="/about" className="link">
              Full profile <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="timeline">
            {experience.map((job) => (
              <Reveal className="timeline__row" key={job.company}>
                <span className="timeline__period">{job.period}</span>
                <div>
                  <div className="timeline__company">
                    <h3 className="h5">{job.company}</h3>
                    <span className="timeline__role">{job.role}</span>
                  </div>
                  <p
                    className="body-muted"
                    style={{ marginTop: 8, maxWidth: '62ch' }}
                  >
                    {job.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="section section--tight">
        <div className="shell">
          <div className="section-head">
            <div className="section-head__text">
              <span className="mono">( Process )</span>
              <h2 className="h3">How the work gets made</h2>
            </div>
          </div>

          <div className="process">
            {process.map((step, index) => (
              <div className="process__row" key={step.name}>
                <span className="process__num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="process__name">{step.name}</span>
                <span className="process__desc">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cta">
        <div className="shell">
          <div className="cta__inner">
            <div className="cta__portrait" aria-hidden="true">
              <span>MK</span>
              <i>↗</i>
            </div>
            <span className="mono">( Time to connect )</span>
            <h2 className="cta__title">
              Have a product that needs <em>clarity</em>?
            </h2>
            <div className="cta__actions">
              <a href={`mailto:${site.email}`} className="btn btn--dark">
                Email me
                <span className="btn__arrow">
                  <ArrowUpRight size={15} />
                </span>
              </a>
              <Link to="/contact" className="btn btn--ghost">
                Contact page
              </Link>
            </div>
            <p className="mono">
              {site.availability} · {site.location}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
