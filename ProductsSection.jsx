function ProductsSection({ t, products, onOpenGallery }) {
  const { ProductCard } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const { Reveal } = window;
  return (
    <section id="produits" style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--mango)', fontWeight: 600 }}>{t.prodEyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, margin: '10px 0 14px' }}>{t.prodTitle}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-on-dark-muted)', maxWidth: 600, margin: '0 auto' }}>{t.prodLead}</p>
        </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} from="zoom">
              <ProductCard image={p.image} name={p.name} subtitle={p.subtitle} fields={p.fields} certification={p.certification} photoCount={p.gallery.length} onOpenGallery={() => onOpenGallery(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProductsSection = ProductsSection;
