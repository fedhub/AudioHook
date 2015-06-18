var express    = require('express');
var mongo     = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://shimonsw:shenkarYoker5@ds047792.mongolab.com:47792/heroku_16lpdrfd');
var booksSchema = require('./books-schema').booksSchema; // because object is exported and not a function
mongoose.model('BooksM', booksSchema);
db = mongoose.connection;
var books;
db.once('open', function(){
    var Books = this.model('BooksM'); // this = connection object
    var query = Books.find();
    query.exec(function(err, result){
        books = result;
    });
});

mongo.get_books = function(){
  return books;
};

module.exports = mongo;