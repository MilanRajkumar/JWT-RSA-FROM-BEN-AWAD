import { User } from './entity/User';
import { sign } from 'jsonwebtoken';
import {
  accessTokenSignOptions,
  refreshTokenSignOptions,
  privateKey
} from './sign';

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, privateKey, accessTokenSignOptions);
};

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    privateKey,
    refreshTokenSignOptions
  );
};
