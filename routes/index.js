var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var dburl = "mongodb://refugeenius:refugeenius123@ds121222.mlab.com:21222/refugeenius"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'main' });
});


router.get('/main-vol', function(req, res, next) {
  res.render('main-vol', { title: 'main-vol' });
});


router.get('/progress-student', function(req, res, next) {
  res.render('progress-student', { title: 'progress-student' });
});

router.get('/tutorial-instructor', function(req, res, next) {
  res.render('tutorial-instructor', { title: 'tutorial-instructor' });
});

router.get('/tutorial-student', function(req, res, next) {
  res.render('tutorial-student', { title: 'tutorial-student' });
});

router.get('/whats-next-student', function(req, res, next) {
  res.render('whats-next-student', { title: 'progress-student' });
});

router.get('/main-vol-files', function(req, res, next) {
  res.render('main-vol-files', { title: 'main-vol-files' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'main-vol-files' });
});

// POST

// SIGNUP
router.post('/signmeup', function(req, res, next) {
  // Connect to DB.
  MongoClient.connect(dburl, function(err, db) {
    if (err) return console.log(err);

    // Document format.
    var user = {"phoneNumber": req.body.phoneNumber,
                "userName": req.body.userName,
                "password": req.body.password,
                "userType": req.body.userType,
                "language": req.body.language};

    // Add to database.
    db.collection("users").insertOne(user, function(err, res) {
      if (err) return console.log(err);
      db.close();
    });

  });

  // Change this line to the next page after signup.
  return res.redirect('/main');
});


module.exports = router;
