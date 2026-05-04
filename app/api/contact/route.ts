import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  const { firstName, email, phone, message } = await req.json()

  if (!firstName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase
    .from('contact_inquiries')
    .insert({ first_name: firstName, email, phone, message: message || null })

  if (error) {
    console.error('contact_inquiries insert error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
