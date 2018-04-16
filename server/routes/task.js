const router = require('express').Router()
const controllerTask = require('../controllers/task.controller')

router.get('/list/:id', controllerTask.list) // jalan
router.post('/createtask', controllerTask.createTask) // jalan
router.delete('/deletetask/:id', controllerTask.deleteTask) // jalan
router.put('/updatetask/:id', controllerTask.updateTask) // jalan
router.get('/checklist/:id', controllerTask.checkList) // jalan
router.get('/completetask/:id', controllerTask.completeTask) //jalan
router.get('/uncompletetask', controllerTask.uncompletetask) // jalan

module.exports = router