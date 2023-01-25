import * as bcrypt from 'bcryptjs';
import { IUserCredentials } from '../interfaces/IUser';
import UserRepository from '../repository/UserRepository';
import { createToken } from '../utils/Jwt';

export default class UserService {
  constructor(public userRepository = new UserRepository()) {}

  public createToken = async (user: IUserCredentials) => {
    const userData = await this.userRepository.find(user.email);

    if (userData === null || !userData) {
      return { status: 401, error: { message: 'Incorrect email or password' } };
    }

    const isPasswordValid = bcrypt.compareSync(user.password, userData.password);

    if (!isPasswordValid || !user.email) {
      return { status: 401, error: { message: 'Incorrect email or password' } };
    }

    const { password: _, ...userWithoutPassword } = userData.dataValues;

    const token = createToken(userWithoutPassword);

    return { status: 200, token: { token } };
  };
}
