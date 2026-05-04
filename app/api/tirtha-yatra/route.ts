import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const participants = JSON.parse(formData.get('participants') as string)
  const travelOption = formData.get('travelOption') as string
  const accommodationType = formData.get('accommodationType') as string
  const privateRooms = formData.get('privateRooms') as string
  const customAmount = formData.get('customAmount') === 'true'
  const totalCost = parseInt(formData.get('totalCost') as string)
  const advancePaid = parseInt(formData.get('advancePaid') as string)
  const screenshotUrl = (formData.get('screenshotUrl') as string) || null

  const primary = participants[0]
  if (!primary?.fullName || !primary?.email || !primary?.phone) {
    return NextResponse.json({ error: 'Missing primary contact info' }, { status: 400 })
  }

  const { error } = await supabase
    .from('tirtha_yatra_registrations')
    .insert({
      primary_name: primary.fullName,
      primary_email: primary.email,
      primary_phone: primary.phone,
      participants,
      participant_count: participants.length,
      travel_option: travelOption,
      accommodation_type: accommodationType,
      private_rooms: privateRooms ? parseInt(privateRooms) : null,
      payment_screenshot_url: screenshotUrl,
      custom_amount: customAmount,
      total_cost: totalCost,
      advance_paid: advancePaid,
    })

  if (error) {
    console.error('tirtha_yatra_registrations insert error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
