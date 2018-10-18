import express from 'express';
import getUser from '../controllers/user';

var router = express.Router();

const controllerHandler = (promise, params) => async (req, res, next) => {
  const boundParams = params ? params(req, res, next) : [];
  console.log(boundParams);
  try {
    const result = await promise(...boundParams);
    return res.json(result || { message: 'OK' });
  } catch (error) {
    return res.status(500) && next(error);
  }
};
const c = controllerHandler;

router.get('/:username', c(getUser, (req, res, next) => [req.params.username]));

module.exports = router;
