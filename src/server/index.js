var express = require('express');
var app = express();
var PORT = 8080;
var bodyParser = require('body-parser');
var path = require('path');
const hotelsController = require('./hotels/hotels.controller');
const routes = require('./hotels/hotels.routes')

// API routes Async
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//App Routes

app.use('/static', express.static( path.join(__dirname + '/../../build')));
app.use('/', routes)
app.use('/',function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});


app.listen(PORT, ()=>{
    console.log("Server running on " + PORT);
});