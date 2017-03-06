const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config.json');

var db;
const dbUsername = config.db.username;
const dbPassword = config.db.password;
const dbURL = `mongodb://${dbUsername}:${dbPassword}@ds133328.mlab.com:33328/test-db-crud`;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
    db.collection('names').find().toArray((err, results) => {
        console.log(results);
        res.render("index.ejs", {names:results});
    });
});

app.post("/names", (req, res) => {
    db.collection('names').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to database');
        res.redirect('/');
    });
});

// app.put("/names", (req, res) => {
//     db.collection("names").findOneAndUpdate()
// });

MongoClient.connect(dbURL , (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, () => {
        console.log("listening on port 3000");
    });
})