
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const Post = 8090;
const ApiRoute = require('./routes/DataRoute')
app.use(cors());

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', ApiRoute);

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
app.use((req, res, next) => {
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
