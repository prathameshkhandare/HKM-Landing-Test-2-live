export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const session = await getSession();

    if (!session || !session.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email } = session;

    // Fetch children registered under this parent's email
    const { data: children, error } = await supabase
      .from('icvk_registrations')
      .select('id, child_name, age, center, batch, status')
      .eq('parent_email', email)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Fetch Children Error:', error);
      return NextResponse.json({ error: 'Failed to fetch registered children' }, { status: 500 });
    }

    return NextResponse.json({ email, children: children || [] });
  } catch (error) {
    console.error('Session/User Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
