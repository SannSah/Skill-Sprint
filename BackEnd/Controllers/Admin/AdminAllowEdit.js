
import Student from "../../Models/StudentModel.js";

async function AdminAllowEdit(req, res) {
  const rollNo = req.body.rollNo + "";
  Student.updateOne({ 'personalInfo.RollNo': rollNo }, { $set: { 'personalInfo.EditInfo': "Allowed" } }).then((result) => {
    console.log(result);
  })

}
export default AdminAllowEdit;