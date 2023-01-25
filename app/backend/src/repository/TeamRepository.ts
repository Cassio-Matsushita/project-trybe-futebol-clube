import TeamsModel from '../database/models/TeamsModel';

export default class TeamRepository {
  public getAll = async () => {
    const teams = await TeamsModel.findAll();
    return teams;
  };

  public getById = async (id: number) => {
    const team = await TeamsModel.findOne({ where: { id } });
    return team;
  };
}
