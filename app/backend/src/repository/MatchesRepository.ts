import TeamsModel from '../database/models/TeamsModel';
import MatchModels from '../database/models/MatchModels';
import IBodyInsertMatches from '../interfaces/IInsertMatches';

export default class MatchesRepository {
  public getAll = async () => {
    const matches = await MatchModels.findAll({
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamsModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  public getAllByQueryString = async (inProgress: string) => {
    // https://stackoverflow.com/questions/52017809/how-to-convert-string-to-boolean-in-typescript-angular-4
    const boolValue = (inProgress === 'true'); // retorna true ou false

    const matches = await MatchModels.findAll({ where:
      { inProgress: boolValue },
    include: [
      { model: TeamsModel, as: 'homeTeam', attributes: ['teamName'] },
      { model: TeamsModel, as: 'awayTeam', attributes: ['teamName'] },
    ],
    });
    return matches;
  };

  public saveMatch = async (data: IBodyInsertMatches) => {
    const matches = await MatchModels.create({ ...data, inProgress: true });
    return matches;
  };

  public updateMatch = async (id: number) => {
    const matches = await MatchModels.update({ inProgress: false }, {
      where: { id },
    });
    return matches;
  };
}
