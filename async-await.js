var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = (n = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                resolvedAfterNSeconds: n
            });
        }, n * 1000);
    });
});
var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = (n = 0) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({
                rejectedAfterNSeconds: n
            });
        }, n * 1000);
    });
});


// promiseTRSANSG(2)
//     .then((result) => console.log('Well done! ', result))
//     .catch((error) => console.log('error! ', error))

// async function testAsync() {
//     try {
//         result1 = await promiseTRJANSG(2);
//         console.log("Result 1 ", result1);
//         result2 = await promiseTRJANSG(3);
//         console.log("Result 2 ", result2);
//     } catch (e) {
//         console.log("Error", e);
//     }
// }
// testAsync();


// for (name of ["nkgokul", "BrendanEich", "gaearon"]) {
//     userDetails = await fetch("https://api.github.com/users/" + name);
//     userDetailsJSON = await userDetails.json();
//     console.log("userDetailsJSON", userDetailsJSON);
// }

const fetch = require('node-fetch');
const fs = require('fs');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((data) => console.log('Status = ', data.status))
//     .catch((err) => console.log('Error! ', err.message))
let type = process.argv.pop();

let myFetch = fetch('https://jsonplaceholder.typicode.com/' + type)


async function getfetched() {
    try {
        let myJson = await myFetch;
        return myJson.json();
    } catch (error) {
        return error.message;
    }
}


var saveToFile = function(body){
    return new Promise((resolve, reject) => {
        fs.writeFile(type + '.txt', body, (err) => {
            if(err) reject('Could not save to file! ', err);
            else resolve('File saved!')
        })
    })
}

async function getBody() {
    try {
        let result = await getfetched();
        let fileRespone = await saveToFile(JSON.stringify(result));
        console.log(fileRespone);
    } catch (e) {
        console.log(e);

    }
}


getBody();


