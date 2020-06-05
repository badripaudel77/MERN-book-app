const mongoose = require('mongoose')
//schema for genres

const genereSchema = mongoose.Schema({
    name : {
           type : String,
          required : true,
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
    Genre.find(callback);
   // Genre.find(callback).limit(limit)
}
module.exports.addGenre = (genre,callback) => {
    Genre.create(genre, callback);
   // Genre.find(callback).limit(limit)
}

module.exports.updateGenre = (id,genre,options, callback) => {
    
    const query = {
        _id : id
    }
    const updatedGenre = {
        name : genre.name
    } 
    Genre.findOneAndUpdate(query, updatedGenre, {} , callback);
   // Genre.find(callback).limit(limit)
}

module.exports.deleteGenre = (id,callback) => {
    const _id = id;

    Genre.findByIdAndDelete(_id, callback);
   // Genre.find(callback).limit(limit)
}