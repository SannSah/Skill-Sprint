import PermittedStudents from "../../Models/PermittedStudentModel.js";

async function StudentEditInfo(req, res) {
  const rollNo = req.rollNo;

  const student = await PermittedStudents.findOne({ rollNo: rollNo });
  if (student) {
    res.json({ allowedToEdit: true });
  } else {
    res.json({ allowedToEdit: false });
  }
}
export default StudentEditInfo;