var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompLoginSchema = new Schema({
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

//company name
  company: {
    type: String,
    required: true,
    unique: true
  },
//industry name 
  industry: {
    type: String,
    required: true,
    unique: true
  },

//add logo later on **ask vin**

});

// This creates our model from the above schema, using mongoose's model method
var CompLogin = mongoose.model("CompLogin", CompLoginSchema);

// Export the Article model
module.exports = CompLogin;