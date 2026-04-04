import { SignJWT, jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

// Lazy getter so the module doesn't throw at import time if the var is missing
function getEncodedKey() {
  const secretKey = process.env.JWT_SECRET;
  if (!secretKey || secretKey.length < 32) {
    throw new Error('JWT_SECRET is missing or too weak. Please set it in your Cloudflare Pages environment variables.');
  }
  return new TextEncoder().encode(secretKey);
}

export interface SessionPayload {
  email: string;
  expiresAt: Date;
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getEncodedKey());
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, getEncodedKey(), {
      algorithms: ['HS256'],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    return null;
  }
}

/** Read session from an incoming NextRequest (Edge-compatible) */
export async function getSessionFromRequest(request: NextRequest) {
  const session = request.cookies.get('icvk_session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

/** Attach session cookie to an outgoing NextResponse (Edge-compatible) */
export async function createSessionOnResponse(
  email: string,
  response: NextResponse
) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const session = await encrypt({ email, expiresAt });

  response.cookies.set('icvk_session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

/** Remove session cookie from an outgoing NextResponse (Edge-compatible) */
export function deleteSessionOnResponse(response: NextResponse) {
  response.cookies.delete('icvk_session');
}

// ---- Legacy aliases kept for pages that can't easily be migrated ----
// These will only work in Node.js runtime (not Edge)
export async function getSession() {
  throw new Error('getSession() requires Node.js runtime. Use getSessionFromRequest(req) instead.');
}
export async function createSession(_email: string) {
  throw new Error('createSession() requires Node.js runtime. Use createSessionOnResponse(email, res) instead.');
}
export function deleteSession() {
  throw new Error('deleteSession() requires Node.js runtime. Use deleteSessionOnResponse(res) instead.');
}
