/**
 * Project cover.
 * Renders `project.cover` when an image exists, otherwise a designed
 * fallback panel so the layout stays honest before the exports land.
 *
 * Image convention: drop files in /public/shots and point `cover` at
 * them, e.g. cover: '/shots/gurupayroll-hrms/cover.jpg'
 */
const initials = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

export default function Cover({ project, priority = false, className = '' }) {
  if (project.cover) {
    return (
      <span className={`cover ${className}`.trim()}>
        <img
          className="cover__img"
          src={project.cover}
          alt={`${project.title} — project cover`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </span>
    )
  }

  return (
    <span className={`cover ${className}`.trim()} aria-hidden="true">
      <span
        className="cover__fallback"
        style={{ '--cover-tone': project.accent }}
      >
        <span className="cover__mono">{project.category}</span>
        <span className="cover__mark">{initials(project.title)}</span>
        <span className="cover__foot">
          <i className="cover__tone" />
          {project.client}
        </span>
      </span>
    </span>
  )
}
