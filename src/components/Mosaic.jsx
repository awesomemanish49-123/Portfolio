import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'

/**
 * Dense thumbnail mosaic with a sticky outline of the years. Covers are
 * the same image slots used everywhere else, so uploading project art
 * fills this section too.
 */
export default function Mosaic({ projects }) {
  const cells = projects.slice(0, 12)

  return (
    <section className="harmony" aria-label="Work, 2019 to 2026">
      <div className="shell">
        <p className="mono harmony__label">( Six years in the making )</p>

        <div className="harmony__overlay" aria-hidden="true">
          <span className="harmony__digits">20 19</span>
          <span className="harmony__digits">— 20 26</span>
        </div>

        <div className="harmony__grid">
          {cells.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="harmony__cell"
            >
              <Cover project={project} />
              <span className="harmony__name">{project.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
