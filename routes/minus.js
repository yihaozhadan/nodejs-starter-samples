var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('minus');
});

router.post('/', function(req, res, next) {
  // Don't use console.log("Req.body: "+req.body);
  // Cannot convert object to primitive value
  console.log("Req.body: ",req.body);

  var f = parseInt(req.body.firstNum);
  var s = parseInt(req.body.secondNum);
  console.log("First:"+f+" Second:"+s);

  var diff = f-s;
  console.log("Diff:"+diff);
  res.send(diff.toString());
});

module.exports = router;
