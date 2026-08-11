/* @ds-bundle: {"format":4,"namespace":"ComptoirTropicalSOSAFCIDesignSystem_8722e7","components":[{"name":"CertificationBadge","sourcePath":"components/badges/CertificationBadge.jsx"},{"name":"Tag","sourcePath":"components/badges/Tag.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"FaqAccordion","sourcePath":"components/disclosure/FaqAccordion.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"WhatsAppIcon","sourcePath":"components/icons/WhatsAppIcon.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"}],"sourceHashes":{"components/badges/CertificationBadge.jsx":"e3ba803b16f3","components/badges/Tag.jsx":"775db912fc47","components/buttons/Button.jsx":"6edb72508c47","components/cards/ProductCard.jsx":"48f7d9dcb589","components/disclosure/FaqAccordion.jsx":"44611bcf8809","components/forms/FormField.jsx":"f5202c1f26d9","components/forms/Input.jsx":"4f7f1f961646","components/forms/Textarea.jsx":"949c1327df3e","components/icons/Icon.jsx":"94bfd88329e6","components/icons/WhatsAppIcon.jsx":"f0d2ff65f230","components/navigation/Nav.jsx":"fa8e25681432","ui_kits/website/App.jsx":"89f6824156da","ui_kits/website/CertificationsSection.jsx":"7bc7c21cb55d","ui_kits/website/ContactSection.jsx":"fc64dbb916e4","ui_kits/website/FaqSection.jsx":"69aa765a08c5","ui_kits/website/Footer.jsx":"3a5056f37b8e","ui_kits/website/Hero.jsx":"71fe25bc7fc1","ui_kits/website/LegalPage.jsx":"385b99663e47","ui_kits/website/Lightbox.jsx":"f3d19d060298","ui_kits/website/Presentation.jsx":"3912acf1ef8a","ui_kits/website/ProcessSection.jsx":"89b5ac525af1","ui_kits/website/ProductsSection.jsx":"e77a3a450d29","ui_kits/website/Reveal.jsx":"652b28c5ef62","ui_kits/website/WhatsAppFloat.jsx":"453877c6e086","ui_kits/website/content.jsx":"62dccd0d228d","ui_kits/website/legal-content.jsx":"575c9b83e058"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.ComptoirTropicalSOSAFCIDesignSystem_8722e7 = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--ivory-shade-1)',
      color: 'var(--cocoa)'
    },
    accent: {
      background: 'oklch(from var(--mango) l c h / 0.16)',
      color: 'var(--mango-shade)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Tag.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--cocoa)',
    border: 'none'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-on-dark)',
    border: '1px solid var(--border-on-dark)'
  },
  'secondary-light': {
    background: 'transparent',
    color: 'var(--text-on-light)',
    border: '1px solid var(--border-on-light)'
  },
  whatsapp: {
    background: '#25D366',
    color: '#ffffff',
    border: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--accent-primary)',
    border: 'none'
  }
};
const SIZES = {
  sm: {
    padding: '9px 18px',
    fontSize: 13
  },
  md: {
    padding: '13px 26px',
    fontSize: 15
  },
  lg: {
    padding: '16px 34px',
    fontSize: 16
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast)',
      transform: hover && !disabled ? 'translateY(-2px)' : 'none',
      boxShadow: hover && !disabled ? 'var(--shadow-md)' : 'none',
      ...v,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function FormField({
  label,
  error,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-on-light)',
      marginBottom: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label), children, error && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--papaya)',
      marginTop: 4
    }
  }, error));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--border-on-light)',
  borderRadius: 'var(--radius-md)',
  background: 'var(--surface-card)',
  color: 'var(--text-on-light)',
  fontSize: 15,
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color var(--motion-fast)'
};
function Input(props) {
  return /*#__PURE__*/React.createElement("input", _extends({}, props, {
    style: {
      ...fieldStyle,
      ...props.style
    }
  }));
}
Object.assign(__ds_scope, { fieldStyle, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea(props) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 4
  }, props, {
    style: {
      ...__ds_scope.fieldStyle,
      resize: 'vertical',
      ...props.style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      window.lucide.createIcons({
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size
    },
    "data-width": size,
    "data-height": size,
    "data-stroke-width": strokeWidth
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/badges/CertificationBadge.jsx
try { (() => {
function CertificationBadge({
  label = 'GlobalG.A.P.'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      background: 'var(--success-bg)',
      color: 'var(--palm)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield-check",
    size: 13
  }), " ", label);
}
Object.assign(__ds_scope, { CertificationBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/CertificationBadge.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  subtitle,
  fields = [],
  certification,
  photoCount = 1,
  onOpenGallery
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'transform var(--motion-base) var(--ease-out), box-shadow var(--motion-base)',
      transform: hover ? 'translateY(-6px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      cursor: onOpenGallery ? 'pointer' : 'default',
      fontFamily: 'var(--font-body)'
    },
    onClick: onOpenGallery
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-treated crop-4-5",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    loading: "lazy",
    decoding: "async",
    style: {
      transition: 'transform var(--motion-slow) var(--ease-out)',
      transform: hover ? 'scale(1.06)' : 'scale(1)'
    }
  }), photoCount > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: '50%',
      transform: hover ? 'translateX(-50%) translateY(-2px)' : 'translateX(-50%)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'oklch(from var(--cocoa) l c h / 0.55)',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      backdropFilter: 'blur(8px)',
      opacity: hover ? 1 : 0.85,
      transition: 'opacity var(--motion-base) var(--ease-out), transform var(--motion-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 14
  }), " Galerie ", /*#__PURE__*/React.createElement("span", null, photoCount))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      color: 'var(--text-on-light)',
      margin: '0 0 6px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-light-muted)',
      margin: 0
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-4)'
    }
  }, fields.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--palm)',
      marginBottom: 2
    }
  }, f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-light-muted)'
    }
  }, f.value)))), certification && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CertificationBadge, {
    label: certification
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FaqAccordion.jsx
try { (() => {
function FaqAccordion({
  items = []
}) {
  const [openIndex, setOpenIndex] = React.useState(null);
  const [hoverIndex, setHoverIndex] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, items.map((item, i) => {
    const isOpen = openIndex === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-on-dark)',
        transition: 'border-color var(--motion-base)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpenIndex(isOpen ? null : i),
      onMouseEnter: () => setHoverIndex(i),
      onMouseLeave: () => setHoverIndex(null),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        padding: '18px 0',
        cursor: 'pointer',
        textAlign: 'left',
        color: hoverIndex === i || isOpen ? 'var(--mango)' : 'var(--text-on-dark)',
        fontSize: 16,
        fontWeight: 500,
        transition: 'color var(--motion-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.q), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--mango)',
        transition: 'transform var(--motion-base) var(--ease-standard)',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--motion-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-dark-muted)',
        fontSize: 15,
        lineHeight: 'var(--leading-body)',
        margin: '0 0 18px',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity var(--motion-base) var(--ease-out)'
      }
    }, item.a))));
  }));
}
Object.assign(__ds_scope, { FaqAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FaqAccordion.jsx", error: String((e && e.message) || e) }); }

// components/icons/WhatsAppIcon.jsx
try { (() => {
function WhatsAppIcon({
  size = 24,
  color = 'currentColor'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: color,
    style: {
      flexShrink: 0,
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  }));
}
Object.assign(__ds_scope, { WhatsAppIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/WhatsAppIcon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function NavItem({
  link,
  isMobile,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: link.href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      color: hover ? 'var(--text-on-dark)' : 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      fontSize: isMobile ? 19 : 14,
      fontWeight: 500,
      paddingBottom: 3,
      transition: 'color var(--motion-fast) var(--ease-standard)',
      minHeight: isMobile ? 44 : undefined,
      display: 'flex',
      alignItems: 'center'
    }
  }, link.label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 2,
      background: 'var(--mango)',
      width: hover ? '100%' : 0,
      transition: 'width var(--motion-base) var(--ease-standard)'
    }
  }));
}
function Nav({
  logo = 'assets/logo.svg',
  links = [],
  lang = 'FR',
  onLangToggle,
  cta = 'Devis →'
}) {
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' && window.innerWidth <= 900);
  React.useEffect(() => {
    const onResize = () => {
      const m = window.innerWidth <= 900;
      setIsMobile(m);
      if (!m) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  // Lock page scroll while the mobile panel is open, and close on Escape.
  React.useEffect(() => {
    if (!(isMobile && open)) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('data-menu-open', '');
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.body.removeAttribute('data-menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobile, open]);
  const barH = 66;
  const goToContact = () => {
    setOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  // backdrop-filter makes the <nav> a containing block for fixed children, which would trap
  // the mobile panel inside the 66px bar. Drop the blur while the panel is on screen,
  // and keep it off until the closing transition has finished.
  const [menuOverlay, setMenuOverlay] = React.useState(false);
  React.useEffect(() => {
    if (isMobile && open) {
      setMenuOverlay(true);
      return;
    }
    const id = setTimeout(() => setMenuOverlay(false), 320);
    return () => clearTimeout(id);
  }, [isMobile, open]);
  const menu = isMobile ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: barH,
      bottom: 0,
      background: 'var(--canopy)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      gap: 4,
      zIndex: 250,
      padding: '24px 24px 40px',
      overflowY: 'auto',
      opacity: open ? 1 : 0,
      transform: open ? 'translateY(0)' : 'translateY(-10px)',
      pointerEvents: open ? 'auto' : 'none',
      visibility: open ? 'visible' : 'hidden',
      transition: 'opacity var(--motion-base) var(--ease-standard), transform var(--motion-base) var(--ease-standard), visibility var(--motion-base)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.label,
    style: {
      borderBottom: '1px solid var(--border-on-dark)',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    link: l,
    isMobile: true,
    onClick: () => setOpen(false)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: goToContact,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, cta)), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onLangToggle && onLangToggle();
    },
    "aria-label": "Language",
    style: {
      width: 48,
      height: 48,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-on-dark)',
      background: 'transparent',
      color: 'var(--text-on-dark-muted)',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, lang))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavItem, {
    key: l.label,
    link: l
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: goToContact
  }, cta), /*#__PURE__*/React.createElement("button", {
    onClick: onLangToggle,
    "aria-label": "Language",
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-on-dark)',
      background: 'transparent',
      color: 'var(--text-on-dark-muted)',
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, lang));
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: barH,
      padding: '0 clamp(16px, 4vw, 28px)',
      background: menuOverlay ? 'var(--canopy)' : 'oklch(from var(--canopy) l c h / 0.92)',
      backdropFilter: menuOverlay ? 'none' : 'blur(20px)',
      borderBottom: '1px solid var(--border-on-dark)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#accueil",
    style: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 301
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "SOSAF-CI",
    style: {
      height: 34,
      display: 'block'
    }
  })), menu, isMobile && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-on-dark)',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 301,
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      marginRight: -8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 26
  })));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const {
    Nav
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + '../../assets/';
  const [gallery, setGallery] = React.useState({
    product: null,
    index: 0
  });
  const t = window.COPY[lang];
  const products = window.PRODUCTS[lang];
  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'];
  const links = t.nav.slice(0, -1).map((label, i) => ({
    label,
    href: '#' + anchors[i]
  }));
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const otherHref = lang === 'fr' ? 'en/index.html' : '../index.html';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    logo: assets + 'logo.svg',
    links: links,
    cta: t.navCta,
    lang: otherLang,
    onLangToggle: () => {
      window.location.href = otherHref;
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "accueil"
  }, /*#__PURE__*/React.createElement(window.Hero, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    id: "presentation"
  }, /*#__PURE__*/React.createElement(window.Presentation, {
    t: t
  })), /*#__PURE__*/React.createElement(window.ProductsSection, {
    t: t,
    products: products,
    onOpenGallery: p => setGallery({
      product: p,
      index: 0
    })
  }), /*#__PURE__*/React.createElement("div", {
    id: "certifications"
  }, /*#__PURE__*/React.createElement(window.CertificationsSection, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    id: "process"
  }, /*#__PURE__*/React.createElement(window.ProcessSection, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    id: "faq"
  }, /*#__PURE__*/React.createElement(window.FaqSection, {
    t: t
  })), /*#__PURE__*/React.createElement(window.ContactSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.Footer, {
    t: t
  }), /*#__PURE__*/React.createElement(window.WhatsAppFloat, null), /*#__PURE__*/React.createElement(window.Lightbox, {
    product: gallery.product,
    index: gallery.index,
    onClose: () => setGallery({
      product: null,
      index: 0
    }),
    onPrev: () => setGallery(g => ({
      ...g,
      index: (g.index - 1 + g.product.gallery.length) % g.product.gallery.length
    })),
    onNext: () => setGallery(g => ({
      ...g,
      index: (g.index + 1) % g.product.gallery.length
    }))
  }));
}

// The compiled design-system bundle also contains this file; without the guard it would paint
// the landing page for a split second on legal pages before their own render replaces it.
// `__ds_ns` only exists inside the compiled design-system bundle, which also contains this file.
// Rendering from there too would mount the app twice (visible flicker, replayed reveal animations)
// and would paint the landing page for a split second on legal pages.
if (typeof __ds_ns === 'undefined' && (window.SITE_PAGE || 'home') === 'home') {
  window.__root = window.__root || ReactDOM.createRoot(document.getElementById('root'));
  window.__root.render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CertificationsSection.jsx
try { (() => {
function CertificationsSection({
  t
}) {
  const {
    Icon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1200,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--papaya)',
      fontWeight: 600
    }
  }, t.certEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 18px'
    }
  }, t.certTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light-muted)',
      margin: '0 0 20px'
    }
  }, t.certBody), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.certList.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--palm)"
  }), " ", item))))), /*#__PURE__*/React.createElement(Reveal, {
    from: "zoom",
    delay: 140
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--success-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 34,
    color: "var(--palm)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      margin: '0 0 8px'
    }
  }, "GlobalG.A.P."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-light-muted)',
      margin: 0
    }
  }, "Bonnes pratiques agricoles, qualit\xE9 et tra\xE7abilit\xE9.")))));
}
window.CertificationsSection = CertificationsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CertificationsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
function ContactSection({
  t
}) {
  const {
    Button,
    FormField,
    Input,
    Textarea,
    WhatsAppIcon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) setSent(true);else setErrors(json.errors && json.errors.length ? json.errors : [t.formError]);
    } catch (err) {
      setErrors([t.formError]);
    } finally {
      setSending(false);
    }
  };
  const label = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    color: 'var(--palm)',
    fontWeight: 600,
    display: 'block',
    marginBottom: 4
  };
  const line = {
    fontSize: 15,
    color: 'var(--text-on-light-muted)',
    margin: 0
  };
  const link = {
    color: 'var(--papaya)',
    textDecoration: 'underline',
    textUnderlineOffset: 2
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1100,
      margin: '0 auto',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--papaya)',
      fontWeight: 600
    }
  }, t.contactEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 16px'
    }
  }, t.contactTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-light-muted)',
      lineHeight: 'var(--leading-body)',
      marginBottom: 32
    }
  }, t.contactLead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Directeur g\xE9n\xE9ral"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      color: 'var(--text-on-light)',
      fontWeight: 600
    }
  }, "Bouramala Yaya Sanogo"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Email : ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:sosaf.ci.export@gmail.com",
    style: link
  }, "sosaf.ci.export@gmail.com")), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "T\xE9l / WhatsApp : ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+22389134555",
    style: link
  }, "+223 89 13 45 55"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Directeur administratif et financier"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      color: 'var(--text-on-light)',
      fontWeight: 600
    }
  }, "Amadou Dioro Cisse"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "T\xE9l : ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+22390017373",
    style: link
  }, "+223 90 01 73 73"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Adresse"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "SOSAF-CI"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Abidjan, Cocody, Angr\xE9, 9\xE8me Tranche"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Lot N446B, \xCElot N20"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "23 BP 1099 Abidjan 23, C\xF4te d'Ivoire"))), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: () => window.open('https://wa.me/22389134555', '_blank')
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    size: 22,
    color: "#fff"
  }), " ", t.whatsapp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--palm)',
      fontWeight: 600,
      marginTop: 10
    }
  }, t.whatsappSub)), /*#__PURE__*/React.createElement(Reveal, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 20,
      margin: '0 0 20px'
    }
  }, t.formTitle), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--palm)',
      fontWeight: 600
    }
  }, t.formSent) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement(FormField, {
    label: t.nameLabel
  }, /*#__PURE__*/React.createElement(Input, {
    name: "name",
    required: true
  })), /*#__PURE__*/React.createElement(FormField, {
    label: t.emailLabel
  }, /*#__PURE__*/React.createElement(Input, {
    name: "email",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement(FormField, {
    label: t.messageLabel
  }, /*#__PURE__*/React.createElement(Textarea, {
    name: "message",
    required: true
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "_honeypot",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-9999px',
      width: 1,
      height: 1,
      opacity: 0
    }
  }), errors.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 16px',
      paddingLeft: 18,
      color: 'var(--papaya)',
      fontSize: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, errors.map(msg => /*#__PURE__*/React.createElement("li", {
    key: msg
  }, msg))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: sending,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, sending ? t.formSending : t.submit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-light-muted)',
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px solid var(--border-on-light)'
    }
  }, "RCCM : CI-ABJ-03-2024-B21-00015")))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FaqSection.jsx
try { (() => {
function FaqSection({
  t
}) {
  const {
    FaqAccordion
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, t.faqEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 0'
    }
  }, t.faqTitle))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(FaqAccordion, {
    items: t.faq.map(([q, a]) => ({
      q,
      a
    }))
  }))));
}
window.FaqSection = FaqSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FaqSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function FooterLink({
  label,
  href = '#',
  small
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? 'var(--mango)' : 'var(--text-on-dark-muted)',
      fontSize: small ? 12 : 13,
      textDecoration: 'none',
      transition: 'color var(--motion-fast) var(--ease-standard)',
      padding: '6px 2px',
      display: 'inline-block'
    }
  }, label);
}
function Footer({
  t,
  base = ''
}) {
  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq', 'contact'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark-muted)',
      padding: '40px clamp(16px,5vw,24px)',
      textAlign: 'center',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SITE_BASE || '') + '../../assets/logo.svg',
    alt: "SOSAF-CI",
    style: {
      height: 40,
      opacity: 0.7,
      marginBottom: 16,
      transition: 'opacity var(--motion-base) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.7;
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, t.nav.map((item, i) => /*#__PURE__*/React.createElement(FooterLink, {
    key: item,
    label: item,
    href: base + 'index.html#' + anchors[i]
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 18,
      flexWrap: 'wrap',
      marginBottom: 16,
      paddingTop: 12,
      borderTop: '1px solid var(--border-on-dark)',
      maxWidth: 620,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, (t.legal || []).map(([label, href]) => /*#__PURE__*/React.createElement(FooterLink, {
    key: href,
    small: true,
    label: label,
    href: base + href
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      margin: 0
    }
  }, t.footerNote), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      margin: '8px 0 0',
      opacity: 0.7
    }
  }, t.footerLegal));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  t
}) {
  const {
    Button
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1200,
      margin: '0 auto',
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      border: '1px solid oklch(from var(--mango) l c h / 0.3)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 24
    }
  }, t.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 24px'
    }
  }, t.h1a, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mango)',
      fontStyle: 'italic'
    }
  }, t.h1b), /*#__PURE__*/React.createElement("br", null), t.h1c), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, t.lead), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, t.cta1), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, t.cta2)))), /*#__PURE__*/React.createElement(Reveal, {
    from: "zoom",
    delay: 200,
    className: "hero-logo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SITE_BASE || '') + '../../assets/logo-hero.webp',
    alt: "SOSAF-CI \u2014 Fruits de C\xF4te d'Ivoire",
    width: "1120",
    height: "1120",
    decoding: "async",
    style: {
      width: '100%',
      maxWidth: 560,
      height: 'auto',
      display: 'block'
    }
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LegalPage.jsx
try { (() => {
function LegalPage({
  docKey
}) {
  const {
    Nav
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + '../../assets/';
  const L = window.LEGAL[lang];
  const doc = L.docs[docKey];
  const t = window.COPY[lang];
  const home = 'index.html';
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const links = t.nav.slice(0, -1).map((label, i) => ({
    label,
    href: home + '#' + ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'][i]
  }));
  const body = {
    fontSize: 16,
    lineHeight: 'var(--leading-body)',
    color: 'var(--text-on-light-muted)',
    margin: '0 0 14px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    logo: assets + 'logo.svg',
    links: links,
    cta: t.navCta,
    lang: otherLang,
    onLangToggle: () => {
      window.location.href = lang === 'fr' ? 'en/' + window.LEGAL.en.docs[docKey].slug + '.html' : '../' + window.LEGAL.fr.docs[docKey].slug + '.html';
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '72px clamp(16px,5vw,48px) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, doc.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,6vw,52px)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-tight)',
      margin: '12px 0 10px'
    }
  }, doc.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, doc.updated))), /*#__PURE__*/React.createElement("div", {
    className: "legal-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 56,
      maxWidth: 1100,
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) clamp(16px,5vw,48px) 96px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "legal-side",
    style: {
      position: 'sticky',
      top: 90,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, L.nav.map(item => {
    const active = item.key === docKey;
    return /*#__PURE__*/React.createElement("a", {
      key: item.key,
      href: item.href,
      style: {
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        textDecoration: 'none',
        color: active ? 'var(--text-on-light)' : 'var(--text-on-light-muted)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-md)',
        minHeight: 44,
        display: 'flex',
        alignItems: 'center',
        background: active ? 'var(--surface-card)' : 'transparent',
        border: active ? '1px solid var(--border-on-light)' : '1px solid transparent'
      }
    }, item.label);
  }), /*#__PURE__*/React.createElement("a", {
    href: home,
    style: {
      fontSize: 13,
      color: 'var(--papaya)',
      textDecoration: 'none',
      padding: '10px 14px',
      marginTop: 8,
      minHeight: 44,
      display: 'flex',
      alignItems: 'center'
    }
  }, L.back)), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-light)',
      marginBottom: 40
    }
  }, doc.intro), doc.sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.h,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(20px,3.5vw,26px)',
      fontWeight: 500,
      margin: '0 0 14px'
    }
  }, s.h), (s.p || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: body
  }, p)), s.dl && /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(150px,220px) 1fr',
      gap: '0',
      margin: '18px 0 0',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    },
    className: "legal-dl"
  }, s.dl.map(([k, v], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--palm)',
      fontWeight: 600,
      padding: '14px 16px',
      borderTop: i ? '1px solid var(--border-on-light)' : 'none'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontSize: 15,
      color: 'var(--text-on-light)',
      margin: 0,
      padding: '14px 16px',
      borderTop: i ? '1px solid var(--border-on-light)' : 'none'
    }
  }, v)))), s.ul && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '12px 0 0',
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, s.ul.map(li => /*#__PURE__*/React.createElement("li", {
    key: li,
    style: {
      fontSize: 16,
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light-muted)'
    }
  }, li))))))), /*#__PURE__*/React.createElement(window.Footer, {
    t: t
  }), /*#__PURE__*/React.createElement(window.WhatsAppFloat, null));
}
window.LegalPage = LegalPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LegalPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Lightbox.jsx
try { (() => {
function Lightbox({
  product,
  index,
  onClose,
  onPrev,
  onNext
}) {
  const {
    Icon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const [fade, setFade] = React.useState(false);
  React.useEffect(() => {
    setFade(true);
    const id = setTimeout(() => setFade(false), 40);
    return () => clearTimeout(id);
  }, [index, product]);
  React.useEffect(() => {
    if (!product) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, onClose, onPrev, onNext]);
  // Preload the neighbouring gallery images so next/prev feels instant.
  React.useEffect(() => {
    if (!product) return;
    const n = product.gallery.length;
    [(index + 1) % n, (index - 1 + n) % n].forEach(i => {
      const im = new Image();
      im.src = (window.SITE_BASE || '') + '../../assets/photography/' + product.gallery[i];
    });
  }, [product, index]);
  if (!product) return null;
  const src = (window.SITE_BASE || '') + '../../assets/photography/' + product.gallery[index];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'oklch(from var(--canopy) l c h / 0.94)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'oklch(from var(--ivory) l c h / 0.1)',
      border: '1px solid var(--border-on-dark)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "lightbox-row",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onPrev,
    "aria-label": "Pr\xE9c\xE9dent",
    style: {
      flex: '0 0 auto',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      background: 'oklch(from var(--canopy) l c h / 0.6)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-stage",
    style: {
      flex: '0 0 auto',
      width: 'min(70vw, 880px)',
      height: 'min(68vh, 620px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: product.name,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      objectFit: 'contain',
      opacity: fade ? 0 : 1,
      transition: 'opacity 220ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onNext,
    "aria-label": "Suivant",
    style: {
      flex: '0 0 auto',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      background: 'oklch(from var(--canopy) l c h / 0.6)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, index + 1, " / ", product.gallery.length, " \u2014 ", product.name));
}
window.Lightbox = Lightbox;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Lightbox.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Presentation.jsx
try { (() => {
function Presentation({
  t
}) {
  const {
    Reveal,
    CountUp
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1200,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--papaya)',
      fontWeight: 600
    }
  }, t.presEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 18px'
    }
  }, t.presTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light-muted)',
      margin: 0
    }
  }, t.presBody)), /*#__PURE__*/React.createElement("div", {
    className: "stats-row",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 40
    }
  }, t.stats.map(([num, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center',
      padding: 20,
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--palm)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: num
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-on-light-muted)'
    }
  }, label))))), /*#__PURE__*/React.createElement(Reveal, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-treated crop-4-5",
    style: {
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SITE_BASE || '') + '../../assets/photography/mangue-04.webp',
    alt: "R\xE9colte de mangues, C\xF4te d'Ivoire",
    loading: "lazy",
    decoding: "async"
  })))));
}
window.Presentation = Presentation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Presentation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProcessSection.jsx
try { (() => {
const PROCESS_ICONS = ['mail', 'file-text', 'check-circle-2', 'ship'];
function ProcessSection({
  t
}) {
  const {
    Icon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, t.processEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 0'
    }
  }, t.processTitle)), /*#__PURE__*/React.createElement("div", {
    className: "process-row",
    style: {
      display: 'flex',
      gap: 0,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, t.steps.map(([num, title, desc], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: num
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 110,
    from: "up"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      maxWidth: 240,
      textAlign: 'center',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--mango)',
      marginBottom: 12
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'oklch(from var(--mango) l c h / 0.1)',
      border: '1px solid oklch(from var(--mango) l c h / 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: 'var(--mango)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: PROCESS_ICONS[i],
    size: 26
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6,
      margin: 0
    }
  }, desc))), i < t.steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "process-connector",
    style: {
      width: 40,
      height: 2,
      background: 'var(--border-on-dark)',
      marginTop: 42,
      flexShrink: 0
    }
  }))))));
}
window.ProcessSection = ProcessSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProcessSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsSection.jsx
try { (() => {
function ProductsSection({
  t,
  products,
  onOpenGallery
}) {
  const {
    ProductCard
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "produits",
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, t.prodEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 14px'
    }
  }, t.prodTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 600,
      margin: '0 auto'
    }
  }, t.prodLead))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 24
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i * 90,
    from: "zoom"
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: p.image,
    name: p.name,
    subtitle: p.subtitle,
    fields: p.fields,
    certification: p.certification,
    photoCount: p.gallery.length,
    onOpenGallery: () => onOpenGallery(p)
  }))))));
}
window.ProductsSection = ProductsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reveal.jsx
try { (() => {
function Reveal({
  children,
  delay = 0,
  from = 'up',
  className
}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const offsets = {
    up: 'translateY(36px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    zoom: 'scale(0.94)'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : offsets[from],
      transition: `opacity 800ms var(--ease-out) ${delay}ms, transform 800ms var(--ease-out) ${delay}ms`,
      willChange: 'opacity, transform'
    }
  }, children);
}
function CountUp({
  value
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState('0');
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
    const suffix = String(value).replace(/[0-9]/g, '');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / 1300, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(eased * num) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, {
      threshold: 0.5
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, shown);
}
window.Reveal = Reveal;
window.CountUp = CountUp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reveal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhatsAppFloat.jsx
try { (() => {
function WhatsAppFloat({
  phone = '22389134555'
}) {
  const {
    Icon,
    WhatsAppIcon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: 'https://wa.me/' + phone,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "WhatsApp",
    className: "wa-float",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: '#25D366',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 500,
      boxShadow: hover ? '0 10px 28px rgba(37,211,102,0.45)' : '0 6px 18px rgba(37,211,102,0.3)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast), opacity var(--motion-fast)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    size: 30,
    color: "#fff"
  }));
}
window.WhatsAppFloat = WhatsAppFloat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhatsAppFloat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.jsx
try { (() => {
const COPY = {
  fr: {
    eyebrow: 'Catalogue Export',
    h1a: 'Fourniture continue de',
    h1b: 'fruits tropicaux',
    h1c: 'de qualité',
    lead: "SOSAF-CI, votre partenaire export basé à Abidjan, Côte d'Ivoire. Mangue, avocat, banane, ananas, noix de coco — du producteur au marché international, avec rigueur et traçabilité.",
    cta1: 'Découvrir nos produits →',
    cta2: 'Nous contacter',
    presEyebrow: 'Qui sommes-nous',
    presTitle: "SOSAF-CI — L'excellence du fruit ivoirien",
    presBody: "SOSAF-CI est une entreprise d'import-export basée à Abidjan, Côte d'Ivoire, spécialisée dans l'exportation de produits agricoles tropicaux vers le marché international. Forts de notre réseau de producteurs, coopératives et stations de conditionnement partenaires, nous assurons une fourniture régulière de fruits de qualité, conformes aux exigences du marché mondial.",
    stats: [['100%', 'Qualité garantie'], ['200+', 'Producteurs partenaires'], ['15+', 'Pays exportateurs']],
    prodEyebrow: 'Notre gamme',
    prodTitle: 'Produits exportés',
    prodLead: "Cinq fruits d'exception, cultivés sous le soleil de Côte d'Ivoire, sélectionnés avec soin pour les marchés les plus exigeants.",
    certEyebrow: 'Qualité',
    certTitle: 'Certifications et contrôle qualité',
    certBody: "SOSAF-CI travaille avec des coopératives et stations de conditionnement certifiées GlobalG.A.P. pour la mangue et la noix de coco, garantissant traçabilité et conformité aux exigences internationales.",
    certList: ['Contrôle qualité avant chaque expédition', 'Respect des normes export internationaux', 'Traçabilité complète, du champ au conteneur', 'Documents fournis selon la commande'],
    processEyebrow: 'Process',
    processTitle: 'Comment commander',
    steps: [['01', 'Contactez-nous', 'Par email ou WhatsApp, décrivez vos besoins : produits, volumes, destination.'], ['02', 'Devis sous 24h', 'Recevez une proposition détaillée avec prix et planning.'], ['03', 'Validation & préparation', 'Confirmation, paiement, sélection et conditionnement.'], ['04', 'Expédition', 'Maritime ou aérien, avec tous les documents export.']],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Tout savoir sur SOSAF-CI',
    faq: [['Quels produits exportez-vous ?', 'Mangue (Kent, Amélie), noix de coco, avocat (Hass, Fuerte), banane (Cavendish) et ananas (MD2, Pain de Sucre, Cayenne Lisse).'], ['Quelles certifications qualité possédez-vous ?', 'Nos partenaires disposent de la certification GlobalG.A.P., notamment pour la mangue et la noix de coco.'], ['Quels volumes minimum de commande ?', 'Nous répondons aux commandes par conteneur complet ou par palette, selon vos besoins.'], ['Quels sont les délais et modes d\u2019expédition ?', 'Maritime (10–20 jours, conteneurs réfrigérés) ou aérien (2–5 jours) selon la destination et l\u2019urgence.']],
    contactEyebrow: 'Contact',
    contactTitle: 'Parlons de votre projet',
    contactLead: 'Pour toute demande de cotation, partenariat commercial ou commande à l\u2019export, notre équipe est à votre disposition.',
    formTitle: 'Nous écrire',
    nameLabel: 'Votre nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Envoyer le message →',
    whatsapp: 'Discuter sur WhatsApp',
    whatsappSub: 'Réponse immédiate sur WhatsApp',
    navCta: 'Devis →',
    nav: ['Accueil', 'Présentation', 'Produits', 'Certifications', 'Process', 'FAQ', 'Contact'],
    legal: [['Mentions légales', 'mentions-legales.html'], ['Conditions générales de vente', 'cgv.html'], ['Politique de confidentialité', 'confidentialite.html']],
    footerNote: "© 2026 SOSAF-CI — Fourniture continue de fruits tropicaux depuis la Côte d'Ivoire.",
    footerLegal: "RCCM CI-ABJ-03-2024-B21-00015 · Abidjan, Côte d'Ivoire",
    formSent: '✓ Message envoyé — merci !',
    formSending: 'Envoi…',
    formError: "L'envoi a échoué. Réessayez ou écrivez-nous directement par email."
  },
  en: {
    eyebrow: 'Export Catalog',
    h1a: 'A continuous supply of',
    h1b: 'tropical fruit',
    h1c: 'you can trust',
    lead: 'SOSAF-CI, your export partner based in Abidjan, Ivory Coast. Mango, avocado, banana, pineapple, coconut — from grower to international market, with rigor and traceability.',
    cta1: 'Discover our products →',
    cta2: 'Contact us',
    presEyebrow: 'Who we are',
    presTitle: 'SOSAF-CI — Ivorian fruit at its best',
    presBody: 'SOSAF-CI is an import-export company based in Abidjan, Ivory Coast, specialized in exporting tropical agricultural products to the international market. Backed by our network of growers, cooperatives and packing stations, we ensure a steady supply of quality fruit that meets global market standards.',
    stats: [['100%', 'Guaranteed quality'], ['200+', 'Partner growers'], ['15+', 'Export countries']],
    prodEyebrow: 'Our range',
    prodTitle: 'Exported products',
    prodLead: 'Five exceptional fruits, grown under the Ivorian sun, carefully selected for the most demanding markets.',
    certEyebrow: 'Quality',
    certTitle: 'Certifications & quality control',
    certBody: 'SOSAF-CI works with GlobalG.A.P.-certified cooperatives and packing stations for mango and coconut, guaranteeing traceability and compliance with international requirements.',
    certList: ['Quality control before every shipment', 'Compliance with international export standards', 'Full traceability, from field to container', 'Documents provided per order'],
    processEyebrow: 'Process',
    processTitle: 'How to order',
    steps: [['01', 'Contact us', 'By email or WhatsApp, describe your needs: products, volumes, destination.'], ['02', 'Quote within 24h', 'Receive a detailed proposal with pricing and schedule.'], ['03', 'Confirmation & prep', 'Payment, selection and packing.'], ['04', 'Shipping', 'Sea or air freight, with all export documents.']],
    faqEyebrow: 'Frequently asked',
    faqTitle: 'Everything about SOSAF-CI',
    faq: [['Which products do you export?', 'Mango (Kent, Amélie), coconut, avocado (Hass, Fuerte), banana (Cavendish) and pineapple (MD2, Sugarloaf, Smooth Cayenne).'], ['What quality certifications do you have?', 'Our partners hold GlobalG.A.P. certification, notably for mango and coconut.'], ['What is the minimum order volume?', 'We handle full-container orders as well as pallet-level orders, based on your needs.'], ['What are the shipping times and modes?', 'Sea freight (10–20 days, reefer containers) or air freight (2–5 days) depending on destination and urgency.']],
    contactEyebrow: 'Contact',
    contactTitle: "Let's talk about your project",
    contactLead: 'For any quote request, business partnership or export order, our team is at your disposal.',
    formTitle: 'Write to us',
    nameLabel: 'Your name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Send message →',
    whatsapp: 'Chat on WhatsApp',
    whatsappSub: 'Immediate reply on WhatsApp',
    navCta: 'Get a quote →',
    nav: ['Home', 'About', 'Products', 'Certifications', 'Process', 'FAQ', 'Contact'],
    legal: [['Legal notice', 'legal-notice.html'], ['Terms and conditions of sale', 'terms.html'], ['Privacy policy', 'privacy.html']],
    footerNote: '© 2026 SOSAF-CI — A continuous supply of tropical fruit from Ivory Coast.',
    footerLegal: 'RCCM CI-ABJ-03-2024-B21-00015 · Abidjan, Ivory Coast',
    formSent: '✓ Message sent — thank you!',
    formSending: 'Sending…',
    formError: 'Sending failed. Please try again or email us directly.'
  }
};
const B = (window.SITE_BASE || '') + '../../assets/photography/';
const PRODUCTS_FR = [{
  id: 'mango',
  image: B + 'mangue-01.webp',
  gallery: ['mangue-01.webp', 'mangue-02.webp', 'mangue-03.webp', 'mangue-04.webp', 'mangue-05.webp'],
  name: 'Mangue',
  subtitle: "Origine Côte d'Ivoire · Variétés Kent et Amélie",
  fields: [{
    label: 'Variétés',
    value: 'Kent, Amélie'
  }, {
    label: 'Saison',
    value: 'Mars – Juillet'
  }, {
    label: 'Calibre',
    value: '6–12'
  }, {
    label: 'Conditionnement',
    value: 'Carton 4–6 kg'
  }],
  certification: 'GlobalG.A.P.'
}, {
  id: 'coconut',
  image: B + 'coco-02.webp',
  gallery: ['coco-02.webp', 'coco-01.webp', 'coco-03-sacs.webp', 'coco-04-conteneur.webp'],
  name: 'Noix de Coco',
  subtitle: "Origine Côte d'Ivoire · Variété Grand Africa Ouest",
  fields: [{
    label: 'Variété',
    value: 'Grand Africa Ouest'
  }, {
    label: 'Type',
    value: 'Fraîche, Sèche'
  }, {
    label: 'Conditionnement',
    value: 'Sac de 21 kg'
  }],
  certification: 'GlobalG.A.P.'
}, {
  id: 'avocado',
  image: B + 'avocat-04-carton.webp',
  gallery: ['avocat-04-carton.webp', 'avocat-03-carton.webp'],
  name: 'Avocat',
  subtitle: "Origine Côte d'Ivoire · Variétés Hass et Fuerte",
  fields: [{
    label: 'Variétés',
    value: 'Hass, Fuerte'
  }, {
    label: 'Calibre',
    value: '16–22'
  }, {
    label: 'Saison',
    value: "Toute l'année"
  }]
}, {
  id: 'banana',
  image: B + 'banane-02.webp',
  gallery: ['banane-02.webp', 'banane-03-cartons.webp'],
  name: 'Banane',
  subtitle: "Origine Côte d'Ivoire · Variété Cavendish",
  fields: [{
    label: 'Variété',
    value: 'Cavendish'
  }, {
    label: 'Conditionnement',
    value: 'Carton kraft 18.5 kg'
  }]
}, {
  id: 'pineapple',
  image: B + 'ananas-01.webp',
  gallery: ['ananas-01.webp', 'ananas-02.webp', 'ananas-03.webp', 'ananas-04.webp'],
  name: 'Ananas',
  subtitle: "Origine Côte d'Ivoire · Variétés MD2, Cayenne Lisse",
  fields: [{
    label: 'Variétés',
    value: 'MD2, Cayenne Lisse'
  }, {
    label: 'Calibre',
    value: '6–12'
  }, {
    label: 'Conditionnement',
    value: 'Carton 12 kg'
  }]
}];
const EN_OVERRIDES = {
  mango: {
    name: 'Mango',
    subtitle: "Origin Ivory Coast · Kent and Amélie varieties",
    fields: [{
      label: 'Varieties',
      value: 'Kent, Amélie'
    }, {
      label: 'Season',
      value: 'March – July'
    }, {
      label: 'Size',
      value: '6–12'
    }, {
      label: 'Packing',
      value: '4–6 kg carton'
    }]
  },
  coconut: {
    name: 'Coconut',
    subtitle: 'Origin Ivory Coast · West Africa Tall variety',
    fields: [{
      label: 'Variety',
      value: 'West Africa Tall'
    }, {
      label: 'Type',
      value: 'Fresh, Dried'
    }, {
      label: 'Packing',
      value: '21 kg bag'
    }]
  },
  avocado: {
    name: 'Avocado',
    subtitle: 'Origin Ivory Coast · Hass and Fuerte varieties',
    fields: [{
      label: 'Varieties',
      value: 'Hass, Fuerte'
    }, {
      label: 'Size',
      value: '16–22'
    }, {
      label: 'Season',
      value: 'Year-round'
    }]
  },
  banana: {
    name: 'Banana',
    subtitle: 'Origin Ivory Coast · Cavendish variety',
    fields: [{
      label: 'Variety',
      value: 'Cavendish'
    }, {
      label: 'Packing',
      value: '18.5 kg kraft carton'
    }]
  },
  pineapple: {
    name: 'Pineapple',
    subtitle: 'Origin Ivory Coast · MD2, Smooth Cayenne varieties',
    fields: [{
      label: 'Varieties',
      value: 'MD2, Smooth Cayenne'
    }, {
      label: 'Size',
      value: '6–12'
    }, {
      label: 'Packing',
      value: '12 kg carton'
    }]
  }
};
const PRODUCTS_EN = PRODUCTS_FR.map(p => ({
  ...p,
  ...EN_OVERRIDES[p.id]
}));
window.COPY = COPY;
window.PRODUCTS_FR = PRODUCTS_FR;
window.PRODUCTS_EN = PRODUCTS_EN;
window.PRODUCTS = {
  fr: PRODUCTS_FR,
  en: PRODUCTS_EN
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/legal-content.jsx
try { (() => {
// Documents légaux SOSAF-CI. À faire relire par un conseil juridique avant mise en ligne.
const LEGAL_DOCS = {
  mentions: {
    slug: 'mentions-legales',
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : août 2026',
    intro: "Conformément aux dispositions légales en vigueur en République de Côte d'Ivoire, les informations suivantes sont portées à la connaissance des utilisateurs du site sosaf-ci.com.",
    sections: [{
      h: "Éditeur du site",
      p: ["Le présent site est édité par SOSAF-CI, société d'import-export de produits agricoles tropicaux."],
      dl: [['Dénomination sociale', 'SOSAF-CI'], ['Forme juridique', 'SARL'], ['Capital social', '1 000 000 FCFA'], ['Siège social', "Abidjan, Cocody, Angré, 9ème Tranche — Lot N446B, Îlot N20 — 23 BP 1099 Abidjan 23, Côte d'Ivoire"], ['RCCM', 'CI-ABJ-03-2024-B21-00015'], ['Centre des impôts de rattachement', 'SAID II Plateaux — Djibi'], ['Agence CNPS de rattachement', 'Cocody'], ['Directeur de la publication', 'Bouramala Yaya Sanogo, Directeur général'], ['Email', 'sosaf.ci.export@gmail.com'], ['Téléphone', '+223 89 13 45 55']]
    }, {
      h: "Hébergement",
      p: ["Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com."]
    }, {
      h: "Propriété intellectuelle",
      p: ["L'ensemble des éléments composant le site — textes, photographies, logotype, charte graphique, illustrations et structure — est la propriété exclusive de SOSAF-CI ou de ses partenaires, et est protégé par la législation ivoirienne et internationale relative à la propriété intellectuelle.", "Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sur quelque support que ce soit, est interdite sans autorisation écrite préalable de SOSAF-CI."]
    }, {
      h: "Responsabilité",
      p: ["SOSAF-CI s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur le site. Les caractéristiques produits, calibres, saisons et conditionnements sont donnés à titre indicatif et peuvent varier selon les récoltes et les campagnes.", "Seules les informations figurant sur un devis ou une confirmation de commande signés par SOSAF-CI ont valeur contractuelle.", "SOSAF-CI ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qui y figurent."]
    }, {
      h: "Liens externes",
      p: ["Le site peut contenir des liens vers des sites tiers. SOSAF-CI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu."]
    }, {
      h: "Droit applicable",
      p: ["Le présent site et les présentes mentions légales sont soumis au droit ivoirien. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des tribunaux d'Abidjan."]
    }]
  },
  cgv: {
    slug: 'cgv',
    eyebrow: 'Conditions',
    title: 'Conditions générales de vente',
    updated: 'Dernière mise à jour : août 2026',
    intro: "Les présentes conditions générales de vente régissent les relations entre SOSAF-CI, société d'import-export établie à Abidjan, et ses clients professionnels dans le cadre de la vente à l'export de fruits tropicaux.",
    sections: [{
      h: '1. Champ d\u2019application',
      p: ["Les présentes conditions s'appliquent à toute commande passée auprès de SOSAF-CI par un acheteur professionnel. Toute commande implique l'acceptation sans réserve des présentes conditions, qui prévalent sur les conditions d'achat de l'acheteur, sauf accord écrit contraire."]
    }, {
      h: '2. Produits',
      p: ["SOSAF-CI commercialise des fruits tropicaux frais d'origine Côte d'Ivoire : mangue (Kent, Amélie), noix de coco, avocat (Hass, Fuerte), banane (Cavendish) et ananas (MD2, Cayenne Lisse, Pain de Sucre).", "Les calibres, variétés, saisons et conditionnements indiqués sur le site le sont à titre indicatif. La disponibilité effective dépend des campagnes de récolte et des conditions agroclimatiques."]
    }, {
      h: '3. Commandes et devis',
      p: ["Toute demande donne lieu à l'établissement d'un devis détaillé, transmis sous 24 heures ouvrées. Le devis précise les produits, volumes, calibres, conditionnements, prix unitaires, incoterm applicable, délais et modalités de paiement.", "La vente est réputée conclue à réception par SOSAF-CI du devis signé par l'acheteur et de l'acompte prévu. SOSAF-CI se réserve le droit de refuser toute commande pour motif légitime."]
    }, {
      h: '4. Prix et incoterms',
      p: ["Les prix sont exprimés hors taxes, dans la devise indiquée au devis, et s'entendent selon l'incoterm convenu (Incoterms® 2020), le plus souvent FOB Abidjan ou CFR port de destination.", "Les prix sont fermes pour la durée de validité du devis. Au-delà, ils sont susceptibles de révision en fonction des cours, des coûts de fret et des charges portuaires."]
    }, {
      h: '5. Paiement',
      p: ["Sauf accord particulier, les commandes sont réglées selon les modalités précisées au devis : acompte à la commande et solde avant embarquement, virement bancaire, ou crédit documentaire irrévocable.", "Tout retard de paiement entraîne de plein droit l'application de pénalités de retard au taux légal en vigueur, sans qu'un rappel soit nécessaire, ainsi que la suspension des expéditions en cours."]
    }, {
      h: '6. Qualité, contrôle et certifications',
      p: ["Chaque lot fait l'objet d'un contrôle qualité avant expédition. SOSAF-CI travaille avec des coopératives et stations de conditionnement certifiées GlobalG.A.P. pour la mangue et la noix de coco.", "Les documents accompagnant l'expédition (certificat phytosanitaire, certificat d'origine, liste de colisage, facture commerciale, connaissement) sont fournis selon la nature de la commande et la destination."]
    }, {
      h: '7. Expédition et transfert des risques',
      p: ["Les expéditions sont réalisées par voie maritime en conteneurs réfrigérés (10 à 20 jours) ou par voie aérienne (2 à 5 jours), selon la destination et l'urgence.", "Le transfert des risques s'opère conformément à l'incoterm convenu. Les délais d'acheminement sont donnés à titre indicatif ; SOSAF-CI ne saurait être tenue responsable des retards imputables au transporteur, aux autorités portuaires ou douanières, ou à un cas de force majeure."]
    }, {
      h: '8. Réclamations',
      p: ["Toute réclamation relative à la qualité ou à la conformité de la marchandise doit être notifiée par écrit dans un délai de 48 heures suivant le déchargement, accompagnée d'un rapport d'expertise et de photographies datées.", "S'agissant de produits frais et périssables, aucune réclamation ne sera recevable au-delà de ce délai ou en cas de rupture de la chaîne du froid après transfert des risques."]
    }, {
      h: '9. Force majeure',
      p: ["SOSAF-CI ne saurait être tenue responsable de l'inexécution de ses obligations en cas de force majeure : intempéries exceptionnelles, épidémie végétale, grève portuaire, fermeture de frontière, décision administrative ou tout événement échappant à son contrôle raisonnable."]
    }, {
      h: '10. Droit applicable et litiges',
      p: ["Les présentes conditions sont soumises au droit ivoirien. En cas de litige, les parties rechercheront une solution amiable. À défaut d'accord, compétence exclusive est attribuée aux tribunaux d'Abidjan."]
    }]
  },
  confidentialite: {
    slug: 'confidentialite',
    eyebrow: 'Données personnelles',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : août 2026',
    intro: "SOSAF-CI attache une importance particulière à la protection des données personnelles de ses clients, prospects et visiteurs. La présente politique décrit les données collectées, leur usage et les droits dont vous disposez.",
    sections: [{
      h: 'Responsable du traitement',
      p: ["Le responsable du traitement est SOSAF-CI, dont le siège social est situé à Abidjan, Cocody, Angré, 9ème Tranche — Lot N446B, Îlot N20, 23 BP 1099 Abidjan 23, Côte d'Ivoire.", "Pour toute question relative à vos données : sosaf.ci.export@gmail.com."]
    }, {
      h: 'Données collectées',
      p: ["Nous ne collectons que les données strictement nécessaires au traitement de votre demande :"],
      ul: ["Identité et coordonnées professionnelles : nom, adresse email, numéro de téléphone, société et pays.", "Contenu de votre message : nature de la demande, produits, volumes et destination.", "Données techniques de connexion : adresse IP, type de navigateur, pages consultées, à des fins de sécurité et de mesure d'audience."]
    }, {
      h: 'Finalités et bases légales',
      p: ["Les données sont traitées pour répondre à vos demandes de devis et de renseignement, établir et exécuter les contrats commerciaux, assurer le suivi de la relation client et satisfaire à nos obligations légales, comptables et douanières.", "Les traitements reposent selon les cas sur votre consentement, sur l'exécution de mesures précontractuelles ou contractuelles, ou sur notre intérêt légitime à développer notre activité."]
    }, {
      h: 'Destinataires',
      p: ["Les données sont destinées aux équipes commerciales et administratives de SOSAF-CI. Elles peuvent être communiquées à nos partenaires logistiques, transitaires, transporteurs et établissements bancaires lorsque l'exécution de la commande l'exige, ainsi qu'aux autorités administratives et douanières sur réquisition.", "SOSAF-CI ne vend ni ne loue vos données à des tiers."]
    }, {
      h: 'Durée de conservation',
      p: ["Les demandes de contact non suivies d'une relation commerciale sont conservées trois ans à compter du dernier échange. Les données liées à une commande sont conservées pendant la durée de la relation commerciale, puis archivées conformément aux délais légaux de conservation comptable et douanière."]
    }, {
      h: 'Sécurité',
      p: ["SOSAF-CI met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données contre la perte, l'altération et l'accès non autorisé : accès restreint aux personnes habilitées, connexions chiffrées, sauvegardes régulières."]
    }, {
      h: 'Cookies',
      p: ["Le site utilise des cookies strictement nécessaires à son fonctionnement, ainsi que, le cas échéant, des cookies de mesure d'audience. Vous pouvez configurer votre navigateur pour les refuser ; certaines fonctionnalités peuvent alors être dégradées."]
    }, {
      h: 'Vos droits',
      p: ["Conformément à la loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel en Côte d'Ivoire, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de limitation du traitement de vos données, ainsi que d'un droit à la portabilité.", "Ces droits s'exercent par simple demande à sosaf.ci.export@gmail.com, accompagnée d'un justificatif d'identité. Une réponse vous sera apportée dans un délai d'un mois.", "Vous pouvez également introduire une réclamation auprès de l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)."]
    }, {
      h: 'Modifications',
      p: ["SOSAF-CI se réserve le droit de modifier la présente politique afin de l'adapter aux évolutions légales ou à ses pratiques. La date de dernière mise à jour figure en tête de document."]
    }]
  }
};
const LEGAL_DOCS_EN = {
  mentions: {
    slug: 'legal-notice',
    eyebrow: 'Legal information',
    title: 'Legal notice',
    updated: 'Last updated: August 2026',
    intro: 'In accordance with the legal provisions in force in the Republic of Côte d\u2019Ivoire, the following information is made available to users of sosafci-export.com.',
    sections: [{
      h: 'Site publisher',
      p: ['This site is published by SOSAF-CI, an import-export company dealing in tropical agricultural products.'],
      dl: [['Company name', 'SOSAF-CI'], ['Legal form', 'SARL (limited liability company)'], ['Share capital', 'XOF 1,000,000'], ['Registered office', 'Abidjan, Cocody, Angré, 9th Tranche — Lot N446B, Ïlot N20 — 23 BP 1099 Abidjan 23, Ivory Coast'], ['Trade register (RCCM)', 'CI-ABJ-03-2024-B21-00015'], ['Tax office', 'SAID II Plateaux — Djibi'], ['CNPS branch', 'Cocody'], ['Publication director', 'Bouramala Yaya Sanogo, Managing Director'], ['Email', 'sosaf.ci.export@gmail.com'], ['Phone', '+223 89 13 45 55']]
    }, {
      h: 'Hosting',
      p: ['The site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States — vercel.com.']
    }, {
      h: 'Intellectual property',
      p: ['All elements making up the site — texts, photographs, logotype, graphic identity, illustrations and structure — are the exclusive property of SOSAF-CI or its partners, and are protected by Ivorian and international intellectual property law.', 'Any reproduction, representation, adaptation or exploitation, in whole or in part, on any medium whatsoever, is prohibited without the prior written consent of SOSAF-CI.']
    }, {
      h: 'Liability',
      p: ['SOSAF-CI endeavours to keep the information published on the site accurate and up to date. Product characteristics, sizes, seasons and packing formats are indicative and may vary with each harvest and campaign.', 'Only the information appearing on a quotation or order confirmation signed by SOSAF-CI is contractually binding.', 'SOSAF-CI cannot be held liable for any direct or indirect damage resulting from access to the site or from the use of the information it contains.']
    }, {
      h: 'External links',
      p: ['The site may contain links to third-party sites. SOSAF-CI exercises no control over those sites and accepts no responsibility for their content.']
    }, {
      h: 'Governing law',
      p: ['This site and this legal notice are governed by Ivorian law. Any dispute relating to their interpretation or performance falls within the jurisdiction of the courts of Abidjan.']
    }]
  },
  cgv: {
    slug: 'terms',
    eyebrow: 'Terms',
    title: 'Terms and conditions of sale',
    updated: 'Last updated: August 2026',
    intro: 'These terms and conditions govern the relationship between SOSAF-CI, an import-export company established in Abidjan, and its business customers in connection with the export sale of tropical fruit.',
    sections: [{
      h: '1. Scope',
      p: ['These terms apply to every order placed with SOSAF-CI by a business buyer. Placing an order implies unreserved acceptance of these terms, which prevail over the buyer\u2019s own purchasing terms unless otherwise agreed in writing.']
    }, {
      h: '2. Products',
      p: ['SOSAF-CI sells fresh tropical fruit originating from Ivory Coast: mango (Kent, Amélie), coconut, avocado (Hass, Fuerte), banana (Cavendish) and pineapple (MD2, Smooth Cayenne, Sugarloaf).', 'The sizes, varieties, seasons and packing formats shown on the site are indicative. Actual availability depends on harvest campaigns and agroclimatic conditions.']
    }, {
      h: '3. Orders and quotations',
      p: ['Every enquiry gives rise to a detailed quotation, issued within 24 working hours. The quotation states the products, volumes, sizes, packing, unit prices, applicable incoterm, lead times and payment terms.', 'The sale is concluded when SOSAF-CI receives the quotation signed by the buyer together with the agreed deposit. SOSAF-CI reserves the right to decline any order on legitimate grounds.']
    }, {
      h: '4. Prices and incoterms',
      p: ['Prices are quoted excluding tax, in the currency stated on the quotation, under the agreed incoterm (Incoterms® 2020), most commonly FOB Abidjan or CFR port of destination.', 'Prices are firm for the validity period of the quotation. Beyond that period they may be revised in line with market rates, freight costs and port charges.']
    }, {
      h: '5. Payment',
      p: ['Unless otherwise agreed, orders are settled as stated on the quotation: deposit on order and balance before shipment, bank transfer, or irrevocable documentary credit.', 'Late payment automatically triggers late-payment interest at the statutory rate, without the need for a reminder, and the suspension of any shipments in progress.']
    }, {
      h: '6. Quality, inspection and certification',
      p: ['Every lot is quality-inspected before shipment. SOSAF-CI works with GlobalG.A.P.-certified cooperatives and packing stations for mango and coconut.', 'The documents accompanying the shipment (phytosanitary certificate, certificate of origin, packing list, commercial invoice, bill of lading) are supplied according to the nature of the order and the destination.']
    }, {
      h: '7. Shipment and transfer of risk',
      p: ['Shipments are made by sea in reefer containers (10 to 20 days) or by air (2 to 5 days), depending on destination and urgency.', 'Risk transfers in accordance with the agreed incoterm. Transit times are indicative; SOSAF-CI cannot be held liable for delays attributable to the carrier, port or customs authorities, or to force majeure.']
    }, {
      h: '8. Claims',
      p: ['Any claim relating to the quality or conformity of the goods must be notified in writing within 48 hours of discharge, together with a survey report and dated photographs.', 'As these are fresh, perishable goods, no claim will be admissible after that period or where the cold chain has been broken after the transfer of risk.']
    }, {
      h: '9. Force majeure',
      p: ['SOSAF-CI cannot be held liable for failure to perform its obligations in the event of force majeure: exceptional weather, plant disease outbreak, port strike, border closure, administrative decision or any event beyond its reasonable control.']
    }, {
      h: '10. Governing law and disputes',
      p: ['These terms are governed by Ivorian law. In the event of a dispute, the parties will seek an amicable settlement. Failing agreement, exclusive jurisdiction is granted to the courts of Abidjan.']
    }]
  },
  confidentialite: {
    slug: 'privacy',
    eyebrow: 'Personal data',
    title: 'Privacy policy',
    updated: 'Last updated: August 2026',
    intro: 'SOSAF-CI attaches particular importance to protecting the personal data of its customers, prospects and visitors. This policy describes the data we collect, how we use it and the rights available to you.',
    sections: [{
      h: 'Data controller',
      p: ['The data controller is SOSAF-CI, whose registered office is at Abidjan, Cocody, Angré, 9th Tranche — Lot N446B, Ïlot N20, 23 BP 1099 Abidjan 23, Ivory Coast.', 'For any question about your data: sosaf.ci.export@gmail.com.']
    }, {
      h: 'Data collected',
      p: ['We collect only the data strictly necessary to handle your request:'],
      ul: ['Identity and business contact details: name, email address, telephone number, company and country.', 'The content of your message: nature of the request, products, volumes and destination.', 'Technical connection data: IP address, browser type, pages viewed, for security and audience measurement.']
    }, {
      h: 'Purposes and legal bases',
      p: ['Data is processed to respond to your quotation and information requests, to establish and perform commercial contracts, to manage the customer relationship and to meet our legal, accounting and customs obligations.', 'Processing rests, depending on the case, on your consent, on pre-contractual or contractual measures, or on our legitimate interest in developing our business.']
    }, {
      h: 'Recipients',
      p: ['Data is intended for the commercial and administrative teams of SOSAF-CI. It may be shared with our logistics partners, freight forwarders, carriers and banks where the performance of the order requires it, and with administrative and customs authorities upon lawful request.', 'SOSAF-CI neither sells nor rents your data to third parties.']
    }, {
      h: 'Retention period',
      p: ['Contact enquiries not followed by a commercial relationship are kept for three years from the last exchange. Data linked to an order is kept for the duration of the commercial relationship, then archived in line with statutory accounting and customs retention periods.']
    }, {
      h: 'Security',
      p: ['SOSAF-CI implements appropriate technical and organisational measures to protect data against loss, alteration and unauthorised access: access restricted to authorised staff, encrypted connections, regular backups.']
    }, {
      h: 'Cookies',
      p: ['The site uses cookies strictly necessary for its operation and, where applicable, audience-measurement cookies. You may configure your browser to refuse them; some features may then be degraded.']
    }, {
      h: 'Your rights',
      p: ['Under law no. 2013-450 of 19 June 2013 on the protection of personal data in Ivory Coast, you have the right to access, rectify, erase, object to and restrict the processing of your data, as well as a right to data portability.', 'These rights may be exercised by simple request to sosaf.ci.export@gmail.com, accompanied by proof of identity. You will receive a reply within one month.', 'You may also lodge a complaint with the Ivorian Telecommunications/ICT Regulatory Authority (ARTCI).']
    }, {
      h: 'Changes',
      p: ['SOSAF-CI reserves the right to amend this policy to reflect legal developments or changes in its practices. The date of the latest update appears at the top of the document.']
    }]
  }
};
const LEGAL_NAV = [{
  key: 'mentions',
  label: 'Mentions légales',
  href: 'mentions-legales.html'
}, {
  key: 'cgv',
  label: 'CGV',
  href: 'cgv.html'
}, {
  key: 'confidentialite',
  label: 'Confidentialité',
  href: 'confidentialite.html'
}];
const LEGAL_NAV_EN = [{
  key: 'mentions',
  label: 'Legal notice',
  href: 'legal-notice.html'
}, {
  key: 'cgv',
  label: 'Terms of sale',
  href: 'terms.html'
}, {
  key: 'confidentialite',
  label: 'Privacy',
  href: 'privacy.html'
}];
window.LEGAL_DOCS = LEGAL_DOCS;
window.LEGAL_NAV = LEGAL_NAV;
window.LEGAL = {
  fr: {
    docs: LEGAL_DOCS,
    nav: LEGAL_NAV,
    back: '← Retour au site'
  },
  en: {
    docs: LEGAL_DOCS_EN,
    nav: LEGAL_NAV_EN,
    back: '← Back to the site'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/legal-content.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CertificationBadge = __ds_scope.CertificationBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.FaqAccordion = __ds_scope.FaqAccordion;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.WhatsAppIcon = __ds_scope.WhatsAppIcon;

__ds_ns.Nav = __ds_scope.Nav;

})();
