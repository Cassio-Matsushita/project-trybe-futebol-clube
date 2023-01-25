import { expect } from 'chai';
import UserModels from '../database/models/UserModel';

describe('Teste o model de User', function () {
  it('possui a propriedade "id"', function () {
    const user = new UserModels();
    expect(user).to.have.property('id');
  });

  it('possui a propriedade "username"', function () {
    const user = new UserModels();
    expect(user).property('username');
  });

  it('possui a propriedade "role"', function () {
    const user = new UserModels();
    expect(user).property('role');
  });

  it('possui a propriedade "email"', function () {
    const user = new UserModels();
    expect(user).property('email');
  });

  it('possui a propriedade "password"', function () {
    const user = new UserModels();
    expect(user).property('password');
  });
})

