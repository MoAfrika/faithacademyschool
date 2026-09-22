import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">A place to learn, lead and belong</p>
            <h1>Growing bright minds and compassionate hearts.</h1>
            <p className="lead">Faith Academy gives every learner the confidence, care and curiosity to make a meaningful difference.</p>
            <div className="hero-actions">
              <Link className="button" to="/contact">Start a conversation</Link>
              <Link className="button button-secondary" to="/about">Discover our school</Link>
            </div>
          </div>
          <div className="hero-card" aria-label="School values">
            <span className="hero-card-icon" aria-hidden="true">✦</span>
            <p>“Education is not just preparation for life; it is life itself.”</p>
            <span className="hero-card-caption">Faith Academy values</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Our promise</p><h2>Learning that reaches beyond the classroom.</h2></div>
          <div className="feature-grid">
            <article><span className="feature-number">01</span><h3>Whole-child learning</h3><p>We support academic, personal and spiritual growth at every stage.</p></article>
            <article><span className="feature-number">02</span><h3>A welcoming community</h3><p>Students are known, valued and encouraged to use their unique gifts.</p></article>
            <article><span className="feature-number">03</span><h3>Future-ready confidence</h3><p>Practical skills, creativity and critical thinking prepare learners for tomorrow.</p></article>
          </div>
        </div>
      </section>
    </>
  )
}
