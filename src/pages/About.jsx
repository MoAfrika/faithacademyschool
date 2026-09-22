import { Link } from 'react-router-dom'
import logo from '../assets/faith-academy-logo.svg'

const highlights = [
  ['01', 'Values-led education', 'A safe, caring environment where faith and learning work together.'],
  ['02', 'Every learner matters', 'We notice strengths, nurture confidence and support individual growth.'],
  ['03', 'Ready for tomorrow', 'Strong foundations in academics, character, creativity and leadership.'],
]

const stats = [
  { value: '100%', label: 'Nurturing support' },
  { value: '3', label: 'School stages' },
  { value: '1', label: 'Purpose-driven community' },
]

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <img className="hero-logo" src={logo} alt="Faith Academy Christian School" />
            <p className="eyebrow">Faith Academy Christian School</p>
            <h1>Building bright futures on a strong foundation.</h1>
            <p className="lead">A nurturing Christian school community where children learn with confidence, grow in character and discover their God-given potential.</p>
            <div className="hero-actions">
              <Link className="button" to="/admissions">Explore admissions</Link>
              <Link className="button button-secondary" to="/about">Meet our school</Link>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-main-image"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students celebrating achievements at Faith Academy"
            />
            <div className="floating-badge">
              <strong>Faith • Learning • Leadership</strong>
              <span>For every learner</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Welcome to Faith Academy</p>
            <h2>A school where every child is known, valued and encouraged.</h2>
          </div>
          <div>
            <p className="lead">
              From the classroom to the playground, we create meaningful opportunities for children to ask questions,
              build friendships and develop the skills they need for a purposeful future.
            </p>
            <Link className="text-link" to="/about">Discover our story →</Link>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What makes us different</p>
            <h2>Growing minds. Shaping character.</h2>
          </div>
          <div className="feature-grid">
            {highlights.map(([number, title, text]) => (
              <article key={number}>
                <span className="feature-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container showcase-grid">
          <div className="showcase-copy">
            <p className="eyebrow">Our school life</p>
            <h2>Celebrating effort, excellence and every milestone.</h2>
            <p className="lead">
              We believe children thrive when they feel safe, heard and inspired. That is why our school is built on
              care, discipline, excellence and faith.
            </p>
            <Link className="button button-secondary" to="/gallery">View school life</Link>
          </div>

          <div className="showcase-image-stack">
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1100&q=85" alt="School students celebrating together" />
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=85" alt="Faith Academy campus exterior" />
          </div>
        </div>
      </section>
    </>
  )
}
