const express = require("express");
const router = express.Router();
const studentController = require('../controllers/studentController');

// routes for create student
router.post("/students",studentController.createStudent);

// routes for get students
router.get("/students",studentController.getStudents);

// routes for get single student
router.get('/students/:id',studentController.getSingleStudent);

// routes for update student
router.put("/students/:id",studentController.updateStudent);

// routes for delete student
router.delete("/students/:id",studentController.deleteStudent);

module.exports = router;