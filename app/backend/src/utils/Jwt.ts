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
  const result = verify(token, process.env.JWT_SECRET as Secret);

  // if (!result) {
  //   return { status: 401, message: 'Token must be a valid token' };
  // const e = new Error('Token must be a valid token');
  // throw e.status;
  // }
  return result as IUserToken;
  // return { status: 401, message: 'Token must be a valid token' };
};
