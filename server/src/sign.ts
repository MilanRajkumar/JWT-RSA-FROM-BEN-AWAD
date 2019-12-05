import { readFileSync } from 'fs';

const iss = 'IQVIA';
const sub = 'iqvia@user.org';
const aud = 'http://iqviasoftware.net';

export const accessTokenSignOptions = {
  issuer: iss,
  subject: sub,
  audience: aud,
  expiresIn: '15m',
  algorithm: 'RS256'
};

export const refreshTokenSignOptions = {
  issuer: iss,
  subject: sub,
  audience: aud,
  expiresIn: '7d',
  algorithm: 'RS256'
};
export const privateKey = readFileSync('./private.key', 'utf8');
