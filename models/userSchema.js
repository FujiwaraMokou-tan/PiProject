"use strict";

/**
 * This script serves to create the schema for Users
 */
const mongoose = require("./MongoStuff.js");
const registerSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    permissions:{
        type: String,
        required: true,
    }
});

//exports the schema
module.exports = registerSchema;