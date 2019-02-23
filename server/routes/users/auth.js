const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success : true });
});

router.post('/logout', (req, res) => {
  res.logout();
  res.json({ success : true });
});

router.post('/register', (req, res) => {
  res.json({
    success : false,
    message : 'This route is not ready for you yet!'
  });
});

module.exports = router;
