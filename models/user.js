const mongoose = require("mongoose");
const uuidv1 = require("uuidv1");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 30,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    encry_password: {
      type: String,
      required: true,
    },
    dob: {
     type : String,
     trim: true,
     required: true,
    },
    gender: {
      type: String,
      trim: true,
      required: true,
    },
    course: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    roll_number: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    branch: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    current_year: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    joined_year: {
      type : String,
     trim: true,
     required: true,
    },
    permanent_address: {
     type : String,
     trim: true,
     required: true,
    },
     contact: {
      type: String,
      trim: true,
      required: true,
    },
    hostel: {
      type: String,
      trim: true,
      required: true,
    },
    block: {
      type: String,
      trim: true,
      required: true,
    },
    room_number: { 
      type: String,
      trim: true,
      required: true,
     },

    created_at: { 
        type: Date
     },
    salt: String,
  },
  { timestamp: true }
);


userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};


//exporting module
module.exports = mongoose.model("User", userSchema);
