import { Link } from 'react-router-dom'

export default function Admissions() {
  return <section className="section page-section"><div className="container narrow-content"><p className="eyebrow">Admissions</p><h1>Take the next step with Faith Academy.</h1><p className="lead">We welcome families who are looking for a caring, purposeful learning community for their children.</p><div className="steps"><article><b>01</b><div><h3>Start a conversation</h3><p>Tell us about your child and what you are looking for in a school.</p></div></article><article><b>02</b><div><h3>Visit our campus</h3><p>Meet our team, see our learning spaces and experience our community.</p></div></article><article><b>03</b><div><h3>Apply with confidence</h3><p>We will guide your family through the application and enrolment process.</p></div></article></div><Link className="button" to="/contact">Contact admissions</Link></div></section>
}
