const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, ()=> {
    console.log("listening on port 3000");
});

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/names", (req, res) => {
    console.log(req.body);
});