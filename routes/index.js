var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', function (req, res, next) {
  res.render('chat', {username: req.query.username});
});

module.exports = router;
