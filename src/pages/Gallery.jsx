const photos = [
  ['Students learning', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85'],
  ['A welcoming campus', 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85'],
  ['Growing together', 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=85'],
]

export default function Gallery() {
  return <section className="section page-section"><div className="container"><p className="eyebrow">School life</p><h1>Moments that matter.</h1><p className="lead">A glimpse into the learning, friendship and celebration that make Faith Academy special.</p><div className="gallery-grid">{photos.map(([alt, src]) => <figure key={alt}><img src={src} alt={alt} /><figcaption>{alt}</figcaption></figure>)}</div><p className="gallery-note">More school photographs coming soon. Replace the temporary gallery images with your supplied campus and student photos in <code>src/assets/</code>.</p></div></section>
}
