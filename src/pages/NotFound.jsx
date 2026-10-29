import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <section
      className="shell"
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        paddingTop: 'var(--header-h)',
      }}
    >
      <p className="eyebrow">404</p>
      <h1 className="page-head__title">
        Page not <em>found</em>
      </h1>
      <p className="lead">
        That link does not exist. The work, however, does.
      </p>
      <div>
        <Link to="/work" className="btn btn--dark">
          Go to work
          <span className="btn__arrow">
            <ArrowRight size={15} />
          </span>
        </Link>
      </div>
    </section>
  )
}
