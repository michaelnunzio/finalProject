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


  router.post('/allcands', function(req, res){
    console.log(req.session)
    console.log('pass: ++ ', req.session.passport)
    // console.log(req.session.passport.email)

    userCand.findByIdAndUpdate(req.session.passport.user.id, 
      {$set:{email: req.body.Email, title: req.body.Title, 
      technologies: req.body.Technologies, github: req.body.Github, 
      project: req.body.Project
    }},function (err,user){
      if(err){
          res.redirect("/")
      } else {
      user.save()
      res.redirect('/editProfile')
      }
    }
      )});


      // var email = req.body.Email;
      // var title = req.body.Title;
      // var description = req.body.Description;
      // var technologies = req.body.Technologies;
      // var github = req.body.Github;
      // var project = req.body.Project; 
module.exports = router;