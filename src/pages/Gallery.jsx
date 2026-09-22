import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Start a conversation',
    text: 'Tell us about your child and what you are looking for in a school.',
  },
  {
    number: '02',
    title: 'Visit our campus',
    text: 'Meet our team, see our learning spaces and experience our community.',
  },
  {
    number: '03',
    title: 'Apply with confidence',
    text: 'We will guide your family through the application and enrolment process.',
  },
]

export default function Admissions() {
  return (
    <section className="section page-section">
      <div className="container admissions-layout">
        <div className="admissions-copy">
          <p className="eyebrow">Admissions</p>
          <h1>Take the next step with Faith Academy.</h1>
          <p className="lead">
            We welcome families who are looking for a caring, purposeful learning community for their children.
          </p>

          <div className="steps">
            {steps.map((step) => (
              <article key={step.number}>
                <b>{step.number}</b>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <Link className="button" to="/contact">Contact admissions</Link>
        </div>

        <div className="admissions-visual">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
            alt="Faith Academy campus and learning spaces"
          />
          <div className="mini-panel">
            <strong>Small classes</strong>
            <span>Personal attention and strong teacher-student relationships.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
