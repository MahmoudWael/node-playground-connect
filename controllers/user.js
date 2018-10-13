import { getUser as getUserService } from '../services/user.js'

function getUser(username) {
  if (username === '') {
    throw new Error('Username can\'t be blank');
  }
  return getUserService(username);
}

export default getUser