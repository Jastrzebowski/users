import Address from '../../app/components/address.component';
import Expect from 'expect';
import JSF from 'json-schema-faker';
import React from 'react';
import Refaker from 'refaker';
import TestUtils from 'react-addons-test-utils';
import schema from '../../schemas/address.schema.json';

describe('Address component', () => {
  let output = {},
    renderer = {},
    props = {};

  before(function(done) {
    Refaker({
      schema: schema,
      fakeroot: 'http://json-schema.org',
      directory: 'schemas'
    }, function(error, refs, schemas) {
      props = JSF(schemas, refs);
      renderer = TestUtils.createRenderer();

      renderer.render(<Address { ...props } />);

      output = renderer.getRenderOutput();

      done();
    });
  });

  it('should exist', (done) => {
    Expect(output).toExist();
    done();
  });

  describe('Address initial render', () => {
    it('Address should be a <div>', (done) => {
      Expect(output.type).toBe('div');
      done();
    });

    it('Address should have a className .address.col-md-6', (done) => {
      Expect(output.props.className).toBe('address col-md-6');
      done();
    });

    it('Address should consist of details', (done) => {
      Expect(React.Children.count(output.props.children)).toBe(1);
      done();
    });
  });
});
