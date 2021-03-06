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
        },

        desc: {
            type: String,
            max: 50
        },

        city: {
            type: String,
            max: 50
        },

        revenue_made: {
            type: Number,
            enum: [1, 2, 3]
        }

    },

    { timestamps: true }

);

module.exports = mongoose.model('User', UserSchema);