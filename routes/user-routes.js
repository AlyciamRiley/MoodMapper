// Requiring models

var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios");

module.exports = function (app) {

// CC: Redirect after authenticating a request

// app.post("/api/login", passport.authentication("local"), 
// function (req, res) {

//     //I think this will return profile page after user logs in? Not sure.
//     res.json("/Profile");
// });


//Create new user
app.post("/api/signup", function (req, res) {
    console.log("SIGNUP" , req.body);
    db.User.create({
        // name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(function(data) {
        res.json(data);
        res.redirect(307, "/api/signup");
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