const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },

    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true

    },

    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },

    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        min: 6,
    },


});