const mongoose = require('mongoose')
//schema for genres

const genereSchema = mongoose.Schema({
    name : {
          type : String,
          required : true,
          trim : true,
          unique : true,
          createdAt : new Date()
    },
    create_date : {
        type : Date,
        default : Date.now
}
})

const Genre = module.exports = mongoose.model('Genre', genereSchema)

//get the genres

module.exports.getGenres = (callback, limit) => {
     //Genre.find(callback);
   Genre.find(callback).limit(limit)
}

module.exports.getGenreById = (id,callback) => {
    Genre.findById(id,callback);
}

module.exports.addGenre = (genre,callback) => {
    Genre.create(genre, callback);
}

module.exports.updateGenre = (id,genre,options, callback) => {
    
    const query = {
        _id : id
    }
    const updatedGenre = {
        name : genre.name
    } 
    Genre.findOneAndUpdate(query, updatedGenre, {} , callback);
}

module.exports.deleteGenre = (id,callback) => {
    const _id = id;
    Genre.findByIdAndDelete(_id, callback);
}