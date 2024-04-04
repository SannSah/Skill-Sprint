import Student from "../../Models/StudentModel.js";

async function studentCompleteInfo(req, res) {
  const studentRollNo = req.headers._id;
  
  try {
    const studentInfo = await Student.findOne({ 'personalInfo.RollNo': studentRollNo });
    res.json(studentInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching student information");
  }
}

export default studentCompleteInfo;
