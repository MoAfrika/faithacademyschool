const programs = [
  ['Early Years', 'A joyful beginning built around curiosity, play and a love of learning.'],
  ['Primary School', 'Strong foundations in literacy, numeracy, life skills and Christian character.'],
  ['Senior School', 'Confident, capable learners prepared for further study and responsible leadership.'],
]

export default function Programs() {
  return <section className="section page-section"><div className="container"><p className="eyebrow">Our programs</p><h1>Learning for every stage.</h1><p className="lead">Our age-appropriate programs balance academic excellence with character, creativity and practical skills.</p><div className="program-grid">{programs.map(([title, text], index) => <article className="program-card" key={title}><span className="feature-number">0{index + 1}</span><h2>{title}</h2><p>{text}</p><a className="text-link" href="/contact">Ask about this program →</a></article>)}</div></div></section>
}
