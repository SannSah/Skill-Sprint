import Student from "../../Models/StudentModel.js";

async function StudentEditInfo(req, res) {
  const rollNo = req.rollNo;
  const student = await Student.findOne({ 'personalInfo.RollNo':rollNo });
  if (!student) {
    console.log(student);
    res.json({ allowedToEdit: true });
  } else {
   const student2=await Student.findOne({ 'personalInfo.RollNo':rollNo, 'personalInfo.EditInfo':"Allowed"});
   if(student2){
    res.json({ allowedToEdit: true })
   }else{
    res.json({ allowedToEdit: false });
   }
  }
}
export default StudentEditInfo;