const express = require('express')
const router = express.Router();
const {getAllTask,createTask,getSingleTask,updateTask,deleteTask} = require('../controller/tasks')



router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getSingleTask).delete(deleteTask).put(updateTask)


module.exports = router