import User from '../models/User/index'
import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'
import esConnection from '../elasticsearch'

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

var readFileAsync = function(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path.resolve(__dirname, filename), function(err, data){
            if (err) 
                reject(err); 
            else 
                resolve(data);
        });
    });
};

async function readAndProcess() {
    let content = await readFileAsync('../users.json', "utf8")
    insertUserData(JSON.parse(content))
    seedUSers(JSON.parse(content))
}

readAndProcess()

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
        user.save(function (err, result) {
            done++;
            if (done == usersArray.length) {
                exit();
            }
        });
    }
}

function exit() {
    mongoose.disconnect();
}

async function insertUserData(data) {
    let bulkOps = [] // Array to store bulk operations
    
    // Add an index operation for each section in the book
    for (let i = 0; i < data.length; i++) {
        // Describe action
        bulkOps.push({
            index: {
                _index: esConnection.index,
                _type: esConnection.type
            }
        })

        // Add document        
        bulkOps.push({
            username: data[i].name,
            email: data[i].email,
        })

        if (i > 0 && i % 5000 === 0) { // Do bulk insert in 5000 users batches
            await esConnection.client.bulk({
                body: bulkOps
            })
            bulkOps = []
            console.log(`Indexed users ${i - 5000} - ${i}`)
        }
    }

    // Insert remainder of bulk ops array
    await esConnection.client.bulk({
        body: bulkOps
    })
    console.log(`Indexed users ${data.length - (bulkOps.length / 2)} - ${data.length}\n\n\n`)
}