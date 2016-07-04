import Expect from 'expect';
import model from '../../app/models/address.model.js';

const address = new model();

describe('Address model', () => {
  it('should exist', (done) => {
    Expect(address).toExist();
    done();
  });
});
