const express = require('express'); // require express from node modules 
const http = require('http');

const hostname = 'localhost';
const port = 3000; 

const app = express();

app.use((req, res, next) => {
    // next is used when you need to use additional middleware 
    // optional parameter 
    console.log(req.headers);
    res.statusCode = 200; 
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1> This is an express server </h1></body> </html>');

});


const server = http.createServer(app); 
server.listen(port, hostname, () => {

    console.log(`Serever running at http://${hostname}:${port}`);


});