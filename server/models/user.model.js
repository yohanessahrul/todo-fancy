const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String
}, {
    timestamps: true
})

var User = mongoose.model('users', schema)

module.exports = User