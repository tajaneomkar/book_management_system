const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
    },
    gender: {
        type: String,
    },

});
const User = mongoose.model('user', userSchema);


module.exports = User;