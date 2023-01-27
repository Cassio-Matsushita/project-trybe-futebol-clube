import * as sinon from 'sinon';
import MatchesModel from '../database/models/MatchModels';
import MatchesService from '../services/MatchesService';
import matchesMock from '../tests/mocks/MatchesMocks';
import { app } from '../app';
import * as chai from 'chai';
import { expect } from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Teste o MatchesService', function () {
    afterEach(()=>{
        sinon.restore();
      });

      it('Teste o retorno do findAll', async function() {

        sinon.stub(MatchesModel, 'findAll').resolves(matchesMock as unknown as MatchesModel[]);

        const response = await chai.request(app).get('/matches');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.an('array');
    });
});