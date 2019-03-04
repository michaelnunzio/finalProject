var userCand = require('../../models/candLogin');
// var compUser = require('../../models/compLogin')
var express = require("express");
var path = require("path");
var router = express.Router();
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
        description: req.body.Description, technologies: req.body.Technologies, 
        github: req.body.Github
        
    }},function (err,user){
      if(err){
          res.redirect("/")
      } else {
      user.save()
      res.redirect('/editProfile')
      }
    }
      )});

      router.post('/allemploy', function(req, res){
        console.log(req.session)
        console.log('pass employ: ++ ', req.session.passport)
        // console.log(req.session.passport.email)
    
        compUser.findByIdAndUpdate(req.session.passport.user.id, 
          {$set:{email: req.body.Email, company: req.body.Company, 
            industry: req.body.Industry
            
        }},function (err,user){
          if(err){
              res.redirect("/")
          } else {
          user.save()
          res.redirect('/editCprofile')
          }
        }
          )});

module.exports = router;