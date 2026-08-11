const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// createClient('' , '') lève "supabaseUrl is required." en supabase-js v2 : le warn
// ci-dessous laissait croire à une dégradation douce alors que l'import plantait, ce qui
// faisait répondre 500 à /api/contact au lieu d'envoyer quand même l'email.
let supabase = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });
} else {
  console.warn('[SUPABASE] Missing environment variables — persistence disabled');
}

module.exports = { supabase };
