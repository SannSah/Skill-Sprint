import Student from "../../Models/StudentModel.js";

async function studentCompleteInfo(req, res) {
  
  const student_id = req.headers._id;
  try {
    const studentInfo = await Student.findOne({ _id: student_id }).lean();
    res.json(studentInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching student information");
  }
}

export default studentCompleteInfo;
