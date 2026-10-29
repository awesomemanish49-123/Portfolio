import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { categories, projects } from '../data/projects.js'

export default function Work() {
  const [active, setActive] = useState(categories[0])

  const counts = useMemo(() => {
    const map = { [categories[0]]: projects.length }
    projects.forEach((p) => {
      map[p.category] = (map[p.category] || 0) + 1
    })
    return map
  }, [])

  const visible = useMemo(
    () =>
      active === categories[0]
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  )

  return (
    <>
      <section className="shell">
        <div className="page-head">
          <Reveal as="p" className="eyebrow">
            Work · 2019 — 2026
          </Reveal>
          <Reveal as="h1" className="page-head__title" delay={50}>
            Selected <em>work</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={100}>
            Fifteen projects across three product suites — enterprise HR, a
            tele-sales CRM, warehouse and hospital operations, a patient app,
            client work from Finoit, and the brand design that holds it together.
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <div className="filters" role="tablist" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={active === category}
              className={`filter ${active === category ? 'is-on' : ''}`}
              onClick={() => setActive(category)}
            >
              {category}
              <span className="filter__count">{counts[category] || 0}</span>
            </button>
          ))}
        </div>

        <div className="work-grid">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 60}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="work-empty">Nothing in this category yet.</p>
        )}
      </div>
    </>
  )
}
