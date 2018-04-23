const Task = require('../models/task.model')
const jwt = require('jsonwebtoken')

module.exports = {
    list: function (req, res) {
      let paramsToken = req.params.token
      let decodeToken = jwt.verify(paramsToken, 'secretkeys')
      var sendUsername = decodeToken.username

      Task.find({
        user: decodeToken.id,
        status: false
      })
      .populate('users') // gak guna
      .exec(function (err, response) {
        if(response){
          res.status(200).json({
            message: 'Get all data task success !!',
            username: sendUsername,
            data: response
          })
        } else {
          res.status(500).json({
            message: err.message
          })
        }
      })
      
    },

    createTask: function(req, res) {
      let paramsToken = req.params.token
      let decodeToken = jwt.verify(paramsToken, 'secretkeys')

      let data = new Task({
        name: req.body.name,
        description: req.body.description,
        status: false,
        user: decodeToken.id
      })

      data.save(function(err, response) {
        if(!err){
          res.status(201).json({
            message: 'Anda menambahkan task baru',
            data: response
          })
        } else {
          res.status(500).json({
            message: err.message
          })
        }
      })
    },

    updateTask: function(req, res) {
      Task.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        description: req.body.description
      }, 
        function(err, response) {
          if(!err) {
            res.status(200).json({
              message: 'Data has been change !!',
              response
            })
          } else {
            res.status(500).json({
              message: err.message
            })
          }
        })
    },

    checkList: function(req, res) {
      console.log('controller checklist')
      // let paramsToken = req.params.token
      // let decodeToken = jwt.verify(paramsToken, 'secretkeys')

      Task.findByIdAndUpdate(req.params.id,{ 
        status: true,
        updatedAt: new Date()
        }, 
        function(err, response) {
          if(!err) {
            res.status(200).json({
              message: 'Data tercentang !!',
              response
            })
          } else {
            res.status(500).json({
              message: err.message
            })
          }
        })
    },

    deleteTask: function(req, res) {
      Task.remove({
        _id: req.params.id
      }, function(err, response) {
        if(!err){
          res.status(200).json({
            message: 'Datas has been destroy!!'
          })
        }
      })
    },

    completeTask: function(req, res) {
      let paramsToken = req.params.token
      let decodeToken = jwt.verify(paramsToken, 'secretkeys')
      
      // let idUser = jwt.verify(req.params.token, 'risnauli')
      Task.find({
        user: decodeToken.id,
        status: true
      }, function(err, response) {
        if(!err){
          res.status(200).json({
            message: 'Get all task complete success',
            data: response
          })
        } else {
          res.status(500).json({
            message: err.message
          })
        }
      })
      .sort('updatedAt')
    },

    uncompletetask: function(req, res) {
      Task.find({
        status: false
      }, function(err, response) {
        if(!err){
          res.status(200).json({
            message: 'Get all task uncomplete success',
            data: response
          })
        }        
      })
    }
    
}