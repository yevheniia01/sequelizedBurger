var express = require("express");
//var app = express();

//var router = express.Router();
var burger = require("../models/burger.js");
var db = require("../models")


module.exports = function(app){
app.get("/api/burgers/", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({})
  .then(function(dbBurger){
    res.json(dbBurger);
  })
});

// post route
app.post("/api/burgers/", function(req, res) {
  console.log(req.body, 'req in post')
  // takes the request object using it as input for burger.addBurger
  db.Burger.create({burger_name: req.body.burger_name}).then(dbBurger => {
    console.log(dbBurger, 'dbBurger')
    res.json(dbBurger)
  })
});

// put route
app.put("/api/burgers/:id", function(req, res) {
  db.Burger.update(
    {devoured: true, id: req.body.devoured}, 
    {where: {id: req.params.id}
    }) 
  .then(function(dbBurger){
    res.json(dbBurger)
  })
});
}

