const bars = [38, 62, 48, 78, 54, 92, 66, 44, 72, 58, 84, 50]
const accentIndex = 5

/**
 * A small CSS-only product mock used in the hero.
 * It reads as a real dashboard without shipping a screenshot.
 */
export default function MockDashboard() {
  return (
    <div className="browser">
      <div className="browser__bar">
        <span className="browser__dot" />
        <span className="browser__dot" />
        <span className="browser__dot" />
        <span className="browser__url">gurupayroll.app / dashboard</span>
      </div>

      <div className="dash">
        <div className="dash__side">
          <span className="dash__logo" />
          <span className="dash__nav is-on" />
          <span className="dash__nav" />
          <span className="dash__nav" />
          <span className="dash__nav" />
          <span className="dash__nav" />
        </div>

        <div className="dash__main">
          <div className="dash__head">
            <span className="dash__title">Admin dashboard</span>
            <span className="dash__pill">Live</span>
          </div>

          <div className="dash__kpis">
            <div className="dash__kpi">
              <span>Present</span>
              <strong>248</strong>
            </div>
            <div className="dash__kpi">
              <span>On leave</span>
              <strong>17</strong>
            </div>
            <div className="dash__kpi">
              <span>Pending</span>
              <strong>06</strong>
            </div>
          </div>

          <div className="dash__chart">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`dash__bar ${i === accentIndex ? 'is-accent' : ''}`}
                style={{ height: `${h}%`, animationDelay: `${i * 55}ms` }}
              />
            ))}
          </div>

          <div className="dash__rows">
            <span className="dash__row" />
            <span className="dash__row dash__row--w80" />
            <span className="dash__row dash__row--w60" />
          </div>
        </div>
      </div>
    </div>
  )
}
