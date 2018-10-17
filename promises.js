// var pr = Promise.resolve("foo");
// pr.then((res) => console.log(res));


// var p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(4), 2000);
// });

// p.then((res) => {
//     res += 2;
//     console.log(res);
// });

// p.then((res) => console.log(res));


var keepsHisWord = true;
promise3 = new Promise(function (resolve, reject) {
    if (keepsHisWord) {
        resolve("The man likes to keep his word");
    } else {
        reject("The man doesn't want to keep his word");
    }
});

// promise3
//     .then((value) => console.log("Value: ", value))
//     .catch((err) => console.log("Error:", err));


s = 'aba'
n = 10

function repeatedString(s, n) {
    let result = 0;
    let numberOfa = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a')
            numberOfa++;
    }
    result = Math.floor(n / s.length) * numberOfa;
    let remainder = n % s.length;
    for (let i = 0; i < remainder; i++) {
        if (s[i] == 'a')
            result++;
    }
    return result;
}

let aCount = repeatedString(s, n)
console.log('aCount = ', aCount);



// var momSavings = parseInt(process.argv[2]);
// var productPrice = parseInt(process.argv[3]);
// console.log('Sv', momSavings);
// console.log('PP', productPrice);
// console.log(momSavings > productPrice);


// var buyPhone = function (momSavings, productPrice) {
//     var momPromise = new Promise((resolve, reject) => {
//         if (momSavings > productPrice) {
//             setTimeout(() => {
//                 resolve({
//                     brand: 'iphone',
//                     model: 'X',
//                     price: productPrice
//                 });
//             }, 2000)
//         } else {
//             setTimeout(() => {
//                 reject("We do not have enough savings. Let us save some more money!");
//             }, 2000)
//         }
//     });
//     return momPromise
// }



// buyPhone(momSavings, productPrice)
//     .then(({
//         brand,
//         model,
//         price
//     }) => console.log(`Congratz! Mom bought ${brand}${model}, price ${price}$`))
//     .catch((reason) => console.log(`Mom could not get you the phone becasue ${reason}`))



function getRandomNumber(start = 1, end = 10) {
    return parseInt(Math.random() * end) % (end - start + 1) + start;
}


// var M = ( ManyPromisesAndThisIsAlongName = () => {
//     let randomNumber = getRandomNumber(2, 7);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (randomNumber > 5) {
//                 resolve({
//                     randnum: randomNumber,
//                     msg: 'Greater than 5!'
//                 });
//             } else {
//                 reject({
//                     randnum: randomNumber,
//                     msg: 'Opss! less than 5'
//                 })
//             }
//         }, randomNumber * 1000)
//     })
// });

// M()
//     .then(({randnum, msg}) => console.log(`Congrats! randnum ${randnum} and msg is ${msg}`))
//     .catch(({randnum, msg}) => console.log(`Sorry! randnum ${randnum} and msg is ${msg}`))


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

// promiseTRSANSG(3)
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// console.time("Promise.All");
// var promisesArray = [];
// promisesArray.push(promiseTRJANSG(3));
// promisesArray.push(promiseTRSANSG(4));
// promisesArray.push(promiseTRSANSG(1));
// promisesArray.push(promiseTRSANSG(2));

// var handleAllPromises = Promise.all(promisesArray);

// handleAllPromises.then((values) => {
//         console.timeEnd("Promise.All");
//         console.log("All the promises are resolved", values);
//     })
//     .catch((reason) => {
//         console.timeEnd("Promise.All");
//         console.log("One of the promises failed with the following reason", reason);
//     });

function* generatorForLoop(num) {
    for (let i = 0; i < num; i += 1) {
        yield console.log(i);
    }
}

// var loopGen = generatorForLoop(5);

// loopGen.next();
// loopGen.next();
// loopGen.next();


function *withReturn(a) {
    let b = 5;
    yield a + b;
    b = 6; // we will never re-assign b
    yield a * b; // and will never return new value
}

// const RetGen = withReturn(6);
// console.log(RetGen.next()); 6+5
// console.log(RetGen.next()); 6*6



function *thisIsagen(i){
    yield *anotherGen(i);
}

function *anotherGen(i){
    yield i + 1;
    yield i + 2;
    yield i + 3;
}


const myGen = thisIsagen(4);

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());