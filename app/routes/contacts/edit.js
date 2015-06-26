import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    update: function() {
      const contact = this.get('currentModel');

      contact.save();
      this.transitionTo('contacts.contact', this.get('currentModel'));
    },

    cancel: function() {
      this.transitionTo('contacts.contact', this.get('currentModel'));
    }
  }
});
