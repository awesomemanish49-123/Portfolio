const lines = ['Interfaces.', 'Systems.', 'Dashboards.', 'Workflows.']

/**
 * Oversized rotating line — the reference's "design is that functions"
 * moment, rebuilt with a CSS-only track so there is no animation loop.
 */
export default function WordRotator() {
  return (
    <section className="rotator">
      <div className="shell">
        <div className="rotator__grid">
          <p className="rotator__label rotator__label--a">
            Enterprise SaaS.
            <br />
            Healthcare. CRM.
          </p>

          <div className="rotator__word">
            <span className="rotator__static mono">I design</span>
            <span className="rotator__frame" aria-hidden="true">
              <span className="rotator__track">
                {[...lines, lines[0]].map((line, index) => (
                  <span className="rotator__line" key={`${line}-${index}`}>
                    {line}
                  </span>
                ))}
              </span>
            </span>
            <span className="sr-only">
              I design interfaces, systems, dashboards and workflows.
            </span>
          </div>

          <p className="rotator__label rotator__label--b">
            Six years in.
            <br />
            74 modules shipped.
          </p>
        </div>
      </div>
    </section>
  )
}
