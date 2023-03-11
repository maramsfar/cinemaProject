const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/filmRoute')
require('dotenv').config();



const app = express() ;

const PORT = process.env.PORT || 5000 ;


app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json());


mongoose
.connect(process.env.LOCALMONGODB)
.then(()=> console.log("Connected to mongoDB"))
.catch((err)=> console.log("err" , err));

app.use(routes);

//Add port and connect to server 
app.listen(PORT, ()=> console.log("Server connected on port"));