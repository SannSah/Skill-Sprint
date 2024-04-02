import PermittedStudents from "../../Models/PermittedStudentModel.js";

async function AdminAllowEdit(req, res) {
  const rollNo = req.body.rollNo;
  const newStudent = new PermittedStudents({ 'rollNo': rollNo });
  const isInserted = await newStudent.save();
  if (isInserted) {
    res.json({ inserted: true });
  } else {
    res.json({ inserted: false });
  }
}
export default AdminAllowEdit;