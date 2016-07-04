import Expect from 'expect';
import JSF from 'json-schema-faker';
import React from 'react';
import Refaker from 'refaker';
import TestUtils from 'react-addons-test-utils';
import User from '../../app/components/user.component';
import schema from '../../schemas/user.schema.json';

describe('User component', () => {
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

      renderer.render(<User { ...props } />);

      output = renderer.getRenderOutput();

      done();
    });
  });

  it('should exist', (done) => {
    Expect(output).toExist();
    done();
  });

  describe('User initial render', () => {
    it('User should be a <div>', (done) => {
      Expect(output.type).toBe('div');
      done();
    });

    it('User should have a className .user.panel.panel-default', (done) => {
      Expect(output.props.className).toBe('user panel panel-default');
      done();
    });

    it('User should consist of details and address', (done) => {
      Expect(React.Children.count(output.props.children)).toBe(3);
      done();
    });
  });
});
