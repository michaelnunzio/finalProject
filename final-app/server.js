var express = require("express");
var path = require('path');
var cookieParser = require("cookie-parser");
const favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressValidator = require("express-validator");
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongo = require("mongod");
const mongoose = require("mongoose");
const users = require("./routes/login/login")
// mongoose.connect("mongodb://localhost/jobhuntr");
// var db = mongoose.connect;
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/login/empdata")

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressValidator());

// Express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

  // Connect Flash
  app.use(flash());
  
  // Add routes, both API and view
  app.use(users);
  app.use(routes);
  

//Global Variables
// app.use(function(req,res,next){
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
// })

// Connect to the Mongo 
// if(process.env.MONGODB_URI){
//   mongoose.connect(process.env.MONGODB_URI) 
// } else{
//   mongoose.connect("mongodb://localhost/jobhuntr");
// }

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jobhuntr");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
