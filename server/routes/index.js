const router = require('express').Router()
const routerTask = require('./task')
const routerUser = require('./user')

router.use('/task', routerTask)
router.use('/user', routerUser)

module.exports = router