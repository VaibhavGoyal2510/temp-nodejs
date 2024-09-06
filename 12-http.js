const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to our homepage")
    }
    // res.write('Welcome to our homepage');
    // res.end();

    else if(req.url==='/about'){
        res.end('Here is our short history');
    }
    else (res.end(`
        <h1>OOps!</h1>
        <p>We can't seem to find the page you are looking fot</p>
        <a href="/">back Home</a>`)
    )
})


server.listen(5000,()=>{
    console.log('Server is listening on Port 5000')
});
