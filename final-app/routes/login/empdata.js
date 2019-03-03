var userCand = require('../../models/candLogin');
var express = require("express");
var path = require("path");
var router = express.Router();


// app.get("/allcands", function(req, res) {
//   compUser.find({"first": "cake"}, function(error, data) {
//     console.log(data);
//     res.json(data)
//   });
// });

var compUser = require("../../models/compLogin")


router.get("/allemploy", function(req, res) {
  // Grab every document in the Articles collection
  compUser.find({})
    .then(function(cands) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(cands);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


router.get("/allcands", function(req, res) {
    // Grab every document in the Articles collection
    userCand.find({})
      .then(function(cands) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(cands);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
module.exports = router;