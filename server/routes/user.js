const router = require('express').Router()
const controllerUser = require('../controllers/user.controller')
const { cekAdminRole } = require('../middleware/auth')

router.get('/list', controllerUser.list)// cekAdminRole, controllerUser.list)
router.post('/createuser', controllerUser.create)// cekAdminRole, controllerUser.create)
router.delete('/deleteuser/:id', controllerUser.delete)// cekAdminRole, controllerUser.delete)
router.post('/registeruser', controllerUser.register)
router.post('/signin', controllerUser.signIn)

module.exports = router