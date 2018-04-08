const router = require('express').Router()
const controllerUser = require('../controllers/user.controller')
const { cekAdminRole } = require('../middleware/auth')

router.get('/list', cekAdminRole, controllerUser.list)
router.post('/createuser', cekAdminRole, controllerUser.create)
router.delete('/deleteuser/:id', cekAdminRole, controllerUser.delete)
router.post('/registeruser', controllerUser.register)
router.post('/signin', controllerUser.signIn)

module.exports = router