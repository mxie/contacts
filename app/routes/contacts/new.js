import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  cleanUp: Ember.on('deactivate', function() {
    const contact = this.get('currentModel');

    if (contact.get('isNew') && !contact.get('isSaving')) {
      contact.destroyRecord();
    }
  }),

  actions: {
    submit: function() {
      const contact = this.get('currentModel');

      contact.save();
      this.transitionTo('contacts');
    },

    cancel: function() {
      this.transitionTo('contacts');
    }
  }
});
