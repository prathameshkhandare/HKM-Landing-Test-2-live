export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionFromRequest(req);

    if (!session || !session.email) {
      return NextResponse.json({ error: 'Unauthorized. Please login first.' }, { status: 401 });
    }

    const { email } = session;
    const body = await req.json();

    const {
      childName, dob, age, gender, bloodGroup, center, batch,
      schoolName, fatherName, motherName, address,
      fatherMobile, motherMobile, pickupName, pickupContact, pickupRelation,
      gitaLifeInterest, mediaConsent, childPhotoUrl, paymentScreenshotUrl
    } = body;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Insert registration via direct REST API (no SDK - fully Edge-compatible)
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/icvk_registrations`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        parent_email: email, // Security guarantee - from session, not client
        child_name: childName,
        dob,
        age: parseInt(age, 10),
        gender,
        blood_group: bloodGroup,
        center,
        batch,
        school_name: schoolName,
        father_name: fatherName,
        mother_name: motherName,
        address,
        father_mobile: fatherMobile,
        mother_mobile: motherMobile,
        pickup_name: pickupName,
        pickup_contact: pickupContact,
        pickup_relation: pickupRelation,
        gita_life_interest: gitaLifeInterest,
        media_consent: mediaConsent,
        child_photo_url: childPhotoUrl,
        payment_screenshot_url: paymentScreenshotUrl,
      }),
    });

    if (!insertRes.ok) {
      const errText = await insertRes.text().catch(() => 'Unknown error');
      console.error('Submitting Registration Error:', errText);
      return NextResponse.json({ error: 'Failed to submit registration. Please contact support.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registration submitted successfully' });
  } catch (error) {
    console.error('Submit Endpoint Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
