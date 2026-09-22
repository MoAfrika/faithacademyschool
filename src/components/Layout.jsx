import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/faith-academy-logo.svg'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Gallery', to: '/gallery' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/" aria-label="Faith Academy home">
            <img src={logo} alt="Faith Academy Christian School logo" />
            <span>
              <strong>Faith Academy</strong>
              <small>Christian School</small>
            </span>
          </NavLink>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="primary-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navigation.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === '/'}>
                {label}
              </NavLink>
            ))}
            <NavLink className="button button-small" to="/contact">
              Enquire now
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logo} alt="" className="footer-logo" />
            <p>Faith Academy Christian School</p>
          </div>
          <p>Learning with purpose. Growing in faith.</p>
          <p>© {new Date().getFullYear()} Faith Academy School.</p>
        </div>
      </footer>
    </div>
  )
}
