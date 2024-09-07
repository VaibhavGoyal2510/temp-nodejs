// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');


const customEmitter = new EventEmitter();

// on -> Listen for an event 
// emit -> emit an event 

// Some points that I learned ->
// 1) We can make multiple eventemitter for same emition like in this case for Response string we have 2 emitters .
// 2) Secondly, the order of emit and on matters that is first we have to write "on" then we have to "emit"

// customEmitter.on('Response',()=>{
//     console.log(`Data Received`)
// })

// customEmitter.on('Response',()=>{
//     console.log(`Some other Logic`)
// })

// customEmitter.emit('Response')


// 3) the other emitter with no parameters runs with only the emit it has like in this case the second one had only "Response" so it worked accordingly


customEmitter.on('Response',(name,id)=>{
    console.log(`Data Received with name: ${name} and id: ${id}`)
})

customEmitter.on('Response',()=>{
    console.log(`Some other Logic`)
})

customEmitter.emit('Response','Vaibhav',20)