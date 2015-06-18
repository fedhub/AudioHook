var express    = require('express');
var router     = express.Router();
var mongo = require('./mongo');

router.post('/get-all-books', function(req, res){
    var books = mongo.get_books();
    res.send(JSON.stringify(books));
});

module.exports = router;