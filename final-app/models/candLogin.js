var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  // 'name'- name of candi
//first name
first: {
  type: String,
  required: true,
  unique: true
  },

//last name
last: {
  type: String,
  required: true,
  unique: true
  },

email: {
  type: String,
  required: true,
  unique: true
  },
//Add pass params
password: {
    type: String,
    required: true,
    unique: true
    },

  // 'title'- their position
  title: {
    type: String,
    required: true,
    unique: true

  }, 

//Technoologies they use.
tech: {
  type: String,
  required: true,
  unique: true
},
 //'desc'- description of their background
  desc: {
    type: String,
    required: true,
    unique: true
  },

//github
git: { 
type: String,
required: false
}
//***ADD A WAY TO ADD RES- ASK VINIT***/

});

// This creates our model from the above schema, using mongoose's model method
var Candidate = mongoose.model("Candidate", CandidateSchema);

// Export the Article model
module.exports = Candidate;