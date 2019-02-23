'use strict';

const express = require('express');
const router = express.Router();

const User = require('../../database/models/User');
const Contact = require('../../database/models/Contact');

router.get('/profile', (req, res) => {
  // authentication (session) should already keep track of the user id at this point
  const id = req.query.user;

  return User({ 'id' : id }).fetch()
    .then(user => {
      return res.json(fetched);
    });
});

module.exports = router;
