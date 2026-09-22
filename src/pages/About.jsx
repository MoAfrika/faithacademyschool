import { Link } from 'react-router-dom'

const pillars = [
  {
    title: 'Our mission',
    text: 'To nurture confident, compassionate learners who grow in faith, knowledge and purpose.',
  },
  {
    title: 'Our values',
    text: 'Excellence, respect, responsibility and Christian character guide the way we teach and lead.',
  },
  {
    title: 'Our community',
    text: 'We build a warm, supportive environment where students, parents and teachers work together.',
  },
]

export default function About() {
  return (
    <section className="section page-section">
      <div className="container about-layout">
        <div className="about-intro">
          <p className="eyebrow">About Faith Academy</p>
          <h1>A strong foundation for a purposeful future.</h1>
          <p className="lead">
            We are a caring school community committed to helping young people discover their potential and live with purpose.
          </p>
        </div>

        <div className="about-image-card">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
            alt="Faith Academy classroom and school environment"
          />
        </div>
      </div>

      <div className="container">
        <div className="value-grid">
          {pillars.map((pillar) => (
            <article className="info-card" key={pillar.title}>
              <span className="feature-number">•</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="container about-bottom">
        <div className="content-card">
          <h2>Our approach</h2>
          <p>
            Our classrooms combine high expectations with patient guidance. Through collaboration between students,
            families and teachers, we create an environment where every learner can thrive.
          </p>
        </div>
        <div className="content-card highlight-card">
          <h2>Why families choose us</h2>
          <p>Faith-based values, individual attention, strong academics and a school culture rooted in belonging.</p>
          <Link className="button" to="/admissions">Learn more</Link>
        </div>
      </div>
    </section>
  )
}
