var express    = require("express");
var app        = express();
var server     = require('http').createServer(app);

// define routes
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

app.use(require('./mongo'));
app.use(require('./routers'));

var port = process.env.PORT || 3000;
server.listen(port, function(){
    console.log("app http ready on port "+port);
});