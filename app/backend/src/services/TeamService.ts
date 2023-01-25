import TeamRepository from '../repository/TeamRepository';

export default class TeamService {
  constructor(public teamRepository = new TeamRepository()) {}

  public getAll = async () => {
    const teams = await this.teamRepository.getAll();
    return teams;
  };

  public getById = async (id: number) => {
    const teams = await this.teamRepository.getById(id);
    return teams;
  };
}
