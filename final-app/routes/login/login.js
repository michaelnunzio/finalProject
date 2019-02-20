const router = require("express").Router();
var userCand = require('../../models/candLogin');
var compUser = require('../../models/compLogin');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
// const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);


/******************************* router to register candidate details to db *********************************/
router
  .route("/register/candidate")
  .post(function(req, res){

      console.log(req.body);
      var firstName = req.body.FirstName;
      var lastName = req.body.LastName;
      var email = req.body.Email;
      var password = req.body.Password;
      var password2 = req.body.Password2;
      var title = req.body.Title;
      var description = req.body.Description;
      var technologies = req.body.Technologies;
      var github = req.body.Github;
      var project = req.body.Project; 

      console.log(firstName);

      // Validation
      // req.checkBody('firstName', "First Name is Required").notEmpty();
      // req.checkBody('lastName', 'Last Name is required').notEmpty();
      // req.checkBody('email', 'Email is required').notEmpty();
      // req.checkBody('email', 'Email is not valid').isEmail();
      // req.checkBody('password', 'Email is required').notEmpty();
      // req.checkBody('password2', 'Passwords do not match').equals(req.body.password)
      // req.checkBody('title', 'Title is required').notEmpty();
      // req.checkBody('description', 'Description is required').notEmpty();
      // req.checkBody('technologies', 'Technologies is required').notEmpty();

      var errors = req.validationErrors();

      if(errors){
        console.log(errors)
      }else{
        console.log('no errors');
        var newUser = new userCand({
          first: firstName,
          last: lastName,
          email: email,
          password: password,
          title: title,
          tech: technologies,
          desc: description,
          git: github
        });

        userCand.createUser(newUser, function(err, user){
          if(err) throw err;
          console.log(user);
        });

        req.flash('success_msg', 'You are registered and can now login');
        console.log('you are now registered and can login');
        res.redirect('/login/candidate');
      }
  })

/************************* router to register employer details to db ******************************/
router
  .route("/register/employer")
  .post(function(req, res){

      console.log(req.body);
      var firstName = req.body.FirstName;
      var lastName = req.body.LastName;
      var email = req.body.Email;
      var password = req.body.Password;
      var password2 = req.body.Password2;
      var company = req.body.Company;
      var industry = req.body.Industry; 

      console.log(firstName);

      var errors = req.validationErrors();

      if(errors){
        console.log(errors)
      }else{
        console.log('no errors');
        var newCompUser = new compUser({
          first: firstName,
          last: lastName,
          email: email,
          password: password,
          company: company,
          industry: industry
        });

        compUser.createCompUser(newCompUser, function(err, user){
          if(err) throw err;
          console.log(user);
        });

        req.flash('success_msg', 'You are registered and can now login');
        console.log('you are now registered and can login');
        res.redirect('/login/employer');
      }
  })

/************************* Passport authentication for candidate ******************************/
  passport.use('candidate', new LocalStrategy(
    function(username, password, done) {
      console.log(username);
      console.log(password);

      userCand.getUserByUsername(username, function(err, user){
        if(err) throw err;
        console.log(user);
        if(!user){
          return done(null, false, {message: 'Unknown User'});
        }

        userCand.comparePassword(password, user.password, function(err, isMatch){
          if(err) throw err;
          if(isMatch){
            return done(null, user);
          }else{
            return done(null, false, {message: 'Invalid Password'});
          }
        })
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log(id);
    userCand.getUserById(id, function(err, user) {
      console.log(user);
      done(err, user);
    });
  });

  /************************* Passport authentication for Employer ******************************/
  passport.use('employer', new LocalStrategy(
    function(username, password, done) {
      console.log(username);
      console.log(password);

      compUser.getCompUserByUsername(username, function(err, user){
        if(err) throw err;
        console.log(user);
        if(!user){
          return done(null, false, {message: 'Unknown User'});
        }

        compUser.comparePassword(password, user.password, function(err, isMatch){
          if(err) throw err;
          if(isMatch){
            return done(null, user);
          }else{
            return done(null, false, {message: 'Invalid Password'});
          }
        })
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    console.log(id);
    userCand.getCompUserById(id, function(err, user) {
      console.log(user);
      done(err, user);
    });
  });

  // login for candidate
  router.post('/login/candidate',
  passport.authenticate('candidate', {successRedirect:'/userProfile', failureRedirect:'/login/candidate', failureFlash:true}),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    res.redirect('/register');
  });

  // login for Employer
  router.post('/login/employer',
  passport.authenticate('employer', {successRedirect:'/compProfile', failureRedirect:'/login/employer', failureFlash:true}),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    res.redirect('/register');
  });

  router.get('/logout', function(req, res){
    console.log(req);
    console.log(res);
    console.log('logging out')
    req.logOut();
    req.flash('success_msg', 'You are logged out');
    // res.redirect('/');
    req.flash('success_msg', 'You are registered and can now login');
    console.log('you are now registered and can login');
    res.redirect('/login/employer');
  })

module.exports = router;