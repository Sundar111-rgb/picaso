
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }));


app.get("/api/get", (req,res) => { 
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            //Find all documents in the customers collection:
            dbo.collection("customers").find({}).toArray(function(err, result) {
              if (err) throw err;
               res.send(result);
              db.close();
            });
          });
          
});

app.post("/api/insert/",  (req, res) => {
      MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = req.body;
            dbo.collection("customers").insertOne(myobj, function(err, result) {
              if (err) throw err;
              console.log(result);
              db.close();
            });
          });
      const hhh = JSON.stringify(req.body)
      res.send(hhh);
});

app.delete('/api/delete/:EmpID',(req,res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
  
    var myquery = { id: req.params.EmpID };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj, req.params.k);
      db.close();
    });
  });
   //  res.send(req.params.k);
});

app.put("/api/update/",(req,res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Highway 37" };
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
});

app.listen(3001, ()=> {
 console.log("running on port 3001")
});

Image upload in MERN link
https://www.youtube.com/watch?v=AXiOCyVF_Y8
https://youtu.be/AXiOCyVF_Y8
//Turbo modules
//Fabrric
//debouncing andd throtttling
