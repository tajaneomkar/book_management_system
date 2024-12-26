const mongoose = require("mongoose");



//schema
const bookSchema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    authername: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    isbn: {
        type: String,
    },
    review: {
        type: String,
    },

});
const Book = mongoose.model('book', bookSchema);


module.exports = Book;


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Optional if MongoDB auto-generates it
//     book_name: { type: String, required: true },
//     auther_name: { type: String, required: true },
//     title: { type: String, required: true },
//     isbn: { type: String, required: true, unique: true },
//     review: { type: String, required: true },
// });

// module.exports = mongoose.model('Book', bookSchema);