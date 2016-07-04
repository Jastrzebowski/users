import Backbone from 'backbone';

export default Backbone.Model.extend({
  // Default attributes for address
  // and ensure that each address has those attributes
  defaults: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      'lat': '',
      'lng': ''
    }
  }

});
