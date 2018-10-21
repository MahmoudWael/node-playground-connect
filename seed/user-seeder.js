import User from '../models/User/index'
import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

fs.readFile(path.resolve(__dirname, '../users.json'), (err, data) => {
    if (err) {
        console.log(err);
    } else {
        seedUSers(JSON.parse(data));
    }
})


function seedUSers(data) {
    let usersArray = [];
    for (let obj of data) {
        let user = new User({
            username: obj.name,
            email: obj.email
        })
        usersArray.push(user)
    }

    let done = 0;
    for (let user of usersArray) {
        user.save(function(err, result){
            done++;
            if(done == usersArray.length){
                exit();
            }
        });
    }
}


function exit (){
    mongoose.disconnect();
}