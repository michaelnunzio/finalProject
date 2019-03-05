var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

// mongoose.connect('mongodb://localhost/jobhuntr');

if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI) 
} else{
  mongoose.connect("mongodb://localhost/jobhuntr");
}

// User Schema

var Schema = mongoose.Schema;

var CompLoginSchema = new Schema({
//first name
first: {
    type: String,
    required: true,
    trim: true
    },

//last name
last: {
    type: String,
    required: true,
    trim: true
    },

email: {
    type: String,
    required: true,
    unique: true,
    trim: true
    },
//Add pass params
password: {
    type: String,
    required: true,
    trim: true
    },

//company name
  company: {
    type: String,
    required: true,
    unique: true
  },
//industry name 
  industry: {
    type: String,
    required: true
  },

  yes: [    
  ],
    
  no: [  
  ], 

  match: [
    
  ]

//add logo later on **ask vin**

});

// This creates our model from the above schema, using mongoose's model method
var CompLogin = mongoose.model("CompLogin", CompLoginSchema);

// Export the Article model
var compUser = module.exports = CompLogin;


module.exports.createCompUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.save(callback);
      });
    });
  }
  
  module.exports.getCompUserByUsername = function(username, callback){
     var query = {email: username}
     compUser.findOne(query, callback)
  }
  
  module.exports.getCompUserById = function(id, callback){
    // var query = {email: username}
    compUser.findById(id, callback)
  }

  module.exports.getCompUserId = function(id, callback){
    // var query = {email: username}
    compUser.findById(id, callback)
    
  }
  
  module.exports.comparePassword = function(userPassword, hash, callback){
    bcrypt.compare(userPassword, hash, function(err, isMatch) {
      // res === true
      if(err) throw err;
      callback(null, isMatch);
    });
  }
