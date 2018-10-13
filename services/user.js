import User from '../models/User';
    
export function getUser(username) {
    return User.find({}).exec();
}