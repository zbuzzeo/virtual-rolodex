'use strict';

const express = require('express');
const router = express.Router();

const User = require('../../../database/models/User');
const Contact = require('../../../database/models/Contact');

router.get('/', (req, res) => {
  const id = req.query.user;

  Contact.where({ 'created_by' : id })
    .fetchAll()
    .then(fetched => {
      return res.json(fetched);
    })
    .catch(err => {
      res.sendStatus(500);

      return res.json({
        success : false,
        err : err
      });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Contact.where({ 'id' : id })
    .fetch()
    .then(fetched => {
      return res.json(fetched);
    })
    .catch(err => {
      return res.json({
        code : '400: Bad Request',
        error : 'Invalid Contact ID'
      });
    });
});

router.get('/search/:term', (req, res) => {
  const term = req.query.term;
  const id = req.query.user;
});

router.post('/', (req, res) => {
  const data = req.body;

  Contact.forge({
    'name' : data.name,
    'created_by' : data.created_by,
    'address' : data.address,
    'mobile' : data.mobile,
    'work' : data.work,
    'home' : data.home,
    'email' : data.email,
    'twitter' : data.twitter,
    'instagram' : data.instagram,
    'github' : data.github
  })
    .save(null, { method : 'insert' })
    .then(() => {
      return new Contact({ 'name' : data.name })
        .fetch({ withRelated: ['createdBy'] })
        .then(fetched => {
          return res.json(fetched);
        });
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
});

module.exports = router;
