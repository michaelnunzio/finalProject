var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/jobhuntr');

// User Schema

var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  // 'name'- name of candi
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

//email
email: {
  type: String,
  required: true,
  unique: true,
  trim: true,
  index: true
  },
//Add pass params
password: {
    type: String,
    required: true,
    trim: true
    },

// 'title'- their position
title: {
  type: String,
  required: true,
}, 

//Technoologies they use.
tech: {
  type: String,
  required: true

},
 //'desc'- description of their background
desc: {
  type: String,
  required: true
},

//github
git: { 
type: String,
required: false,
unique: true,
trim: true
},
//***ADD A WAY TO ADD RES- ASK VINIT***/

company:{
  type: Boolean,
  default: false
},

yes: [
{
companyid: {type:String}

}

],

no: [ {
  type: String,
  unique: true 
  
  } ]


});

// This creates our model from the above schema, using mongoose's model method
var Candidate = mongoose.model("Candidate", CandidateSchema);

// Export the Article model
var userCand = module.exports = Candidate;

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function(username, callback){
   var query = {email: username}
   userCand.findOne(query, callback)
}

module.exports.getUserById = function(id, callback){
  // var query = {email: username}
  userCand.findById(id, callback)
}

module.exports.comparePassword = function(userPassword, hash, callback){
  bcrypt.compare(userPassword, hash, function(err, isMatch) {
    // res === true
    if(err) throw err;
    callback(null, isMatch);
  });
}
