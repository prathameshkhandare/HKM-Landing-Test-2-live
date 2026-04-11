export const runtime = 'edge';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const emailTo = email.trim();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Insert OTP via direct Supabase REST API (no SDK - fully Edge-compatible)
    const insertRes = await fetch(`${supabaseUrl}/rest/v1/icvk_otps`, {
      method: 'POST',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email: emailTo, otp, expires_at: expiresAt.toISOString() }),
    });

    if (!insertRes.ok) {
      const errText = await insertRes.text().catch(() => 'Unknown error');
      console.error('Supabase OTP Insert Error:', errText);
      return NextResponse.json({ error: 'Failed to generate OTP. Please try again later.' }, { status: 500 });
    }

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is missing. Cloudflare cannot send OTP emails.');
      return NextResponse.json(
        {
          error: 'Email service is not configured on this deployment. Add RESEND_API_KEY in Cloudflare and redeploy.',
        },
        { status: 500 }
      );
    }

    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
          headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'ICVK Registration <icvk@hkmchennai.org>',
          to: [emailTo],
          subject: 'Your ICVK Registration Verification Code',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h1 style="color: #ea580c;">Hare Krishna!</h1>
              <p>You requested to sign in or register for the Indian Culture &amp; Values for Kids (ICVK) program.</p>
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

      if (!resendResponse.ok) {
        const resendError = await resendResponse.text().catch(() => 'Unknown Resend error');
        console.error('Resend API error:', resendResponse.status, resendError);
        return NextResponse.json(
          {
            error: 'Unable to send the verification email from this deployment. Check the Cloudflare RESEND_API_KEY and the verified sender/domain in Resend.',
          },
          { status: 502 }
        );
      }
    } catch (emailError) {
      console.error('Resend email error:', emailError);
      return NextResponse.json(
        {
          error: 'Unable to reach the email service from this deployment. Check the Cloudflare email configuration and try again.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: 'OTP sent successfully',
    });
  } catch (error) {
    console.error('Send OTP Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
