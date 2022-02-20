const express = require('express');
const router = express.Router();

router.get('/json', function(req, res) {
  res.render('user_json');
});

router.post('/json', function(req, res) {
  const age = new Date().getFullYear() - parseInt(req.body.birthYear);
  res.render("user", {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age,
  });
});

module.exports = router;
