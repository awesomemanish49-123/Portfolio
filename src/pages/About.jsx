import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { ArrowUpRight } from '../components/Icons.jsx'
import { site, education, experience, skills, tools } from '../data/site.js'

export default function About() {
  return (
    <>
      <section className="shell">
        <div className="page-head">
          <Reveal as="p" className="mono">
            ( About )
          </Reveal>
          <Reveal as="h1" className="page-head__title" delay={40}>
            Six years of <em>shipping</em>
          </Reveal>
        </div>

        <div className="about-hero">
          <Reveal className="about-copy">
            <p className="statement">{site.introShort}</p>
            <p className="body-muted">
              I started as a graphic design intern in July 2019 and moved into
              product design because I preferred the harder problem: not how a
              screen looks, but what the person using it is trying to get done
              at 11am on a Tuesday.
            </p>
            <p className="body-muted">
              Most of my work is enterprise software with real constraints —
              five roles, dozens of modules, permissions, approvals and edge
              cases. A clean dashboard is easy; a payroll system that three
              departments trust is not.
            </p>
            <div className="cta__actions" style={{ justifyContent: 'flex-start' }}>
              <Link to="/contact" className="btn btn--dark">
                Work with me
                <span className="btn__arrow">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
              <Link to="/work" className="btn btn--ghost">
                See the work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="about-portrait">
            <span className="about-portrait__initials">MK</span>
            <span className="about-portrait__tag">
              <span className="dot dot--signal" /> {site.roleLong}
            </span>
          </Reveal>
        </div>
      </section>

      <section className="shell">
        <div className="about-grid">
          <Reveal className="about-col">
            <span className="mono">( Skills )</span>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </li>
              ))}
            </ul>
            <div className="about-tools">
              {tools.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-col" delay={80}>
            <span className="mono">( Education )</span>
            <div className="edu-list">
              {education.map((item) => (
                <div className="edu-item" key={item.title}>
                  <span className="edu-item__year">{item.year}</span>
                  <span className="edu-item__body">
                    <strong>{item.title}</strong>
                    <span>{item.place}</span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell">
          <div className="section-head">
            <div className="section-head__text">
              <span className="mono">( Experience )</span>
              <h2 className="h2">Where the six years went</h2>
            </div>
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
                  <ul className="timeline__list">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
