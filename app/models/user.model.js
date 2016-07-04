import Backbone from 'backbone';

export default Backbone.Model.extend({
  // Default attributes for user
  // and ensure that each user has those attributes
  defaults: {
    address: '',
    id: '',
    name: '',
    phone: '',
    username: '',
    website: ''
  },

  urlRoot: 'https://jsonplaceholder.typicode.com/users',

  validate: (attributes) => {
    const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const urlRegex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{1,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

    if (!attributes.email.length || !emailRegex.test(attributes.email)) {
      return 'Wrong email format';
    }

    if (!attributes.website.length || !urlRegex.test(attributes.website)) {
      return 'Wrong website format';
    }
  }

});
