import React, { Component, PropTypes } from 'react';
import User from './user.component';

export default class Users extends Component {

  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    navigate: PropTypes.func.isRequired,
    pages: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.navigate(event.target.pathname, {trigger: true});
  }

  render() {
    const { currentPage, navigate, pages, users } = this.props;

    return <div className="users panel panel-primary">

      <div className="panel-heading">
        <h2 className="panel-title">Users</h2>
      </div>

      <div className="panel-body">
        { users.map((user, index) => <User
            city={ user.address.city }
            email={ user.email }
            full={ false }
            id={ user.id }
            key={ index }
            name={ user.name }
            navigate={ navigate } />) }
      </div>

      <div className="panel-footer">
        <nav className="text-center">
          <ul className="pagination">
            { pages.map((page, index) => <li className={ page + 1 === currentPage ? 'page active' : 'page' } key={ index }><a href={ `/page/${ page + 1 }` } onClick={ this.handleClick }>{ page + 1 }</a></li>) }
          </ul>
        </nav>
      </div>
    </div>;
  }
}
