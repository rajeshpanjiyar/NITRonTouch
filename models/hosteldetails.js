const mongoose = require("mongoose");


const hosteldetails = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        // maxlength: 30,
        trim: true,
      },
      branch: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
      year: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
      joined_year: {
        type: Date,
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
      room_no: { 
        type: String,
        trim: true,
        required: true,
       },
    },
    { timestamp: true }
  );



// const newModel = new mongoose.model("rooms", NewSchema);

// // const data = new newModel({name:'messy', age:30});
// // data.save();

// // or

// //this is better than above
// const data = async()=>{
//     const result = await newModel.insertMany([{name:'ronaldo', age: 35},
// {name:'sandip' , age:25}]);
// console.log(result);

// }

// //finding records
// const findData = async()=>{
//     const result = await newModel.find();
// console.log(result);
// }

// // calling function
// data();
// findData();





//exporting module
module.exports = mongoose.model("Hosteldetails", hosteldetails);

