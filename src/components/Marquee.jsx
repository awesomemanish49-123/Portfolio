const items = [
  'GuruPayroll HRMS',
  'Aarogya CRM',
  'Warehouse & stock',
  'Hospital operations',
  'Patient & doctor app',
  'Design systems',
  'Web + mobile',
]

export default function Marquee() {
  const row = [...items, ...items, ...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
