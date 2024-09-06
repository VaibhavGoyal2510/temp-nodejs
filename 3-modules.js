// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// const secret ='SUPER SECRET';
// const vaibhav='vaibhav';  
// const crazy='crazy';  

// const sayHi =(name)=>{
//     console.log(`Hello There ${name}`);
// }

const names = require('./4-names');
const sayHi = require('./5-utils');
// console.log(names);

// sayHi('Srishti');
// sayHi(names.vaibhav);
// sayHi(names.crazy);



// after 6-alternte
const data = require('./6-Alternate-flavor')
// console.log(data);

// After 7
require('./7-mind-grenade') // prints the function 
// console.log(dara2);