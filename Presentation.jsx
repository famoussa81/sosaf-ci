function Presentation({ t }) {
  const { Reveal, CountUp } = window;
  return (
    <section style={{ background: 'var(--surface-light)', color: 'var(--text-on-light)', padding: '96px 48px' }}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}>
        <div>
          <Reveal>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--papaya)', fontWeight: 600 }}>{t.presEyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, margin: '10px 0 18px' }}>{t.presTitle}</h2>
          <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-body)', color: 'var(--text-on-light-muted)', margin: 0 }}>{t.presBody}</p>
          </Reveal>
          <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 40 }}>
            {t.stats.map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center', padding: 20, border: '1px solid var(--border-on-light)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 28, fontWeight: 700, color: 'var(--palm)' }}><CountUp value={num} /></span>
                <span style={{ fontSize: 12, color: 'var(--text-on-light-muted)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <Reveal from="right" delay={120}>
        <div className="photo-treated crop-4-5" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <img src={(window.SITE_BASE || '') + 'assets/photography/mangue-04.webp'} alt="Récolte de mangues, Côte d'Ivoire" loading="lazy" decoding="async" />
        </div>
        </Reveal>
      </div>
    </section>
  );
}
window.Presentation = Presentation;
