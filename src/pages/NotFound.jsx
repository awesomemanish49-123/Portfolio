import { Link } from 'react-router-dom'
import { ArrowUpRight } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <section className="shell notfound">
      <p className="mono">( 404 )</p>
      <h1 className="notfound__title">Page not found</h1>
      <p className="lead">
        That link does not exist. The work, however, does.
      </p>
      <div>
        <Link to="/work" className="btn btn--dark">
          Go to work
          <span className="btn__arrow">
            <ArrowUpRight size={15} />
          </span>
        </Link>
      </div>
    </section>
  )
}
