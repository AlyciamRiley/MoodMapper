
// Require Node Modules
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

//Requiring passport 
const passport = require("./config/passport");
var isAuthenticated = require("./config/middleware/isAuthenticated");

const sequelize = require("sequelize");

const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

//Bring in the models
const db = require("./models");



// Serve static content for the app from the "public" directory in the application directory.

app.use('/', express.static(`${__dirname}/public`));
// app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// parse application/x-www-form-urlencoded


require("./routes/api-routes")(app);
require("./routes/user-routes")(app);

// listen on port 8000
// const PORT = process.env.PORT || 3306;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

