const User = require("../models/user");
const Hosteldetails = require("../models/hosteldetails");
const Mess = require("../models/messes");

const { validationResult } = require("express-validator");
// const user = require("../models/user");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var signinAlert = [];
var signupAlert = [];

exports.signup = (req, res) => {
  // validation
  signupAlert = [];
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    signupAlert.push(errors.array()[0].msg);
    
  }

  const user = new User(req.body);

  var birth = user.dob;
  var gend = user.gender;

  user.created_at = Date.now();

  user.save((err, user) => {
    if (err) {
    
      if (
        (birth === undefined || birth.length === 0) &&
        signupAlert.length === 0
      ) {
        signupAlert.push("Must be a valid date");
      } else if (
        (gend === undefined || gend.length === 0) &&
        signupAlert.length === 0
      ) {
        signupAlert.push("Please select a gender");
      } else if (signupAlert.length === 0) {
        signupAlert.push("[Unable to add user]");
      }
    }

    if (signupAlert.length === 0) {
      signupAlert = [];
     
      res.render("signin", { alert: signupAlert });
    } else {
      res.render("signup", { alert: signupAlert });
    }
  });
};


// signin
exports.signin = (req, res) => {
  const { email, password } = req.body;
   
  signinAlert = [];

  //email exists or not
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      signinAlert.push("Email was not found");
      
    }

    //authenticate the user
    if ( signinAlert.length === 0 &&  !user.authenticate(password)) {
      signinAlert.push("Email and password does not match");
      
    }

    if(signinAlert.length === 0){
      res.redirect("/index");

    }else{
        res.render("signin", { alert: signinAlert });
        }

  });
};




//signout
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successful",
  });
};


//mess
exports.mess = (req, res) => {

  const mess = new Mess(req.body);

  mess.save((err, mess) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/mess");

  });

};






