import Expect from 'expect';
import model from '../../app/models/user.model.js';

const user = new model();

describe('User model', () => {
  it('should exist', (done) => {
    Expect(user).toExist();
    done();
  });

  it('should have a validate() method', (done) => {
    Expect(typeof user.validate).toEqual('function');
    done();
  });
});
