'use strict';

const express = require('express');
const router = express.Router();

const User = require('../../../database/models/User');

router.get('/profile', (req, res) => {
  let id = req.query.user;

  User.where({ 'id' : id }).fetch()
    .then(fetched => {
      fetched = fetched.attributes;
      res.json(fetched);
    })
    .catch(err => {
      res.json({
        code : '400: Bad Request',
        error : 'Invalid User ID'
      })
    })
});

router.put('/users', (req, res) => {
  const id = req.query.user;
  const userData = req.body;

  res.json({
    success : false,
    message : 'This route is not ready for you yet!'
  });
});

module.exports = router;
