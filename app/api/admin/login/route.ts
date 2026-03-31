export const runtime = 'edge';

import { NextResponse } from 'next/server';

// Simple admin credentials - store these in env vars for production
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@hkmchennai.org';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'hkm@admin2026';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Create a simple token (in production, use proper JWT)
      const token = btoa(`${email}:${Date.now()}`);
      return NextResponse.json({ token });
    }

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Admin Login Error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
