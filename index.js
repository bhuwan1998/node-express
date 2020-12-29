const express = require('express'); // require express from node modules 
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const leaderRouter = require('./routes/leaderRouter');
const dishRouter = require('./routes/dishrouter');
const promoRouter = require('./routes/promoRouter');
const hostname = 'localhost';
const port = 3000; 

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());



app.use('/dishes', dishRouter); // any request coming with /dishes will be handled by dishrouter
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);


app.use(express.static(__dirname+'/public')); // in the root folder -> static html files 





app.use((req, res, next) => {
    // next is used when you need to use additional middleware 
    // optional parameter 
    // console.log(req.headers); -> remove the log because morgan will do it for us 

    res.statusCode = 200; 
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1> This is an express server </h1></body> </html>');

});



const server = http.createServer(app); 
server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}`);


});