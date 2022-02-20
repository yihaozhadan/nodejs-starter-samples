var express = require('express');
var router = express.Router();

/* http_get.md home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NodeJS Samples' });
});

module.exports = router;
