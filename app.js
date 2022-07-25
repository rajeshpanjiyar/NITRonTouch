const express = require("express")
const mongoose = require("mongoose")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

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

//
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.urlencoded({extended: true})); 

//use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//import the routes
const userRoutes = require("./routes/user")

// using routes
app.use('/api', userRoutes) //localhost:3000/api/signup



app.get("/", function(req, res){
    res.render("signup", { alert:""});                            
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

   



// app.post("/api/signup", function(req, res){
//     // res.render("signup", {name: nam});  
// });


// app.post("/api/signin", function(req, res){
//     // res.render("signin", {name: nam, alert: tep});  
// });





const port = process.env.PORT || 3000;

//starting a server
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})

