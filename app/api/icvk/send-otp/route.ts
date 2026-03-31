export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store in Supabase
    const { error } = await supabase
      .from('icvk_otps')
      .insert({ email, otp, expires_at: expiresAt.toISOString() });

    if (error) {
      console.error('Supabase OTP Insert Error:', error);
      return NextResponse.json({ error: 'Failed to generate OTP. Please try again later.' }, { status: 500 });
    }

    // Send email via Resend REST API (no SDK needed, edge-compatible)
    if (process.env.RESEND_API_KEY) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'ICVK Registration <icvk@hkmchennai.org>',
            to: [email],
            subject: 'Your ICVK Registration Verification Code',
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                <h1 style="color: #ea580c;">Hare Krishna!</h1>
                <p>You requested to sign in or register for the Indian Culture & Values for Kids (ICVK) program.</p>
                <p>Your verification code is:</p>
                <h2 style="font-size: 32px; letter-spacing: 4px; color: #2D0A0A; background: #FFF9F0; padding: 15px; text-align: center; border-radius: 8px;">
                  ${otp}
                </h2>
                <p>This code will expire in 10 minutes. If you did not request this, please ignore this email.</p>
                <br/>
                <p>Best regards,<br/>HKM Chennai Team</p>
              </div>
            `,
          }),
        });

        if (!res.ok) {
          const errData = await res.json();
          console.error('Resend API error:', errData);
        }
      } catch (emailError) {
        console.error('Resend email error:', emailError);
      }
    } else {
      console.warn('RESEND_API_KEY missing - skipping actual email send.');
      console.warn('DEV OTP:', otp);
    }

    return NextResponse.json({ message: 'OTP sent successfully', devOtp: !process.env.RESEND_API_KEY ? otp : undefined });
  } catch (error) {
    console.error('Send OTP Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
