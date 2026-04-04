export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { deleteSessionOnResponse } from '@/lib/session';

export async function POST(_req: NextRequest) {
  const response = NextResponse.json({ message: 'Logged out successfully' });
  deleteSessionOnResponse(response);
  return response;
}
