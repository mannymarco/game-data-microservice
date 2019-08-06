const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    by: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    ageRating: {
        type: String,
        required: true
    },
    likes: { type: Number },
    comments: [{
        user: String,
        message: String,
        dateCreated: Number,
        rating: Number
    }]
});

module.exports = Game;

