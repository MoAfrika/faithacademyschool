const programs = [
  {
    title: 'Early Years',
    text: 'A joyful beginning built around curiosity, play and a love of learning.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Primary School',
    text: 'Strong foundations in literacy, numeracy, life skills and Christian character.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Senior School',
    text: 'Confident, capable learners prepared for further study and responsible leadership.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85',
  },
]

export default function Programs() {
  return (
    <section className="section page-section">
      <div className="container">
        <p className="eyebrow">Our programs</p>
        <h1>Learning for every stage.</h1>
        <p className="lead">
          Our age-appropriate programs balance academic excellence with character, creativity and practical skills.
        </p>

        <div className="program-grid">
          {programs.map((program, index) => (
            <article className="program-card" key={program.title}>
              <img src={program.image} alt={program.title} />
              <span className="feature-number">0{index + 1}</span>
              <h2>{program.title}</h2>
              <p>{program.text}</p>
              <a className="text-link" href="/contact">Ask about this program →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
