const { Resend } = require('resend');
const { supabase } = require('../lib/supabase');

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Helpers ────────────────────────────────────────
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

// ─── Rate limiting simple (in-memory pour serverless) ─
const rateMap = new Map();
const RATE_WINDOW = 15 * 60 * 1000; // 15 min
const RATE_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count++;
  if (entry.count > RATE_MAX) return true;
  return false;
}

// ─── Handler ────────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS — restrict to same origin
  const allowedOrigins = [
    'https://sosafci-export.com',
    'https://www.sosafci-export.com',
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''
  ].filter(Boolean);
  const origin = req.headers.origin || '';
  if (allowedOrigins.some(o => origin.startsWith(o)) || origin.includes('vercel.app')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, errors: ['Méthode non autorisée.'] });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      errors: ['Trop de messages envoyés. Réessayez dans 15 minutes.'],
    });
  }

  try {
    const body = req.body || {};
    const { name, email, message, _honeypot } = body;

    // Honeypot
    if (_honeypot) {
      console.log('[SPAM] Bot détecté via honeypot — IP:', ip);
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

    // 🔥 Sauvegarde dans Supabase (en parallèle avec l'email)
    const supabasePromise = supabase.from('messages').insert({
      name: cleanName,
      email: cleanEmail,
      body: cleanMessage,
      status: 'unread'
    });

    // Envoi email via Resend
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeMessage = escapeHtml(cleanMessage);

    const emailPromise = resend.emails.send({
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

    // Attendre les deux opérations
    const [emailResult, supabaseResult] = await Promise.allSettled([emailPromise, supabasePromise]);

    // Vérifier le résultat de l'email
    if (emailResult.status === 'rejected') {
      console.error('[CONTACT] Resend error:', emailResult.reason);
      // On a quand même sauvegardé dans Supabase — utile pour le dashboard
      return res.status(500).json({
        success: false,
        errors: ["Erreur lors de l'envoi. Veuillez réessayer."],
      });
    }

    const { data, error } = emailResult.value;
    if (error) {
      console.error('[CONTACT] Resend error:', error);
      return res.status(500).json({
        success: false,
        errors: ["Erreur lors de l'envoi. Veuillez réessayer."],
      });
    }

    // Log du résultat Supabase (pas bloquant)
    if (supabaseResult.status === 'fulfilled') {
      console.log(`[CONTACT] ✓ Message sauvegardé dans Supabase — ${cleanName}`);
    } else {
      console.warn('[CONTACT] Supabase save failed:', supabaseResult.reason);
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
};
