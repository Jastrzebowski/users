import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import User from './app/components/user.component';
import Users from './app/components/users.component';
import userModel from './app/models/user.model';
import usersCollection from './app/models/users.collection';

const LIMIT = 2;

const Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'user/:id': 'show',
    'page/:page': 'index'
  },
  show: (id = 0) => {
    const user = new userModel({ id: id });

    user.fetch().then(() => {
      ReactDOM.render(<User full={ true } model={ user } navigate={ app.navigate } { ...user.toJSON() } />, document.getElementById('app'));
    });
  },
  index: (page = 1) => {
    page = page || 1;
    const users = new usersCollection();

    users.fetch().then(() => {
      const props = {
        currentPage: parseInt(page),
        navigate: app.navigate,
        pages: [ ...Array(Math.floor(users.toJSON().length / LIMIT)).keys() ],
        users: users.toJSON().splice((page - 1) * LIMIT, LIMIT)
      };

      ReactDOM.render(<Users { ...props } />, document.getElementById('app'));
    });
  }
});

const app = new Router();

Backbone.history.start({pushState: true});
