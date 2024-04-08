import Student from "../../Models/StudentModel.js";

async function adminDashBoard(req, res) {
  const studentsPersonalInfo=[];
  const sessionName = req.headers.session_name;
  try {

    const students = await Student.find({ "personalInfo.session": sessionName })
    students.sort((studentDetail1, studentDetail2) => {
      return (
        studentDetail1.CodingInfo[1].LeetCode.Ranking -
        studentDetail2.CodingInfo[1].LeetCode.Ranking
      );
    });
    for (let i = 0; i < 10; i++) {
      studentsPersonalInfo.push(students[i].personalInfo);
    }

    res.json({ topTenStudents:studentsPersonalInfo });
  } catch (err) {
    console.error("Error in adminDashboard:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default adminDashBoard;
