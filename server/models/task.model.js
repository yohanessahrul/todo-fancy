// const mongoose = require('mongoose')
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    status: Boolean,
    description: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

var Task = mongoose.model('task', schema)

module.exports = Task