import Backbone from 'backbone';

import User from './user.model.js';

export default Backbone.Collection.extend({
  // Reference to this collection's model.
  model: User,

  url: 'https://jsonplaceholder.typicode.com/users/'

});
