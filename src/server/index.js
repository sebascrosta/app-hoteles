var express = require('express');
var app = express();
var PORT = 8080;
var bodyParser = require('body-parser');
var path = require('path');

// API routes Async
app.use('/static', express.static( path.join(__dirname + '/../../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//App Routes
app.use('/',function (req, res, next) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
});


app.listen(PORT, ()=>{
    console.log("Server running on " + PORT);
})