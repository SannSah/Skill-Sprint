import sessioncourses from "../../Models/SessionCourseModel.js";
import Student from "../../Models/StudentModel.js";

async function adminDashBoard(req, res) {
  const sessionName = req.headers.session_name;
  try {

    const students = await Student.find({ "personalInfo.session": sessionName })
      .sort({ "CodingInfo.1.LeetCode.Ranking": -1 })
      .limit(10);
    const topTenStudents = students.map(student => student.personalInfo);

    res.json({ topTenStudents });
  } catch (err) {
    console.error("Error in adminDashboard:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default adminDashBoard;
