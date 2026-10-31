import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import ProjectRow from '../components/ProjectRow.jsx'
import { categories, projects } from '../data/projects.js'

export default function Work() {
  const [active, setActive] = useState(categories[0])

  const counts = useMemo(() => {
    const map = { [categories[0]]: projects.length }
    projects.forEach((project) => {
      map[project.category] = (map[project.category] || 0) + 1
    })
    return map
  }, [])

  const visible = useMemo(
    () =>
      active === categories[0]
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  )

  return (
    <>
      <section className="shell">
        <div className="page-head">
          <Reveal as="p" className="mono">
            ( Work · 2019—2026 )
          </Reveal>
          <Reveal as="h1" className="page-head__title" delay={40}>
            Selected <em>work</em>
          </Reveal>
          <Reveal as="p" className="lead" delay={80}>
            Fifteen projects across three product suites — enterprise HR, a
            tele-sales CRM, warehouse and hospital operations, a patient app,
            client work from Finoit, and the brand design that holds it
            together.
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

        <ul className="work-index">
          {visible.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="work-empty">Nothing in this category yet.</p>
        )}
      </div>
    </>
  )
}
