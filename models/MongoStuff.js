"use strict";

/**
 * This script serves to connect to the atlas database
 */
const mongoose = require('mongoose');
const uri = "mongodb+srv://Mokou:MokouIsBetterThanKaguya@sustainability-yxhqj.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () =>{
    console.log('Mongoose is connected')
})

//exports the database connection
module.exports = mongoose;
