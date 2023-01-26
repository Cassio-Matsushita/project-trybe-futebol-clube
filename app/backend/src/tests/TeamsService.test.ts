import * as bcrypt from 'bcryptjs';
import * as sinon from 'sinon';
import TeamsModel from '../database/models/TeamsModel';
import TeamService from '../services/TeamService';
import teams from './mocks/TeamsMocks';
import { app } from '../app';
import * as chai from 'chai';
import { expect } from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Teste o TeamsService', function() {
    afterEach(()=>{
      sinon.restore();
    });

    it('Teste o retorno do findAll', async function() {

        sinon.stub(TeamsModel, 'findAll').resolves(teams as unknown as TeamsModel[]);

        const response = await chai.request(app).get('/teams');

        expect(response.status).to.be.equal(200);
        expect(response.body).deep.equal(teams);
    });

    it('Teste o retorno do findOne', async function() {

      sinon.stub(TeamsModel, 'findOne').resolves();

      const response = await chai.request(app).get('/teams/:id');

      expect(response.status).to.be.equal(200);
      // expect(response.).to.be.equal(teams);
  });


})