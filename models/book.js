const mongoose = require('mongoose')
//schema for genres

const bookSchema = mongoose.Schema({
    name : {
          type : String,
          required : true,
    },
    author : {

        type : String,
        required : true,
    },
    publishers : {
        type : String
    },

    pages : {
        type : Number,
        required : true,
    },
    genres : {
        type : String,
        required : true,
    },

    create_date : {
        type : Date,
        default : Date.now
    }
})

const Book = module.exports = mongoose.model('Book', bookSchema)

//get the books
module.exports.getBooks = (callback, limit) => {
    //  Book.find(callback)
    Book.find(callback).limit(limit)
}

//get single book
module.exports.getBookById = (id,callback) => {
    //  Book.find(callback)
    Book.findById(id,callback);
}

module.exports.addBook = (book,callback) => {
    Book.create(book, callback);
   // Genre.find(callback).limit(limit)
}

module.exports.updateBook = (id,book,options, callback) => {
    
    const query = {
        _id : id
    }
    const updatedBook = {
        name : book.name,
        author : book.author,
        publishers : book.publishers,
        pages : book.pages,
        genres : book.genres
    } 
    Book.findByIdAndUpdate(query, updatedBook, {} , callback);
   // Genre.find(callback).limit(limit)
}

module.exports.deleteBook = (id,callback) => {
    const query = {
        _id : id
    }
    Book.findByIdAndDelete(query, callback);
   // Genre.find(callback).limit(limit)
}