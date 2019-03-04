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

router.get("/employ/:id", function(req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  compUser.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .then(function(comp) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(comp);
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

  // post route for saving button click's from jobcard 
  router.post("/allcandsy", function(req,res) {
    console.log('anything');
    console.log("this is our cand"+ req.body.candy)
    console.log("this is the job we are interested in" + req.body.jobcards._id)
    
    //if the positive button is clicked save the job id to YES key
    if(req.body.button === 'positive'){
      userCand.findByIdAndUpdate(
       req.body.candy,
       {$addToSet: {"yes": req.body.jobcards._id}},
       //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
      //  {safe: true, upsert: true, new : true},
          function(err, model) {
              console.log(err);
          }
      )
     
     compUser.find({"_id": req.body.jobcards._id}).then(function(comp) {
      // If we were able to successfully find Articles, send them back to the client
      console.log(comp)
      console.log(comp[0].yes)

      let newarray = comp[0].yes; 
      console.log(newarray)

      for (i = 0; i < newarray.length; i++) {
        console.log(newarray[i])
        if (req.body.candy == newarray[i]) {
          console.log("yes match")

           userCand.findByIdAndUpdate(
          req.body.candy,
          {$addToSet: {"match": req.body.jobcards._id}},
          //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
         //  {safe: true, upsert: true, new : true},
             function(err, model) {
                 console.log(err);
             }
         )

         compUser.findByIdAndUpdate(
          req.body.jobcards._id,
          {$addToSet: {"match": req.body.candy}},
          //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
         //  {safe: true, upsert: true, new : true},
             function(err, model) {
                 console.log(err);
             }
         )





        }else {
          console.log("no match")
        }
      }

    })

       
      }
     

    

    //else if the negative button is clicked save the job id to NO key
    else{
      userCand.findByIdAndUpdate(
        req.body.candy,
        {$addToSet: {"no": req.body.jobcards._id}},
        //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
       //  {safe: true, upsert: true, new : true},
           function(err, model) {
               console.log(err);
           }
       )
    }
  }); 

  // post route for saving button click's from peopleCard 
  router.post("/allemploy", function(req,res) {
    console.log('anything');
    console.log("this is our employer "+ req.body.employer)
    console.log("this is the job we are interested in" + req.body.peoplecards._id)
    
    //if the positive button is clicked save the job id to YES key
    if(req.body.button === 'positive'){
      compUser.findByIdAndUpdate(
       req.body.employer,
       {$addToSet: {"yes": req.body.peoplecards._id}},
       //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
      //  {safe: true, upsert: true, new : true},
          function(err, model) {
              console.log(err);
          }
      )

      userCand.find({"_id": req.body.peoplecards._id}).then(function(person) {
        // If we were able to successfully find Articles, send them back to the client
        console.log(person)
        console.log(person[0].yes)
  
        let newarray = person[0].yes; 
        console.log(newarray)
  
        for (i = 0; i < newarray.length; i++) {
          console.log(newarray[i])
          if (req.body.employer == newarray[i]) {
            console.log("yes match")
  
             userCand.findByIdAndUpdate(
            req.body.peoplecards._id,
            {$addToSet: {"match": req.body.employer}},
            //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
           //  {safe: true, upsert: true, new : true},
               function(err, model) {
                   console.log(err);
               }
           )
  
           compUser.findByIdAndUpdate(
            req.body.employer, 
            {$addToSet: {"match": req.body.peoplecards._id}},
            //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
           //  {safe: true, upsert: true, new : true},
               function(err, model) {
                   console.log(err);
               }
           )
  
  
  
  
  
          }else {
            console.log("no match")
          }
        }
  
      })















    }
    
    //else if the negative button is clicked save the job id to NO key
    else{
      compUser.findByIdAndUpdate(
        req.body.employer,
        {$addToSet: {"no": req.body.peoplecards._id}},
        //  {$addToSet: {"yes": {companyid: req.body.jobcards._id}}},
       //  {safe: true, upsert: true, new : true},
           function(err, model) {
               console.log(err);
           }
       )
    }
  }); 
module.exports = router;