const Task = require('../models/task.model')

module.exports = {
    list: function (req, res) {
      Task.find({
        user: req.params.id,
        status: false
      },function(err, response){
        if(!err) {
          res.status(200).json({
            message: 'Get all data task success !!',
            data: response
          })
        } else {
          res.status(500).json({
            message: err.message
          })
        }
      })
      .populate('users')
    },

    createTask: function(req, res) {
      let data = new Task({
        name: req.body.name,
        status: false,
        user: req.body.user
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
      Task.findByIdAndUpdate(req.params.id,
        { name: req.body.name }, 
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
      Task.find({
        user: req.params.id,
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