import express from 'express';
import {
  login
} from '../controllers/user'

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/login', function (req, res, next) {
  res.render('login');
});

router.post('/login', login);

router.get('/logout', (req, res) => {  
  if (req.session.user) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;