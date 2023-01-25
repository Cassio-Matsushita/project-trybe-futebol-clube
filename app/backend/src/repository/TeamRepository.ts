import TeamsModel from '../database/models/TeamsModel';

export default class TeamRepository {
  public find = async () => {
    const user = await TeamsModel.findAll();
    return user;
  };
}
