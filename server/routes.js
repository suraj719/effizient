const express = require("express")
const { getAllStudents, newStudent } = require("./studentcontroller")

const router = express.Router()

router.route('/students').get(getAllStudents).post(newStudent)
module.exports = router