const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 20
        },

        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 20
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
            unique: true
        },

        password: {
            type: String,
            required: true,
            min: 6
        },

        followers: {
            type: Array,
            default: []
        },

        following: {
            type: Array,
            default: []
        },

        isAdmin: {
            type: Boolean,
            default: false,
        }

    },

    { timestamps: true }

);

module.exports = mongoose.model('user', UserSchema);