require('dotenv').config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Resend client ──────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Security headers ───────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // Le site utilise des images Unsplash + Google Fonts
  crossOriginEmbedderPolicy: false,
}));

// ─── CORS ───────────────────────────────────────────
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://sosafci-export.com', 'https://www.sosafci-export.com']
    : '*',
}));

// ─── Body parser ────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ─── Rate limiting — anti-spam pour le formulaire ───
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requêtes par IP par fenêtre
  message: {
    success: false,
    errors: ['Trop de messages envoyés. Réessayez dans 15 minutes.'],
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── Servir le site statique (100% identique) ───────
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
  etag: true,
}));

// ─── Validation & sanitization helpers ──────────────
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/<[^>]*>/g, '').slice(0, 2000);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─── API : POST /api/contact ────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, message, _honeypot } = req.body;

    // Honeypot — si ce champ caché est rempli, c'est un bot
    if (_honeypot) {
      console.log('[SPAM] Bot détecté via honeypot — IP:', req.ip);
      return res.json({ success: true });
    }

    // Validation
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanMessage = sanitize(message);

    const errors = [];
    if (!cleanName || cleanName.length < 2) {
      errors.push('Le nom est requis (minimum 2 caractères).');
    }
    if (!cleanEmail || !validateEmail(cleanEmail)) {
      errors.push('Un email valide est requis.');
    }
    if (!cleanMessage || cleanMessage.length < 10) {
      errors.push('Le message est requis (minimum 10 caractères).');
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Escape pour injection HTML dans le template email
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage);

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'SOSAF-CI <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL_TO || 'm.sanogo@sosafsarl.com'],
      replyTo: cleanEmail,
      subject: `[SOSAF-CI] Nouveau message de ${safeName}`,
      html: `
        <div style="font-family: -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #001e2b; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #00ed64; margin: 0; font-size: 20px;">Nouveau message — SOSAF-CI</h1>
          </div>
          <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 80px;">Nom</td>
                <td style="padding: 8px 0; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #00684a;">${safeEmail}</a></td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;">
            <div style="white-space: pre-wrap; line-height: 1.6; color: #1a1a1a;">${safeMessage}</div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            Envoyé depuis le formulaire de contact sosafci-export.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('[CONTACT] Resend error:', error);
      return res.status(500).json({
        success: false,
        errors: ['Erreur lors de l\'envoi. Veuillez réessayer.'],
      });
    }

    console.log(`[CONTACT] ✓ Email envoyé — ${cleanName} <${cleanEmail}> — ID: ${data?.id}`);
    return res.json({ success: true });

  } catch (err) {
    console.error('[CONTACT] Server error:', err);
    return res.status(500).json({
      success: false,
      errors: ['Erreur serveur. Veuillez réessayer plus tard.'],
    });
  }
});

// ─── 404 pour les routes API inexistantes ───────────
app.all('/api/*', (req, res) => {
  res.status(404).json({ success: false, errors: ['Route non trouvée.'] });
});

// ─── Fallback → index.html ──────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ─── Start ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  🥭 SOSAF-CI server running`);
  console.log(`  → http://localhost:${PORT}`);
  console.log(`  → Environment: ${process.env.NODE_ENV || 'development'}\n`);
});
