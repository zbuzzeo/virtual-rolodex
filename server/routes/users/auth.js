const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/login', passport.authenticate('local', {
  successRedirect : '/profile',
  failureRedirect : '/login'
}), 
(req, res) => {
  res.json({ success : true });
});

router.post('/logout', passport.authenticate('local', {
  successRedirect : '/login',
  failureRedirect : '/logout'
}),
(req, res) => {
  res.logout();
  res.json({ success : true });
});

router.post('/register', (req, res) => {
  
});

module.exports = router;
