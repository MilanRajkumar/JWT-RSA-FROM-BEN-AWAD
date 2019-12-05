import { readFileSync } from 'fs';

const iss = 'IQVIA';
const sub = 'iqvia@user.org';
const aud = 'http://iqviasoftware.net';

export const verifyOptions = {
  issuer: iss,
  subject: sub,
  audience: aud,
  expiresIn: '15m',
  algorithm: 'RS256'
};
export const publicKey = readFileSync('./public.key', 'utf8');
