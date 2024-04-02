import Student from "../../Models/StudentModel.js";

async function StudentPersonalInfo(req, res) {
  const user_rollNo = req.user.username;

  const user = await Student.findOne({ 'personalInfo.RollNo': user_rollNo });
  res.json({ StudenCompleteInfo: user });
}
export default StudentPersonalInfo;