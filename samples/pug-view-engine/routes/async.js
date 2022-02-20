const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('async');
});

router.get('/convert', function(req, res) {
    let r;
    switch(req.query.number) {
        case "1":
            r = "One";
            break;
        case "2":
            r = "Two";
            break;
        case "12":
            r = "Twelve";
            break;
        case "123":
            r = "One hundred twenty three";
            break;
        default:
            r = req.query.number;
    }
    res.send(r);
});

module.exports = router;
