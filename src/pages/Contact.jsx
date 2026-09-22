import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="section page-section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1>We would love to hear from you.</h1>
          <p className="lead">
            Have a question about admissions or life at Faith Academy? Send us a message.
          </p>
          <p className="contact-detail">
            <strong>Email</strong>
            <br />
            hello@faithacademy.example
          </p>
          <p className="contact-detail">
            <strong>Office hours</strong>
            <br />
            Monday–Friday, 08:00–16:00
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input id="name" name="name" required />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" name="email" type="email" required />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" rows="5" required />
          </label>
          <button className="button" type="submit">Send message</button>
          {sent && (
            <p className="form-success" role="status">
              Thank you — your message is ready to be received.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
