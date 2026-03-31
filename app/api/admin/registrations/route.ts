export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: Request) {
  try {
    // Basic auth check
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Fetch all registrations from Supabase
    const { data, error } = await supabase
      .from('icvk_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Admin Fetch Error:', error);
      return NextResponse.json({ message: 'Failed to fetch registrations' }, { status: 500 });
    }

    // Map Supabase snake_case columns to the camelCase the dashboard expects
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
