import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Shot from '../components/Shot.jsx'
import { ArrowLeft, ArrowRight } from '../components/Icons.jsx'
import { getProject, nextProject } from '../data/projects.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/work" replace />

  const next = nextProject(project.slug)

  const sections = [
    project.problem && { id: 'problem', label: 'The problem' },
    project.audience?.length && { id: 'users', label: 'Who it\u2019s for' },
    project.scope?.length && { id: 'scope', label: 'Scope' },
    project.screens?.length && { id: 'screens', label: 'Screens' },
    project.decisions?.length && { id: 'decisions', label: 'Decisions' },
    project.outcome?.length && { id: 'outcome', label: 'Outcome' },
  ].filter(Boolean)

  return (
    <article className="case">
      <div className="shell">
        <Link to="/work" className="case__back">
          <ArrowLeft size={13} /> All work
        </Link>

        <header className="case__head">
          <Reveal as="p" className="eyebrow">
            {project.client} · {project.year}
          </Reveal>

          <Reveal as="h1" className="case__title" delay={50}>
            {project.title}
          </Reveal>

          <Reveal as="p" className="case__summary" delay={90}>
            {project.summary}
          </Reveal>

          <Reveal className="case__tags" delay={130}>
            {project.tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </Reveal>
        </header>

        <Reveal className="meta-grid">
          <div className="meta-cell">
            <span className="meta-cell__label">Role</span>
            <span className="meta-cell__value">{project.role}</span>
          </div>
          <div className="meta-cell">
            <span className="meta-cell__label">Timeline</span>
            <span className="meta-cell__value">{project.timeline}</span>
          </div>
          <div className="meta-cell">
            <span className="meta-cell__label">Platform</span>
            <span className="meta-cell__value">{project.platform}</span>
          </div>
          <div className="meta-cell">
            <span className="meta-cell__label">Team</span>
            <span className="meta-cell__value">{project.team}</span>
          </div>
        </Reveal>

        <div className="case__hero">
          <div
            className="case-cover"
            style={{
              background: `linear-gradient(140deg, ${project.accent} 0%, #101012 92%)`,
            }}
          >
            <span className="case-cover__grid" aria-hidden="true" />
            <span className="case-cover__orb" aria-hidden="true" />
            <div className="case-cover__inner">
              <span className="case-cover__label">{project.category}</span>
              <span className="case-cover__title">{project.title}</span>
              <div className="case-cover__meta">
                <span>{project.platform}</span>
                <span>{project.status}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="case__body">
          <nav className="case__side" aria-label="Sections">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.label}
              </a>
            ))}
          </nav>

          <div className="case__content">
            {project.problem && (
              <section className="block" id="problem">
                <h2 className="block__title">The problem</h2>
                <p className="lead" style={{ maxWidth: '68ch' }}>
                  {project.problem.text}
                </p>
                <ul className="bullets">
                  {project.problem.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.audience?.length > 0 && (
              <section className="block" id="users">
                <h2 className="block__title">Who it&rsquo;s for</h2>
                <div className="role-grid">
                  {project.audience.map((person) => (
                    <div className="role-cell" key={person.role}>
                      <strong>{person.role}</strong>
                      <span>{person.desc}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.scope?.length > 0 && (
              <section className="block" id="scope">
                <h2 className="block__title">What was designed</h2>
                <div className="scope">
                  {project.scope.map((group) => (
                    <div className="scope__group" key={group.group}>
                      <div className="scope__label">
                        <h4>{group.group}</h4>
                        <span className="scope__count">
                          {group.items.length} items
                        </span>
                      </div>
                      <div className="scope__items">
                        {group.items.map((item) => (
                          <span className="chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.screens?.length > 0 && (
              <section className="block" id="screens">
                <h2 className="block__title">Key screens</h2>
                <div className="shot-grid">
                  {project.screens.map((screen) => (
                    <Shot
                      key={screen.title}
                      src={screen.src}
                      title={screen.title}
                      caption={screen.caption}
                    />
                  ))}
                </div>
              </section>
            )}

            {project.decisions?.length > 0 && (
              <section className="block" id="decisions">
                <h2 className="block__title">Design decisions</h2>
                <div className="decisions">
                  {project.decisions.map((decision, i) => (
                    <div className="decision" key={decision.title}>
                      <span className="decision__num">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="decision__title">{decision.title}</h3>
                        <p className="decision__body">{decision.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.outcome?.length > 0 && (
              <section className="block" id="outcome">
                <h2 className="block__title">Outcome</h2>
                <div className="outcome">
                  {project.outcome.map((item) => (
                    <div className="outcome__cell" key={item.label}>
                      <span className="outcome__value">{item.value}</span>
                      <span className="outcome__label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <Link to={`/work/${next.slug}`} className="next-project">
        <div className="shell next-project__inner">
          <div>
            <p className="next-project__label">Next project</p>
            <span className="next-project__title">
              {next.title}
              <ArrowRight size={26} />
            </span>
          </div>
          <span className="mono" style={{ color: 'var(--on-ink-muted)' }}>
            {next.category}
          </span>
        </div>
      </Link>
    </article>
  )
}
