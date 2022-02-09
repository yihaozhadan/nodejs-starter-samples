const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('minus');
});

router.post('/', function(req, res) {
  const f = parseInt(req.body.firstNum);
  const s = parseInt(req.body.secondNum);
  const diff = f-s;
  res.send(diff.toString());
});

module.exports = router;
