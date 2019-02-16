var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobSchema = new Schema({
  // 'name'- name of company
  company: {
    type: String,
    required: true,
    unique: true
  },
  // 'position'- position they're looking for
  position: {
    type: String,
    required: true,
    unique: true

  }, 
 //'jobDesc'- description of job
  jobDesc: {
    type: String,
    required: true,
    unique: true
  },
//required Technoologies they use.
reqTech: {
    type: String,
    required: true,
    unique: true
},

website: {
    type: String,
    required: true,
    unique: true
}

//add logo later on **ask vin**

});

// This creates our model from the above schema, using mongoose's model method
var NewJob = mongoose.model("NewJob", JobSchema);

// Export the Article model
module.exports = NewJob;