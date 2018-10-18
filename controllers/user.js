import {
  getUser as getUserService,
  login as loginService
} from '../services/user.js'

export function getUser(username) {
  if (username === '') {
    throw new Error('Username can\'t be blank');
  }
  return getUserService(username);
}

export async function login(req, res, next) {  
  loginService(req.body.username)
    .then((user) => {
      req.session.user = user;      
      res.redirect('/chat');
    })
    .catch((e) => {
      res.json(e);
    })
}