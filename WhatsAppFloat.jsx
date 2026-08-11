function WhatsAppFloat({ phone = '22389134555' }) {
  const { Icon, WhatsAppIcon } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={'https://wa.me/' + phone}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="wa-float"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed', bottom: 24, right: 24, width: 60, height: 60, borderRadius: '50%', background: '#25D366',
        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 500,
        boxShadow: hover ? '0 10px 28px rgba(37,211,102,0.45)' : '0 6px 18px rgba(37,211,102,0.3)',
        transform: hover ? 'translateY(-3px)' : 'none', transition: 'transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast), opacity var(--motion-fast)',
      }}
    >
      <WhatsAppIcon size={30} color="#fff" />
    </a>
  );
}
window.WhatsAppFloat = WhatsAppFloat;
