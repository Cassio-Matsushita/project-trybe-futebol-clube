import MatchesRepository from '../repository/MatchesRepository';
import IInsertMatches from '../interfaces/IInsertMatches';

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

  public saveMatch = async (data: IInsertMatches) => {
    const matches = await this.matchesRepository.saveMatch(data);
    return matches;
  };

  public updateMatch = async (id: number) => {
    const matches = await this.matchesRepository.updateMatch(id);
    return matches;
  };

  public updateMatchResult = async (id: number, homeTeamGoals: string, awayTeamGoals: string) => {
    const matches = await this.matchesRepository
      .updateMatchResult(id, homeTeamGoals, awayTeamGoals);
    return matches;
  };
}
