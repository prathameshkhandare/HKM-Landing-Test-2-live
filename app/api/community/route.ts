export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { fullName, mobile, email } = await req.json();

    if (!fullName || !mobile || !email) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('community_members')
      .insert({ full_name: fullName, mobile, email });

    if (error) {
      console.error('Community Insert Error:', error);
      return NextResponse.json({ error: 'Failed to join community. Please try again later.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Successfully joined the community!' });
  } catch (error) {
    console.error('Community Route Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
