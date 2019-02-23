'use strict';

const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return 'contacts'; }
  get hasTimestamps() { return true; }

  createdBy() {
    return this.belongsTo('User');
  }
}

module.exports = bookshelf.model('Contact', Contact);
