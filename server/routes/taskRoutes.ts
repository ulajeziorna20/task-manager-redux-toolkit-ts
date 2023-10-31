const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/add', taskController.addTask);
router.get('/tasks', taskController.getAllTasks);
router.put('/edit/:id', taskController.editTask);
router.put('/:id', taskController.statusChange)
router.delete('/:id', taskController.deleteTask);

module.exports = router;