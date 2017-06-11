var express = require('express');
var router = express.Router();

// DATABASE
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://admin:1@ds119682.mlab.com:19682/refugeenius";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// SIGNUP
router.post('/signup', function(req, res, next) {
  // Connect to DB.
  MongoClient.connect(dburl, function(err, db) {
    if (err) return console.log(err);

    // Document format.
    var user = {phoneNumber: req.body.phoneNumber,
                password: req.body.password};

    // Add to database.
    db.collection("user").insertOne(user, function(err, res) {
      if (err) return console.log(err);
      db.close();
    });

  });

  // Change this line to the next page after signup.
  res.send("Signup Successful");
});


module.exports = router;
