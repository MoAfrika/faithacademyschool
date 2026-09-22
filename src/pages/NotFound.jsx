import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="section page-section centered"><div className="container"><p className="eyebrow">404</p><h1>Page not found.</h1><p className="lead">The page you are looking for does not exist.</p><Link className="button" to="/">Return home</Link></div></section>
}
