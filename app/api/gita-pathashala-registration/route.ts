import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    if (!data.child_name || !data.parent_name || !data.mobile) {
      return NextResponse.json(
        { error: 'Child Name, Parent Name, and Mobile are required' },
        { status: 400 }
      );
    }

    // Insert into Supabase table
    const { error } = await supabase
      .from('gita_pathashala_registrations')
      .insert([
        {
          child_name: data.child_name,
          child_age: data.child_age,
          child_class: data.child_class,
          school_name: data.school_name,
          parent_name: data.parent_name,
          mobile: data.mobile,
          email: data.email,
          address: data.address,
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
