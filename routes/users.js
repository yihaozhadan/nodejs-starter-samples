var express = require('express');
var router = express.Router();

router.get('/json', function(req, res, next) {
  res.render('user_json');
});

router.post('/json', function(req, res, next) {
  var age = new Date().getFullYear();
  age = age - parseInt(req.body.birthYear);
  console.log("POST request body:", req.body);
  res.render('user',{firstName: req.body.firstName, lastName: req.body.lastName, age});
});

module.exports = router;
