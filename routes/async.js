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
            console.log("One");
            break;
        case "2":
            r = "Two";
            console.log("Two");
            break;
        case "12":
            r = "Twelve";
            console.log("Twelve");
            break;
        case "123":
            r = "One hundred twenty three";
            console.log("One hundred twenty three");
            break;
        default:
            r = req.query.number;
            console.log("Null");
    }
    res.send(r);
});

module.exports = router;
