import React, { Component, PropTypes } from 'react';

export default class Address extends Component {

  static propTypes = {
    city: PropTypes.string.isRequired,
    geo: PropTypes.object.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired
  }

  render() {
    const { city, geo, street, suite, zipcode } = this.props;

    return <div className="address col-md-6">
      <dl className="details dl-horizontal">
        <dt>City:</dt>
        <dd>{ city }</dd>
        <dt>Street:</dt>
        <dd>{ street }</dd>
        <dt>Suite:</dt>
        <dd>{ suite }</dd>
        <dt>Zipcode:</dt>
        <dd>{ zipcode }</dd>
      </dl>
    </div>;
  }
}
