import Expect from 'expect';
import collection from '../../app/models/users.collection.js';

const users = new collection();

describe('User model', () => {
  it('should exist', (done) => {
    Expect(users).toExist();
    done();
  });
});
