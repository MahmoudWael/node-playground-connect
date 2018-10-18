import express from 'express';
import getUser from '../controllers/user';
import controllerHandler from './base'

var router = express.Router();


router.get('/:username', controllerHandler(getUser, (req, res, next) => [req.params.username]));

module.exports = router;
