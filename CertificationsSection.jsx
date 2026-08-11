function CertificationsSection({ t }) {
  const { Icon } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const { Reveal } = window;
  return (
    <section style={{ background: 'var(--surface-light)', color: 'var(--text-on-light)', padding: '96px 48px' }}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 1200, margin: '0 auto', alignItems: 'center' }}>
        <Reveal from="left">
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--papaya)', fontWeight: 600 }}>{t.certEyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, margin: '10px 0 18px' }}>{t.certTitle}</h2>
          <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-body)', color: 'var(--text-on-light-muted)', margin: '0 0 20px' }}>{t.certBody}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {t.certList.map(item => (
              <li key={item} style={{ display: 'flex', gap: 10, fontSize: 15 }}>
                <Icon name="check" size={18} color="var(--palm)" /> {item}
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
        <Reveal from="zoom" delay={140}>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-on-light)', borderRadius: 'var(--radius-lg)', padding: 40, textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
            <Icon name="shield-check" size={34} color="var(--palm)" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, margin: '0 0 8px' }}>GlobalG.A.P.</h3>
          <p style={{ fontSize: 14, color: 'var(--text-on-light-muted)', margin: 0 }}>Bonnes pratiques agricoles, qualité et traçabilité.</p>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
window.CertificationsSection = CertificationsSection;
