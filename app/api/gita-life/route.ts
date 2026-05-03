import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { fullName, email, phone, address } = await req.json()

  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase
    .from('gita_life_registrations')
    .insert({ full_name: fullName, email, phone, address: address || null })

  if (error) {
    console.error('gita_life_registrations insert error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
