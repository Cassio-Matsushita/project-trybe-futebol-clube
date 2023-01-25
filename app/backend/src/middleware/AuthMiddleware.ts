import { NextFunction, Request, Response } from 'express';

const validateToken = async (req: Request,
  _res: Response,
  next: NextFunction) => {
  const { authorization } = req.headers;
  //   const user = authService.validateToken(authorization);
  //   req.user = user;

  next();
};

export default validateToken;
