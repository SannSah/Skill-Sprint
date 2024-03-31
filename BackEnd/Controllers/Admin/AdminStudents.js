import Student from "../../Models/StudentModel.js";
async function AdminStudents(req, res) {
  const session_id = req.headers.session_id;
  const totalStudents = [];
  try {
    await Student.find({ "personalInfo.session_id": session_id }).exec().then((result) => {
      result.map((student) => { totalStudents.push(student.personalInfo) })
      res.json({ totalStudents: totalStudents });
    });

  } catch (err) {

  }

}
export default AdminStudents;