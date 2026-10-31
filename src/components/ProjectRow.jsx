import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import { ArrowUpRight } from './Icons.jsx'

/**
 * One line of the work index. The cover is the hover state: a dark
 * plate rises, the image fades in behind it and the row text inverts.
 */
export default function ProjectRow({ project, index }) {
  return (
    <li className="index__item">
      <Link to={`/work/${project.slug}`} className="index__row">
        <span className="index__media" aria-hidden="true">
          <Cover project={project} />
        </span>
        <span className="index__num">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="index__title">{project.title}</span>
        <span className="index__cat">{project.category}</span>
        <span className="index__year">{project.year}</span>
        <span className="index__arrow" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </li>
  )
}
