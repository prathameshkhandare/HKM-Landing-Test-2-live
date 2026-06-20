import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.name || !data.phone || !data.yatra_name) {
      return NextResponse.json(
        { error: 'Name, phone, and yatra_name are required' },
        { status: 400 }
      );
    }

    // Insert into Supabase table
    const { error } = await supabase
      .from('yatra_registrations')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          city: data.city || null,
          participants: data.participants || '1 person',
          message: data.message || null,
          yatra_name: data.yatra_name,
        },
      ]);

    if (error) {
      console.error('Supabase insertion error:', error);
      return NextResponse.json(
        { error: 'Failed to submit registration. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Registration submitted successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
