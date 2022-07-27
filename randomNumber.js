// console.log("This should work");

// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Generating random number...");
//             resolve({getRandomNumber});
//         }, 1000);
//     });
// }

// async function callingFunction(){
//     rn = await randomNumber(); 
//     console.log("a random number generated,", rn);
//   }

async function getRandomNumber() {
    let promise = new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("Generating random number...");
            resolve({number: " "});
        }, 500);
    });
    let result = await promise;
    return result;
}

getRandomNumber().then((number)=>console.log(number));


// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function