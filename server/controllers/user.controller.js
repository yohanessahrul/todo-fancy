const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')


module.exports = {
    list: function (req, res) {
        User.find(function(err, response) {
            if(!err) {
                res.status(200).json({
                    message: 'Get all data user success',
                    data: response
                })
            } else {
                res.status(500).json({
                    message: err.message
                })
            }
        })
    },
    
    create: function (req, res) {
        let passwrodEncrypt = bcrypt.hashSync(req.body.password)
        User.create({
            username: req.body.username,
            password: passwrodEncrypt,
            email: req.body.email,
            role: req.body.role
        },function(err, response) {
            if(!err) {
                res.status(201).json({
                    message: 'Insert data success',
                    data: response
                })
            } else {
                res.status(500).json({
                    message: err.message
                })
            }
        })
    },

    delete: function (req, res) {
        User.remove({
            _id: req.params.id
        }, function(err, response) {
            if(!err) {
                res.status(200).json({
                    message: 'Remove data succes'
                })
            } else {
                res.status(500).json({
                    message: err.message
                })
            }
        })
    },
    
    register: function (req, res) {
         User.findOne({
             username: req.body.username
         },function (err, response) {
            if(!err) {
                if(response != null) { // username udah ada
                    res.status(200).json({
                        message: 'Username sudah dipakai'
                    })
                } else {
                    User.findOne({
                        email: req.body.email
                    }, function(err, response2) {
                        if(!err) {
                            if(response2 != null) { // email udah ada
                                res.status(200).json({
                                    message: 'Email sudah terpakai'
                                })
                            } else {
                                let passwrodEncrypt = bcrypt.hashSync(req.body.password)
                                User.create({
                                    username: req.body.username,
                                    password: passwrodEncrypt,
                                    email: req.body.email,
                                    role: req.body.role
                                },function(err, response) {
                                    if(!err) {
                                        res.status(201).json({
                                            message: 'Insert data success',
                                            data: response
                                        })
                                    } else {
                                        res.status(500).json({
                                            message: err.message
                                        })
                                    }
                                })
                            }
                        } else {
                            res.status(500).json({
                                message: err.message
                            })
                        }
                    })
                }
            } else {
                res.status(500).json({
                    message: err.message
                })
            }
         })
    },

    signIn: function (req, res) {
        User.findOne({
            username: req.body.username
        }, function(err, response) {
            if(!err) {
                let comparePassword = bcrypt.compareSync(req.body.password, response.password)

                if(comparePassword == true) {
                    console.log('compare sync password berhasil')

                    let payload = {
                        username: response.username,
                        role: response.role
                    }
                    let token = jwt.sign(payload, 'risnauli')
                    
                    res.status(200).json({
                        message: 'Login berhasil dilakukan',
                        username: response.username,
                        role: response.role,
                        token: token
                    })
                }
            } else {
                res.status(500).json({
                    message: err.message
                })
            }
        })
    }
}