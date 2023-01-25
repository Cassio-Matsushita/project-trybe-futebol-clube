import { expect } from 'chai';
import TeamsModel from '../database/models/TeamsModel';

describe('Teste o model de Teams', function () {
  it('possui a propriedade "id"', function () {
    const teams = new TeamsModel();
    expect(teams).to.have.property('id');
  });

  it('possui a propriedade "teamName"', function () {
    const teams = new TeamsModel();
    expect(teams).property('teamName');
  });
})