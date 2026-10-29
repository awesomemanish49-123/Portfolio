import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons.jsx'

/**
 * Cover art is generated in CSS so the site looks complete before the
 * real Figma exports are dropped into /public/shots.
 * If a project has `cover`, that image is used instead.
 */
function CoverArt({ project, variant }) {
  if (project.cover) {
    return (
      <div className="card__art">
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    )
  }

  return (
    <div
      className="card__art art"
      style={{
        background: `linear-gradient(145deg, ${project.accent} 0%, #111113 88%)`,
      }}
    >
      <span className="art__grid" />
      <span
        className="art__orb"
        style={{
          background:
            variant === 1
              ? 'radial-gradient(circle, rgba(255,255,255,.5), transparent 70%)'
              : 'radial-gradient(circle, rgba(255,255,255,.32), transparent 70%)',
          left: variant === 1 ? '-10%' : 'auto',
          right: variant === 1 ? 'auto' : '-12%',
          top: variant === 1 ? '-16%' : 'auto',
          bottom: variant === 1 ? 'auto' : '-20%',
        }}
      />

      {variant === 2 ? (
        <div style={{ position: 'relative', display: 'grid', gap: 8, width: '62%' }}>
          {[70, 46, 58, 34].map((w, i) => (
            <span
              key={i}
              className="art__bar"
              style={{ width: `${w}%`, opacity: 1 - i * 0.16 }}
            />
          ))}
        </div>
      ) : (
        <div className="art__frame">
          <span className="art__bar art__bar--w40" />
          <span className="art__bar art__bar--w70" />
          <div className="art__tiles">
            <span className="art__tile" />
            <span className="art__tile" />
            <span className="art__tile" />
          </div>
        </div>
      )}

      <span className="art__label">{project.category}</span>
    </div>
  )
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link to={`/work/${project.slug}`} className="card">
      <div className="card__media">
        <span className="card__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.status !== 'Live' && (
          <span className="card__status">
            {project.status === 'In progress' && <span className="dot" />}
            {project.status}
          </span>
        )}
        <CoverArt project={project} variant={index % 3} />
      </div>

      <div className="card__body">
        <div className="card__meta">
          <span>{project.client}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>
        <h3 className="card__title">
          {project.title}
          <ArrowUpRight size={18} />
        </h3>
        <p className="card__desc">{project.subtitle}</p>
      </div>
    </Link>
  )
}
