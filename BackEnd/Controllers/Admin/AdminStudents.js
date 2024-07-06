import Student from "../../Models/StudentModel.js";
async function AdminStudents(req, res) {
  const session_name = req.headers.session_name;
  console.log(session_name);
  const totalStudents = [];
  try {
    await Student.find({ "personalInfo.session": session_name }).exec().then((result) => {
      result.map((student) => { totalStudents.push(student.personalInfo) })
      totalStudents.reverse();
      res.json({ totalStudents: totalStudents });
    });

  } catch (err) {
    console.log(err)
  }

}
export default AdminStudents;