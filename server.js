const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");


var PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

// this is our MongoDB database

var db = require("../models"); //checkroute *****CHECK ROUTE******

const dbRoute= 'mongodb://localhost/finalProject'
//**add db ^^^***/
var databaseUri= "mongodb://localhost/finalProject";

if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect(databaseUri)
}


mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
  );
  
  let db = mongoose.connection;
  
  db.once("open", () => console.log("connected to the database"));
  
  // checks if connection with the database is successful
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  
  // (optional) only made for logging and
  // bodyParser, parses the request body to be a readable json format
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(logger("dev"));

  // launch our backend into a port
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
  