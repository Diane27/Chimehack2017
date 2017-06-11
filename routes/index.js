var express = require('express');
var router = express.Router();

// DATABASE
var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://admin:1@ds119682.mlab.com:19682/refugeenius";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/signup', function(req, res, next) {
  MongoClient.connect(dburl, function(err, db) {
  if (err) return console.log(err);
  var user = {phoneNumber: req.body.phoneNumber,
              password: req.body.password};
  db.collection("user").insertOne(user, function(err, res) {
    if (err) return console.log(err);
    db.close();
  });
});

  res.send("Signup Successful");
});


module.exports = router;
