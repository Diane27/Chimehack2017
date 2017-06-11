var express = require('express');
var router = express.Router();

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

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
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




module.exports = router;
