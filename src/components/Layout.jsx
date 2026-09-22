import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink className="brand" to="/" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">FA</span>
            <span>Faith Academy</span>
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
              <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>
                {label}
              </NavLink>
            ))}
            <NavLink className="button button-small" to="/contact" onClick={closeMenu}>Enquire now</NavLink>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Faith Academy School.</p>
          <p>Learning with purpose. Growing in faith.</p>
        </div>
      </footer>
    </div>
  )
}
