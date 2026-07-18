export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/lib/session';

export async function GET(request: NextRequest) {
  try {
    const session = await getSessionFromRequest(request);

    if (!session || !session.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email } = session;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Fetch children via direct REST API
    const queryParams = new URLSearchParams({
      select: '*',
      parent_email: `eq.${email}`,
      order: 'created_at.desc',
    });

    const res = await fetch(`${supabaseUrl}/rest/v1/icvk_registrations?${queryParams}`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => 'Unknown');
      console.error('Fetch Children Error:', errText);
      return NextResponse.json({ error: 'Failed to fetch registered children' }, { status: 500 });
    }

    const children = await res.json();

    return NextResponse.json({ email, children: children || [] });
  } catch (error) {
    console.error('Session/User Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
