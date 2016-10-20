var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('async');
});

router.get('/convert', function(req, res, next) {
    var r = "Null";
    console.log("Number2: ", req.query);
    switch(req.query.number) {
        case "1":
            this.r = "One";
            console.log("One");
            break;
        case "2":
            this.r = "Two";
            console.log("Two");
            break;
        case "12":
            this.r = "Twelve";
            console.log("Twelve");
            break;
        case "123":
            this.r = "One hundred twenty three";
            console.log("One hundred twenty three");
            break;
        default:
            this.r = req.query.number;
            console.log("Null");
    }
    res.send(this.r);
});

module.exports = router;
