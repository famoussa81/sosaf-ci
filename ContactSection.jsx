function ContactSection({ t }) {
  const { Button, FormField, Input, Textarea, WhatsAppIcon } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const { Reveal } = window;
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const submit = async e => {
    e.preventDefault();
    if (sending) return;
    setErrors([]);
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) setSent(true);
      else setErrors(json.errors && json.errors.length ? json.errors : [t.formError]);
    } catch (err) {
      setErrors([t.formError]);
    } finally {
      setSending(false);
    }
  };
  const label = { fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--palm)', fontWeight: 600, display: 'block', marginBottom: 4 };
  const line = { fontSize: 15, color: 'var(--text-on-light-muted)', margin: 0 };
  const link = { color: 'var(--papaya)', textDecoration: 'underline', textUnderlineOffset: 2 };
  return (
    <section id="contact" style={{ background: 'var(--surface-light)', color: 'var(--text-on-light)', padding: '96px 48px' }}>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>
        <Reveal from="left">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--papaya)', fontWeight: 600 }}>{t.contactEyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, margin: '10px 0 16px' }}>{t.contactTitle}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-on-light-muted)', lineHeight: 'var(--leading-body)', marginBottom: 32 }}>{t.contactLead}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
            <div>
              <span style={label}>Directeur général</span>
              <p style={{ ...line, color: 'var(--text-on-light)', fontWeight: 600 }}>Bouramala Yaya Sanogo</p>
              <p style={line}>Email : <a href="mailto:sosaf.ci.export@gmail.com" style={link}>sosaf.ci.export@gmail.com</a></p>
              <p style={line}>Tél / WhatsApp : <a href="tel:+22389134555" style={link}>+223 89 13 45 55</a></p>
            </div>
            <div>
              <span style={label}>Directeur administratif et financier</span>
              <p style={{ ...line, color: 'var(--text-on-light)', fontWeight: 600 }}>Amadou Dioro Cisse</p>
              <p style={line}>Tél : <a href="tel:+22390017373" style={link}>+223 90 01 73 73</a></p>
            </div>
            <div>
              <span style={label}>Adresse</span>
              <p style={line}>SOSAF-CI</p>
              <p style={line}>Abidjan, Cocody, Angré, 9ème Tranche</p>
              <p style={line}>Lot N446B, Îlot N20</p>
              <p style={line}>23 BP 1099 Abidjan 23, Côte d'Ivoire</p>
            </div>
          </div>

          <Button variant="whatsapp" size="lg" onClick={() => window.open('https://wa.me/22389134555', '_blank')}>
            <WhatsAppIcon size={22} color="#fff" /> {t.whatsapp}
          </Button>
          <p style={{ fontSize: 13, color: 'var(--palm)', fontWeight: 600, marginTop: 10 }}>{t.whatsappSub}</p>
        </Reveal>
        <Reveal from="right" delay={120}>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-on-light)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, margin: '0 0 20px' }}>{t.formTitle}</h3>
            {sent ? (
              <p style={{ color: 'var(--palm)', fontWeight: 600 }}>{t.formSent}</p>
            ) : (
              <form onSubmit={submit} noValidate>
                <FormField label={t.nameLabel}><Input name="name" required /></FormField>
                <FormField label={t.emailLabel}><Input name="email" type="email" required /></FormField>
                <FormField label={t.messageLabel}><Textarea name="message" required /></FormField>
                <input type="text" name="_honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
                {errors.length > 0 && (
                  <ul style={{ margin: '0 0 16px', paddingLeft: 18, color: 'var(--papaya)', fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {errors.map(msg => <li key={msg}>{msg}</li>)}
                  </ul>
                )}
                <Button variant="primary" size="lg" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>{sending ? t.formSending : t.submit}</Button>
              </form>
            )}
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-on-light-muted)', marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border-on-light)' }}>RCCM : CI-ABJ-03-2024-B21-00015</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.ContactSection = ContactSection;
