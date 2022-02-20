const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    let message = "You are not logged in.";
    if (req.cookies.firstName)
        message = "Welcome " + req.cookies.firstName + " " + req.cookies.lastName;
    res.render('cookies', {message});
});

// Session cookies
router.get('/session', function(req, res) {
    res.cookie('firstName', 'Tom');
    res.cookie('lastName', 'Cruise');
    res.send("Session cookies are all set.");
})

router.get('/logout', function(req, res) {
    // Clear cookie
    res.clearCookie("firstName");
    res.clearCookie("lastName");
    res.render('logout');
});

module.exports = router;