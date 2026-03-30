export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { createSession } from '@/lib/session';

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and valid OTP are required' }, { status: 400 });
    }

    // Find the latest active OTP for this email
    const { data, error } = await supabase
      .from('icvk_otps')
      .select('*')
      .eq('email', email)
      .eq('otp', String(otp))
      .eq('verified', false)
      .gte('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      // If none found, or error (e.g., no rows returned)
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }

    // Mark as verified so it can't be reused
    await supabase
      .from('icvk_otps')
      .update({ verified: true })
      .eq('id', data.id);

    // Create session cookie
    await createSession(email);

    return NextResponse.json({ message: 'Verified successfully', email: email });
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
