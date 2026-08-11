function Hero({ t }) {
  const { Button } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const { Reveal } = window;
  return (
    <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '0 48px' }}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 1200, margin: '0 auto', alignItems: 'center', width: '100%' }}>
        <div>
          <Reveal>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--mango)', border: '1px solid oklch(from var(--mango) l c h / 0.3)', padding: '6px 14px', borderRadius: 'var(--radius-pill)', marginBottom: 24 }}>{t.eyebrow}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', lineHeight: 'var(--leading-tight)', fontWeight: 500, letterSpacing: 'var(--tracking-tight)', margin: '0 0 24px' }}>
            {t.h1a}<br /><span style={{ color: 'var(--mango)', fontStyle: 'italic' }}>{t.h1b}</span><br />{t.h1c}
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-body)', color: 'var(--text-on-dark-muted)', maxWidth: 520, margin: '0 0 32px' }}>{t.lead}</p>
          <div className="btn-row" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' })}>{t.cta1}</Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t.cta2}</Button>
          </div>
          </Reveal>
        </div>
        <Reveal from="zoom" delay={200} className="hero-logo">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={(window.SITE_BASE || '') + 'assets/logo-hero.webp'} alt={t.heroLogoAlt} width="1120" height="1120" decoding="async" style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block' }} />
        </div>
        </Reveal>
      </div>
    </section>
  );
}
window.Hero = Hero;
