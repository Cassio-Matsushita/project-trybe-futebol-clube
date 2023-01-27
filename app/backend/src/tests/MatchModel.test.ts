import { expect } from 'chai';
import MatchesModel from '../database/models/MatchModels';

describe('Teste o model de Match', function () {
  it('possui a propriedade "id"', function () {
    const matches = new MatchesModel();
    expect(matches).to.have.property('id');
  });

  it('possui a propriedade "homeTeamId"', function () {
    const matches = new MatchesModel();
    expect(matches).property('homeTeamId');
  });

  it('possui a propriedade "homeTeamsGoals"', function () {
    const matches = new MatchesModel();
    expect(matches).property('homeTeamGoals');
  });

  it('possui a propriedade "awayTeamId"', function () {
    const matches = new MatchesModel();
    expect(matches).property('awayTeamId');
  });

  it('possui a propriedade "awayTeamGoals"', function () {
    const matches = new MatchesModel();
    expect(matches).property('awayTeamGoals');
  });

  it('possui a propriedade "inProgress"', function () {
    const matches = new MatchesModel();
    expect(matches).property('inProgress');
  });
})