'use strict';

const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  contacts() {
    return this.hasMany('Contact');
  }
}

module.exports = bookshelf.model('User', User);
