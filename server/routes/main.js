'use strict';

const express = require('express');
const router = express.Router();

const User = require('../../database/models/User');
const Contact = require('../../database/models/Contact');

// this is the /contacts that the user will see, not /api/contacts
router.get('/contacts', (req, res) => {
  return Contact.fetchAll()
    .then(fetched => {
      return res.json(fetched);
    });
});

router.get('/contacts/:id', (req, res) => {
  const id = req.params.id;

  return new Contact({ 'id' : id }).fetch({ withRelated: ['createdBy'] })
    .then(fetched => {
      return res.json(fetched);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.get('/profile', (req, res) => {
  // authentication (session) should already keep track of the user id at this point
  const id = 'some way to get session user id';

  return User({ 'id' : id }).fetch()
    .then(user => {
      return res.json(fetched);
    });
});

module.exports = router;
