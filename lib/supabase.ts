import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or Key is missing. Check your environment variables.');
}

// Pass fetch explicitly for Edge/Cloudflare Workers compatibility
// (avoids issues with the default cross-fetch polyfill)
export const supabase = createClient(supabaseUrl || '', supabaseKey || '', {
  global: {
    fetch: (...args) => fetch(...args),
  },
});
