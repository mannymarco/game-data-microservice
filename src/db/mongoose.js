const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/game-data-microservice', {
    useNewUrlParser: true,
    useCreateIndex: true
});