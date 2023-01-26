import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import UserValidations from '../validations/userValidations';
import { validateToken } from '../utils/Jwt';

export default class UserController {
  constructor(private userService: UserService) {}

  public validateUser = async (
    req: Request,
    res: Response,
  ) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!UserValidations.validateUser(email, password)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const { status, token, error } = await this.userService.createToken(req.body);

    return error ? res.status(status).json(error) : res.status(status).json(token);
  };

  public validateToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { authorization } = req.headers;
      if (authorization) {
        const user = validateToken(authorization);
        return res.status(200).json({ role: user.role });
      }
    } catch (error) {
      next(error);
    }
  };
}
