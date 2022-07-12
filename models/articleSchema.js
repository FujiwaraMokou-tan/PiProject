"use strict";

/**
 * This script serves to create the schema for articles
 */
const mongoose = require("./MongoStuff.js");
const articleSchema = mongoose.Schema({
    nameOfArticle:{
        type: String,
        required: true,
        unique: true,
    },
    nameOfAuthor:{
        type: String,
        required: true,
    },
    sectionOption:{
        type: String,
        required: true,
    },
    descrip:{
        type: String,
        required: true,
    },
});

//exports the schema
module.exports = articleSchema;