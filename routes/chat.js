import express from 'express';
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('chat', {
    username: req.session.user[0].username
  });
});

module.exports = router;