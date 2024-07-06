import sessioncourses from "../../Models/SessionCourseModel.js";
import Student from "../../Models/StudentModel.js";

async function StudentRanking(req, res) {
  const session = req.user.session;

  const studentsPersonalInfo = [];
  await Student.find({ "personalInfo.session": session })
    .exec()
    .then((result) => {
      const studentsDetails = [...result];

      studentsDetails.sort((studentDetail1, studentDetail2) => {
        return (
          studentDetail1.CodingInfo[1].LeetCode.Ranking -
          studentDetail2.CodingInfo[1].LeetCode.Ranking
        );
      });

      for (let i = 0; i < 10; i++) {
        studentsPersonalInfo.push(studentsDetails[i].personalInfo);
      }
      res.json({ topTenStudents: studentsPersonalInfo });
    });
}
export default StudentRanking;
