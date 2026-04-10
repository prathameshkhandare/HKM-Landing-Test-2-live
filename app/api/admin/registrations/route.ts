export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    const res = await fetch(
      `${supabaseUrl}/rest/v1/icvk_registrations?select=*&order=created_at.desc`,
      {
        cache: 'no-store',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) {
      const errText = await res.text().catch(() => 'Unknown error');
      console.error('Admin Fetch Error:', errText);
      return NextResponse.json({ message: 'Failed to fetch registrations' }, { status: 500 });
    }

    const data: Record<string, unknown>[] = await res.json();

    const mapped = (data || []).map(row => ({
      _id: row.id,
      childName: row.child_name,
      dob: row.dob,
      age: row.age,
      gender: row.gender,
      bloodGroup: row.blood_group,
      center: row.center,
      batch: row.batch,
      schoolName: row.school_name,
      fatherName: row.father_name,
      motherName: row.mother_name,
      address: row.address,
      fatherMobile: row.father_mobile,
      motherMobile: row.mother_mobile,
      pickupName: row.pickup_name,
      pickupContact: row.pickup_contact,
      pickupRelation: row.pickup_relation,
      gitaLifeInterest: row.gita_life_interest,
      mediaConsent: row.media_consent === 'yes',
      createdAt: row.created_at,
      paymentScreenshotUrl: row.payment_screenshot_url,
      childPhotoUrl: row.child_photo_url,
      status: row.status,
      parentEmail: row.parent_email,
    }));

    return NextResponse.json(mapped);
  } catch (error) {
    console.error('Admin Registrations Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
