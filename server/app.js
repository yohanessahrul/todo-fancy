const express = require('express')
const PORT = 3000
const restApi = require('./routes/index')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todosexercise')
require('dotenv').config()

const app = express()

// test connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected database')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api', restApi)

app.listen(PORT, () => {
  console.log('Aplikasi berjalan di 3000')
})