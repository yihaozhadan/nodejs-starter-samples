var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var sum = 0;
  // req.query is [object object]
  console.log("Req.query: "+req.query);
  
  var f = parseInt(req.query.first);
  var s = parseInt(req.query.second);
  console.log("First:"+f+" Second:"+s);
  
  sum = f+s;
  if(isNaN(sum)) {
    res.send("Try to change the parameters in address bar. Example: localhost:3000/plus?first=1&second=2");
  }else{
    res.send(sum.toString());
  }

});

module.exports = router;
