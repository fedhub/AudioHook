var express    = require('express');
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Content = new schema({
    paragraph: String
});

var Description = new schema({
    paragraph: String
});

var Reviews = new schema({
    rank: Number,
    title: String,
    content: [Content]
});

var booksSchema = new schema({
    name: String,
    rank: Number,
    downloads: String,
    author: String,
    description: [Description],
    reviews: [Reviews]
}, {collection: 'books'});

exports.booksSchema = booksSchema;
