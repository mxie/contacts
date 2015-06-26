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
    create: function() {
      const contact = this.get('currentModel');

      contact.save().then(savedContact => {
        this.transitionTo('contacts.contact', savedContact);
      });
    },

    cancel: function() {
      this.transitionTo('contacts');
    }
  }
});
