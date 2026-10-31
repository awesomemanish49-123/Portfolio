const items = [
  'Enterprise SaaS',
  'HRMS',
  'CRM & operations',
  'Warehouse & stock',
  'Hospital operations',
  'Patient & doctor apps',
  'Design systems',
  'Brand & marketing',
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
