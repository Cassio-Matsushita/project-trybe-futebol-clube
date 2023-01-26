import MatchesRepository from '../repository/MatchesRepository';

export default class MatchesService {
  constructor(public matchesRepository = new MatchesRepository()) {}

  public getAll = async () => {
    const matches = await this.matchesRepository.getAll();
    return matches;
  };

  public getAllByQueryString = async (inProgress: string) => {
    const matches = await this.matchesRepository.getAllByQueryString(inProgress);
    return matches;
  };
}
