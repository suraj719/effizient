const Student = require("./studentmodal");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json({ students });
  } catch (error) {
    res.staus(500).json({ msg: error });
  }
};

const newStudent = async (req, res) => {
  try {
    const response = await Student.create(req.body);
    res.status(201).json({ response });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllStudents,
  newStudent,
};
