const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');



app.use(express.json());
app.use(cors());




// Database connection with mongo DB 


mongoose.connect('mongodb+srv://apupaul:hDx0OxEbZmE5SaOF@cluster0.d6ip0dv.mongodb.net/e-commerce')

// api creation 

app.get('/',(req,res)=>{
    res.send('Express App is running')
})

app.listen(port,(error)=>{
    if(!error){
        console.log('Server is running on Port'+port);
    }
    else{
        console.log('Error'+error);
    }
})