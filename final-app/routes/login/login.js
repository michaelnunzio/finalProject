const router = require("express").Router();
var userCand = require('../../models/candLogin');
var compUser = require('../../models/compLogin');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
const util = require('util')
const {ensureAuthenticated} = require("../../config/auth");




/******************************* router to register candidate details to db *********************************/
router.route("/register/candidate")
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
router.route("/register/employer")
  .post(function(req, res){

      console.log(req.body);
      var firstName = req.body.FirstName;
      var lastName = req.body.LastName;
      var email = req.body.Email;
      var password = req.body.Password;
      var password2 = req.body.Password2;
      var company = req.body.Company;
      var industry = req.body.Industry; 

      // console.log(firstName);

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
          // console.log(user);
        });

        req.flash('success_msg', 'You are registered and can now login');
        console.log('you are now registered and can login');
        res.redirect('/login/employer');
      }
  })

/************************* Passport authentication for candidate ******************************/
  passport.use('candidate', new LocalStrategy(
    function(username, password, done) {
      // console.log(username);
      // console.log(password);

      userCand.getUserByUsername(username, function(err, user){
        if(err) throw err;
        // console.log(user);
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

  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });
  
  // passport.deserializeUser(function(id, done) {
  //   // console.log(id);
  //   userCand.getUserById(id, function(err, user) {
  //     // console.log(user);
  //     done(err, user);
  //   });
  // });

  /************************* Passport authentication for Employer ******************************/
  passport.use('employer', new LocalStrategy(
    function(username, password, done) {
      // console.log(username);
      // console.log(password);

      compUser.getCompUserByUsername(username, function(err, user){
        if(err) throw err;
        // console.log(user);
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
    // console.log("*******************************")
    // console.log(user)
    var userData = {
      id: user._id,
      company: user.company
    }
    done(null, userData);
  });
  
  passport.deserializeUser(function(userData, done) {


    if(userData.company){

      compUser.getCompUserById(userData.id, function(err, user) {
        // console.log(user.company);        
          done(err, user);
        });
      }else{
          userCand.getUserById(userData.id, function(err, user) {
              // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
              done(err, user);
            });
        }
  });

  /*********************************** login for candidate ****************************************/
  router.post('/login/candidate',
  passport.authenticate('candidate', {successRedirect:'/userProfile', failureRedirect:'/login/candidate', failureFlash:true}),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    res.redirect('/register/candidate');
  });


  // //test- route to get comp name
  // router.get('/compProfile', function(req,res){

  //   console.log("test: "+req.body.Company);
  //   // console.log(util.inspect(req.body.Company, {showHidden: false, depth: null}))
  //   console.log('-----------------')

  // });


  // router.get("/compProfile", function(req, res) {
  //   // console.log("kjsdghkjhsakjdhlsdjhakjdhsajh")
  //   // console.log("user", req.user)
  //   // console.log("------------------------")
  //   // console.log("I AM LOGGED IN")
  //   // console.log("------------------------")
  //   // Grab every document in the Articles collection
  //   compUser.find(se)
  //   .then(function(cands) {
  //     // If we were able to successfully find Articles, send them back to the client
  //     req.json(cands);
  //     console.log('------------------')
  //     console.log('response: ' + cands)
  //     console.log('------------------')
  //   })
  //   .catch(function(err) {
  //     // If an error occurred, send it to the client
  //     res.json(err);
  //   });
  // });



  /*********************************** login for Employer *******************************************/
  router.post('/login/employer', (req,res,next) => {

    passport.authenticate('employer', {successRedirect: '/compProfile',failureRedirect: '/login/employer'})(req, res, next)
  });
  // function(req, res) {
  //   // console.log(r)
  //   // If this function gets called, authentication was successful.
  //   // `req.user` contains the authenticated user.
  //   // res.send({isAuthenticated: true});
  //   console.log('isAuthenticated: '+ req.isAuthenticated());
  //   console.log('unAuthorized: '+req.isUnauthenticated());
  //   // res.json({auth: req.isAuthenticated()});
  //   res.redirect('/')
    // res.redirect('/register/employer');
    // res.req.isAuthenticated();
  // });

  /*********************************** logout session *******************************************/
  router.route("/logout")
    .get((req, res) => {


    console.log(req.session);

    console.log('before logout is Authenticated: '+req.isAuthenticated())    
    console.log('before logout is unAuthenticated: '+req.isUnauthenticated());
    console.log('logging out')
    req.logout();
    console.log('is Authenticated: '+req.isAuthenticated())
    console.log('is unAuthenticated: '+req.isUnauthenticated());
    res.redirect('/')

  //   // req.flash('success_msg', 'You are logged out');
  //   // req.flash('success_msg', 'You are registered and can now login');
  //   // console.log('you are now registered and can login');
    // res.render('/');
  })
  // router.get('/logout', function(req, res, next) {
  //   console.log('logging out')
  //   if (req.session) {
  //     // delete session object
  //     req.session.destroy(function(err) {
  //       if(err) {
  //         return next(err);
  //       } else {
  //         return res.redirect('/');
  //       }
  //     });
  //   }
  // });

  // router.route('/compProfile')
  //   .get((req, res) => {
  //     console.log("authenticate in get compProfile: "+req.isAuthenticated());
  //     console.log("unAuthenticate in get compProfile: "+req.isUnauthenticated());
  //   })

  router.get('/auth/user',
  (req, res) => {

    // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    // console.log(req.user)
    // console.log('new Authenticated get route: '+req.isAuthenticated());

    // res.json(req.isAuthenticated());
    res.json({
      'auth': req.isAuthenticated(),
      'user': req.user
    });
    // res.json({'user': req.user});

  })


  router.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });


  
module.exports = router;