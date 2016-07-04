import React, { Component, PropTypes } from 'react';
import Address from './address.component';

export default class User extends Component {

  static propTypes = {
    address: PropTypes.object,
    city: PropTypes.string,
    email: PropTypes.string.isRequired,
    full: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
    model: PropTypes.object,
    phone: PropTypes.string,
    username: PropTypes.string,
    website: PropTypes.string
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  static getDefaultProps = {
    full: true
  }

  handleClick(event) {
    event.preventDefault();
    this.props.navigate(event.target.pathname, {trigger: true});
  }

  handleFocus(event) {
    event.target.parentElement.classList.toggle('is-focused');
  }

  handleChange(event) {
    const { name, value } = event.target;

    event.persist();

    try {
      this.props.model.save(name, value)
        .then((response) => {
          event.target.parentElement.classList.remove('has-error');
          this.setState({...this.setState, ...response});
        });
    } catch (err) {
      if (!event.target.parentElement.classList.contains('has-error')) {
        event.target.parentElement.classList.add('has-error');
      }
    }
  }

  render() {
    const { address, city, email, full, id, name, phone, username, website } = this.props;

    return <div className={ full ? 'user panel panel-primary' : 'user panel panel-default' } id={ id }>

      <div className="panel-heading">
        <h3 className="panel-title">
          { full ? name : <a href={ `/user/${ id }` } onClick={ this.handleClick } >{ name }</a> }
        </h3>
      </div>

      <div className="panel-body clearfix">
        <dl className="details dl-horizontal col-md-6">
          <dt>name</dt>
          <dd>{ name }</dd>
          <dt>email</dt>
          <dd className={ full ? 'form-group' : null }>{ full ? <input className="form-control" defaultValue={ email } name="email" onBlur={ this.handleFocus } onChange={ this.handleChange } onFocus={ this.handleFocus } required type="email" /> : email }</dd>
          { full ? null : <dt>city</dt> }
          { full ? null : <dd>{ city }</dd> }
          { full ? <dt>username</dt> : null }
          { full ? <dd>{ username }</dd> : null }
          { full ? <dt>phone</dt> : null }
          { full ? <dd>{ phone }</dd> : null }
          { full ? <dt>website</dt> : null }
          { full ? <dd className="form-group"><input className="form-control" defaultValue={ website } name="website" onBlur={ this.handleFocus } onChange={ this.handleChange } onFocus={ this.handleFocus } required type="url" /></dd> : null }
        </dl>

        { address ? <Address { ...address } /> : null }
      </div>

      <div className="panel-footer text-center clearfix">
        { full ? <a className="btn btn-primary btn-lg btn-raised" href={ '/page/1' } onClick={ this.handleClick }>User list</a> : null }
      </div>
    </div>;
  }
}
