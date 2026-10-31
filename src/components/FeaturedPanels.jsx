import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import { ArrowUpRight } from './Icons.jsx'

/**
 * Full-height dark panels, one per featured project — the reference's
 * "screening room" section. Hover dims the cover and shifts the title.
 */
export default function FeaturedPanels({ projects }) {
  return (
    <section className="featured" aria-label="Featured work">
      <div className="featured__head">
        <span className="mono">Featured work</span>
        <span className="mono">({String(projects.length).padStart(2, '0')})</span>
      </div>

      <div className="featured__stack">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className="panel"
          >
            <span className="panel__media">
              <Cover project={project} priority={index === 0} />
            </span>
            <span className="panel__shade" aria-hidden="true" />

            <span className="panel__inner">
              <span className="panel__lead">
                <span className="panel__index mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="panel__title">{project.title}</span>
              </span>

              <span className="panel__aside">
                <span className="panel__desc">{project.subtitle}</span>
                <span className="panel__meta">
                  {project.category} · {project.year}
                </span>
                <span className="panel__cta">
                  View case study <ArrowUpRight size={13} />
                </span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
