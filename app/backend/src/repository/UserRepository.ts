import Users from '../database/models/UserModel';

export default class UserRepository {
  public find = async (email: string) => {
    const user = await Users.findOne({ where: { email } });
    return user;
  };
}
