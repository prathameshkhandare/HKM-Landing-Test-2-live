export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/lib/session';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionFromRequest(req);

    if (!session || !session.email) {
      return NextResponse.json({ error: 'Unauthorized. Please login first.' }, { status: 401 });
    }

    const { email } = session;
    const body = await req.json();

    // The body contains all the registration fields plus childPhotoUrl, paymentScreenshotUrl
    // We attach parent_email automatically to prevent forgery.
    const {
      childName, dob, age, gender, bloodGroup, center, batch,
      schoolName, fatherName, motherName, address,
      fatherMobile, motherMobile, pickupName, pickupContact, pickupRelation,
      gitaLifeInterest, mediaConsent, childPhotoUrl, paymentScreenshotUrl
    } = body;

    // Insert into DB
    const { error } = await supabase
      .from('icvk_registrations')
      .insert({
        parent_email: email, // Security guarantee
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
        payment_screenshot_url: paymentScreenshotUrl
      });

    if (error) {
      console.error('Submitting Registration Error:', error);
      return NextResponse.json({ error: 'Failed to submit registration. Please contact support.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Registration submitted successfully' });
  } catch (error) {
    console.error('Submit Endpoint Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
