import TeamRepository from '../repository/TeamRepository';

export default class TeamService {
  constructor(public teamRepository = new TeamRepository()) {}

  public findAll = async () => {
    const teams = await this.teamRepository.find();
    return teams;
  };
}
