import DS from 'ember-data';

export default DS.Model.extend({
  nameFirst: DS.attr('string'),
  nameLast: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),

  fullName: Ember.computed('nameFirst', 'nameLast', function() {
    return `${this.get('nameFirst')} ${this.get('nameLast')}`;
  }),
});
