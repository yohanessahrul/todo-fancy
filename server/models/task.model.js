const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: String,
    status: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

var Task = mongoose.model('tasks', schema)

module.exports = Task