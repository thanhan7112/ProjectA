
const express = require("express");
// require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const users = require("./Routes/users");
const auth = require("./Routes/auth");
const bodyParser = require('body-parser');
const cors = require("cors");
const Post = 8090;
const ApiRoute = require('./routes/DataRoute')
app.use(cors());

app.use(express.json());
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', ApiRoute);
app.use("/api/users", users);
app.use("/api/auth", auth);
mongoose.connect('mongodb+srv://marketplacev2:0201172001An@cluster0.v1bgwgu.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")
app.get('/',(req,res) =>{
    res.send('We are on home');
});

app.listen(Post,function(){
    console.log(`The server is running on ${Post}`);
});