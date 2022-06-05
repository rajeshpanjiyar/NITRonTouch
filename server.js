const express = require("express")
const mongoose = require("mongoose")
const request = require("request");
const bcrypt = require('bcryptjs')
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")


app.set("view engine", "ejs"); //to use ejs
app.use(express.static(__dirname + "/public")); //for static files to load in server  //prerequisite: must have public folder with all those static files like images and css
app.use(bodyParser.urlencoded({extended: true})); // can use body parser to parse through html files
app.use(bodyParser.json());

require("dotenv").config()

//Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology: true
    // useCreateIndex:true

}).then(()=>{
    console.log("Database CONNECTED")
}).catch(()=>{
    console.log("UNABLE to connect to Database")
})


//use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//import the routes
const userRoutes = require("./routes/user")

// using routes
app.use('/api', userRoutes) //localhost:3000/api/signup






//home
app.get("/", function(req, res){
    res.render("index", { });
});

app.get("/index", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){ 
    //
});


app.get("/api/signup", function(req, res){
    res.render("signup", {alert:""});
});

app.get("/api/index", function(req, res){
    res.render("index");                            
});


var tep = [];

app.get("/api/signin", function(req, res){
   
    res.render("signin", { alert: tep});  
});








//hostel
var block_name = "A";
var hostel_name = "Hostel";

app.get("/hostel", function(req, res){

    res.render("hosteldetail", {block:block_name, hostel: hostel_name });                            
});
app.post("/hostel", function(req, res){ 
    hostel_name = req.body.hostel_name;
    res.redirect("/hostel");
});

const blockArray = ['A', 'B', 'C', 'D', 'E', 'F'];
for(var i = 0; i <= 5; i++)
{
    app.post("/hostel/" + blockArray[i]+"", function(req, res){ 
        block_name = req.body.block;
        res.redirect("/hostel");
    });
}


//mess
var  mess_name = "Mess";
app.get("/mess", function(req, res){
    res.render("messdetail", {messname: mess_name });                            
});
app.post("/mess", function(req, res){ 
    mess_name = req.body.mess_name;
    res.redirect("/mess");
});

//canteen
var cant_name = "Canteen";
app.get("/canteen", function(req, res){
    res.render("canteendetail", {canteename : cant_name});                            
});
app.post("/canteen", function(req, res){ 
    cant_name = req.body.canteen_name;
    res.redirect("/canteen");
});

//parkingarea
app.get("/parking", function(req, res){
    res.render("parkingareadetail");                            
});
app.post("/parking", function(req, res){ 
    //
});






app.listen(process.env.PORT||3000, function(){
console.log("Server is running on port 3000");
});