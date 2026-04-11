export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { fullName, mobile, email } = await req.json();

    if (!fullName || !mobile || !email) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const res = await fetch(`${supabaseUrl}/rest/v1/community_members`, {
      method: 'POST',

      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ full_name: fullName, mobile, email }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => 'Unknown error');
      console.error('Community Insert Error:', errText);
      return NextResponse.json({ error: 'Failed to join community. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Successfully joined the community!' });
  } catch (error) {
    console.error('Community Route Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
