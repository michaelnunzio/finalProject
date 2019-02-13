var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  // 'name'- name of candi
  name: {
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
 //'desc'- description of their background
  desc: {
    type: String,
    required: true,
    unique: true
  },
//Technoologies they use.
tech: {
    type: String,
    required: true,
    unique: true
}

//***ADD A WAY TO ADD RES- ASK VINIT***/

});

// This creates our model from the above schema, using mongoose's model method
var Candidate = mongoose.model("Candidate", CandidateSchema);

// Export the Article model
module.exports = Candidate;