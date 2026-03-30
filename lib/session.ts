import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secretKey = process.env.JWT_SECRET;

if (!secretKey || secretKey.length < 32) {
  throw new Error('JWT_SECRET is missing or too weak. Please provide a strong cryptographic key in your environment variables.');
}

const encodedKey = new TextEncoder().encode(secretKey);

export interface SessionPayload {
  email: string;
  expiresAt: Date;
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    return null;
  }
}

export async function getSession() {
  const session = cookies().get('icvk_session')?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function createSession(email: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const session = await encrypt({ email, expiresAt });

  cookies().set('icvk_session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export function deleteSession() {
  cookies().delete('icvk_session');
}
