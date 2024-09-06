const os = require('os'); //Since it is built in module we do not need to install it or take it from a file we direct write os.



// info about current user 
const user = os.userInfo();
console.log(user);




// Method returns the system uptime iin seconds
console.log(`The System Uptime is ${os.uptime()}`);




const currentOs ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs);
