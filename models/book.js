const mongoose = require('mongoose')
//schema for genres

const bookSchema = mongoose.Schema({
    name : {
          type : String,
          required : true,
          trim : true,
          unique : true //title is made unique.
    },
    author : {
        type : String,
        required : true,
        trim : true

    },
    publishers : {
        type : String,
        trim : true,

    },

    pages : {
        type : Number,
        required : true,
        trim : true

    },
    genres : {
        type : String,
        required : true,
        trim : true

    },

    create_date : {
        type : Date,
        default : Date.now
    }
})

//It will create books collection in your database and documents 
//inside that collection will have fields from bookSchema when you save first document.
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
}

module.exports.deleteBook = (id,callback) => {
    const query = {
        _id : id
    }
    Book.findByIdAndDelete(query, callback);
}