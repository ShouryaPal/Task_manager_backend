const {Router} = require('express');

const { getTask, saveTask, deleteTask, updateTask} = require("../controllers/taskController");

const router = Router();

router.get("/", getTask);

router.post("/save", saveTask);

router.post("/update", updateTask);

router.post("/delete", deleteTask);


module.exports = router;