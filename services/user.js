import User from '../models/User';

export function getUser(username) {
    return User.find({username}).exec();
}

export async function login(username){
    try{
        var user = await getUser(username);
        return user;
    }catch(e){
        return e;
    }
}

