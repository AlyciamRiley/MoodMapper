var db = require("../models");
var axios = require("axios");

module.exports = function(app){
    //routes go here
    app.get("/api/graph", function(req, res){
        console.log('HERE', req)
        db.Mood.findAll({}).then(function(data){
            return res.json(data);
        });
    });


    app.post("/api/survey", function(req, res){
        console.log("BODY", req.body);

        db.Mood.create({
            anxiety: req.body.anxiety,
            depression: req.body.depression,
            concentration: req.body.concentration,
            energy: req.body.energy,
            sleep: req.body.sleep
            // usersssssss: XXXX            
        }).then(function(data){
            res.json(data);
        });
    });
    
};