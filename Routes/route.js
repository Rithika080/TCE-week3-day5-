const express =require("express");
const router= express.Router()

const studentController = require("../Controllers/studentControllers")
const courseController = require("../Controllers/courseControllers")


router.post("/register", studentController.createStudent);
router.post("/course", courseController.createCourse);

module.exports = router;