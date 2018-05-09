// Requiring models

var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios");

module.exports = function (app) {

// Redirect after authenticating a request

app.post("/api/login", passport.authenticate("local"), 
function (req, res) {

    //I think this will return profile page after user logs in? Not sure.
    res.json("/Profile");
});


//Create new user
app.post("/api/signup", function (req, res) {
    console.log("SIGNUP" , req.body);
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(function(data) {
        res.json(data);
        res.redirect("/Main");
    }).catch(function(err) {
        console.log(err);
        res.json(err);
    });
});

//Logout 
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
});

}