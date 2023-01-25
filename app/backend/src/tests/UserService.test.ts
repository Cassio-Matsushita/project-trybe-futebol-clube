import { expect } from 'chai';
import * as chai from 'chai';
import * as bcrypt from 'bcryptjs';
import * as sinon from 'sinon';
import UserModels from '../database/models/UserModel';
import UserService from '../services/UserService';
import { app } from '../app';

// referência: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/19480
chai.use(require('chai-http'));

const userLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const testValidUser = {
    id: 1,
      username: 'Admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: 'secret_admin',
  };

const testInvalidUser = {
    id: 1,
      username: 'Admin',
      role: 'undefined',
      email: 'admin@xablau.com',
      password: 'senha_invalida',
}

describe('Teste o UserService', function () {
  const findOneStub = sinon.stub(UserModels, 'findOne');
  const userService = new UserService();

  afterEach(()=>{
    sinon.restore();
  });

  describe('Teste quando não existe o usuário ou senha digitados', function () {
  
    it('Deve retornar erro 401', async function () {
      let { status } = await userService.createToken(userLogin);
    
      expect(status).to.be.equals(401);    
    });

    it('Deve retornar erro "Incorrect email or password"', async function () {
      sinon.stub(UserModels, 'findOne').resolves(null);

      let { error } = await userService.createToken(userLogin);

      expect(error).to.deep.equal({ message: 'Incorrect email or password' });
    });

    describe('Teste se a validação de usuário é feita', function () {
      beforeEach(async () => {
        findOneStub.resolves(userLogin as UserModels);
      });
    
      afterEach(()=>{
        findOneStub.reset();
      });
    
      it('Teste a validação', async () => {
        sinon.stub(UserModels, 'findOne').resolves(testValidUser as UserModels);
        // sinon.stub(bcrypt, 'compareSync').resolves(true);

        const response = await chai.request(app).post('/login').send(userLogin);
  
        expect(response.status).to.be.equal(401);
      });
    });
  });
  
})