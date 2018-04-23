const router = require('express').Router()
const controllerTask = require('../controllers/task.controller')

router.get('/list/:token', controllerTask.list) // jalan
router.post('/createtask/:token', controllerTask.createTask) // jalan
router.delete('/deletetask/:id', controllerTask.deleteTask) // jalan
router.put('/updatetask/:id', controllerTask.updateTask) // jalan
router.post('/checklist/:id', controllerTask.checkList) // jalan
router.get('/completetask/:token', controllerTask.completeTask) //jalan
router.get('/uncompletetask', controllerTask.uncompletetask) // jalan

module.exports = router