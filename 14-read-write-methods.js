// const {readFile,writeFile} = require('fs'); //Common till 3 methods


// 1st method 
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }


// If while getting if there is any error it prints it and if there is no error then it consoles whatever is written in the text file
// getText('./content/first.txt').then((result)=> console.log(result)).catch((err)=>console.log(err))


// <<<<<---------------------------------------->>>>>


// 2nd Method
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// const start = async()=>{
//     try {
        
//         // const first  = await getText('./content/first.txt');
//         const first  = await readFilePromise('./content/first.txt','utf8');
//         // const second  = await getText('./content/second.txt');
//         const second  = await readFilePromise('./content/second.txt','utf8');
//         await writeFilePromise(`./content/result-mind-grenade.txt`,`THIS IS AWESOME : ${first} , ${second}`);
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// start();

// <<<<<----------------------------------------->>>>>

// In Node.js, await is used inside an async function to pause the execution of that function until a Promise is resolved or rejected. Here's what it does in detail:

// Pauses Execution: When await is encountered in an async function, it waits for the promise to resolve and then returns the resolved value. During this waiting period, the function's execution is paused, allowing other code (outside of the async function) to run.

// Error Handling: If the promise is rejected, an error is thrown, and it can be caught using a try-catch block.

// Example:
// 3rd Method
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async()=>{
//     try {
        
//         // const first  = await getText('./content/first.txt');
//         const first  = await readFilePromise('./content/first.txt','utf8');
//         // const second  = await getText('./content/second.txt');
//         const second  = await readFilePromise('./content/second.txt','utf8');
//         await writeFilePromise(`./content/result-mind-grenade.txt`,`THIS IS AWESOME : ${first} , ${second}`,
//             // {flag :`a`}
//         );
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// start();






// <<<<<--------------------------------------->>>>>
// 4th Method 
const {readFile,writeFile} = require('fs').promises;


const start = async()=>{
    try {
        
        // const first  = await getText('./content/first.txt');
        const first  = await readFile('./content/first.txt','utf8');
        // const second  = await getText('./content/second.txt');
        const second  = await readFile('./content/second.txt','utf8');
        await writeFile(`./content/result-mind-grenade.txt`,`THIS IS AWESOME : ${first} , ${second}`,
            // {flag :`a`}
        );
        console.log(first,second);
    } catch (error) {
        console.log(error);
        
    }
}

start();