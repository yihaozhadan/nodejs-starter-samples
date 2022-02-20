const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const f = parseInt(req.query.first);
  const s = parseInt(req.query.second); 
  const sum = f+s;
  if(isNaN(sum)) {
    res.send("Try to change the parameters in URL. Example: localhost:3000/plus?first=1&second=2");
  }else{
    res.send(sum.toString());
  }

});

module.exports = router;
