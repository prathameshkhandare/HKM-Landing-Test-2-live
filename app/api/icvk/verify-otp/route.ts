export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { createSessionOnResponse } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and valid OTP are required' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const now = new Date().toISOString();

    // Find latest valid OTP via direct REST API
    const queryParams = new URLSearchParams({
      select: '*',
      email: `eq.${email}`,
      otp: `eq.${String(otp)}`,
      verified: 'eq.false',
      expires_at: `gte.${now}`,
      order: 'created_at.desc',
      limit: '1',
    });

    const selectRes = await fetch(`${supabaseUrl}/rest/v1/icvk_otps?${queryParams}`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!selectRes.ok) {
      const errText = await selectRes.text().catch(() => 'Unknown');
      console.error('Supabase OTP Select Error:', errText);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const rows: any[] = await selectRes.json();

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }

    const otpRow = rows[0];

    // Mark OTP as verified via direct REST API (so it can't be reused)
    const updateParams = new URLSearchParams({ id: `eq.${otpRow.id}` });
    await fetch(`${supabaseUrl}/rest/v1/icvk_otps?${updateParams}`, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({ verified: true }),
    });

    // Create session cookie on the response (Edge-compatible)
    const response = NextResponse.json({ message: 'Verified successfully', email });
    await createSessionOnResponse(email, response);
    return response;
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
