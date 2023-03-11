const mongoose = require ('mongoose');
const filmSchema = new mongoose.Schema(
    {
        title:  String ,
        director : String,
        body:   String,
        rate : String,
        duration : String ,
        //date: { type: Date, default: Date.now },
      
    }
)

module.exports = mongoose.model('film' , filmSchema) ;