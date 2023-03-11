const filmModel = require('../models/filmModel');

module.exports.getFilm = async (req , res )=>
{
    const film = await filmModel.find()
    res.send(film);
}

module.exports.saveFilm = async (req , res )=>
{
    //const {title}  = req.body 
    filmModel
    .create(req.body)
    .then ((data)=> {
        console.log("Added successfully..");
        console.log(data);
        res.send (data)
    });
}

module.exports.updateFilm = async (req , res) => {
    console.log("req.body" ,req.body)
    const {_id , text}  = req.body ;
    filmModel
    .findByIdAndUpdate(_id , req.body)
    .then (()=> res.set(201).send('updated successfully'))
    .catch((err)=> console.log("err" , err));
}

module.exports.deleteFilm = async (req , res) => {
    const {_id}  = req.body ;
    filmModel
    .findByIdAndDelete(_id)
    .then (()=> res.set(201).send('deleted successfully'))
    .catch((err)=> console.log("err" , err));
}