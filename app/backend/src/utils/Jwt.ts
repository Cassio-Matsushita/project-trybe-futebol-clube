import { Secret, sign, verify } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/IUser';

import 'dotenv/config';

export const createToken = (user: IUserToken) => {
  const token = sign(user, process.env.JWT_SECRET as Secret, { // ou || 'secret'
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export const validateToken = (token: string) => {
  try {
    const result = verify(token, process.env.JWT_SECRET as Secret);

    return result as IUserToken;
  } catch (error) {
    const e = new Error('Expired or invalid token');
    throw e;
  }
};
