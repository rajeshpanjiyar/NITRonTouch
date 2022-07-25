const mongoose = require("mongoose");


const messSchema = new mongoose.Schema(
    {
      mess_name: {
        type: String,
        // required: true,
        // maxlength: 30,
        trim: true,
      },
      slot : {
        type: String,
        trim: true,
        // required: true,
      },
      day: {
        type: String,
        trim: true,
        // required: true,
      },
      dishes: {
        type: String,
        // required: true,
      }
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
module.exports = mongoose.model("Mess", messSchema);

