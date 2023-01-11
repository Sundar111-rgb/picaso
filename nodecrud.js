const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//var EmpID = 0;
app.get("/api/get", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    //Find all documents in the customers collection:
    dbo.collection("Employee").find({}).sort({ id: 1 }).toArray(function (err, result) {
      if (err) throw err;
      console.log("====>>>>>", result);
      res.send(result);
      db.close();
    });
  });
});


app.post("/api/login", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    console.log('Input', myobj);
    //Find all documents in the customers collection:
    dbo.collection("Employee").find(myobj).toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      console.log('Output', result)
      db.close();
    });
  });

});



app.post("/api/getonerow", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    console.log(myobj)
    //Find all documents in the customers collection:
    dbo.collection("Employee").find(myobj).toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      console.log(result)
      db.close();
    });
  });

});


app.post("/api/insert/", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = req.body;
    dbo.collection("Employee").insertOne(myobj, function (err, result) {
      if (err) throw err;
      console.log('Data Inserted', result);
      db.close();
    });
  });
  const hhh = JSON.stringify(req.body)
  res.send(hhh);
});

app.delete(`/api/delete/:EmpID`, (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");

    var myquery = { id: parseInt(req.params.EmpID) };
    dbo.collection("Employee").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log(obj, req.params.k);
      res.send("Deleted Successfully");
      db.close();
    });
  });
});

app.put("/api/update/", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    console.log('req', req.body);
    var myquery = { id: parseInt(req.params.EmpID) };
    var newvalues = { $set: { first_name: "M11ickey", last_name: "Canyoner123" } };
    dbo.collection("Employee").updateOne(myquery, newvalues, function (err, obj) {
      if (err) throw err;
      console.log(obj);
      res.send("1 document updated");
      db.close();
    });

  });


});

app.listen(3001, () => {
  console.log("running on port 3001")
});
