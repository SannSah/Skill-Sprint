import Student from "../../Models/StudentModel.js";

async function adminDashBoard(req, res) {
  try {
    const studentsPersonalInfo = [];
    await Student.find().exec().then((result) => {
      const studentsDetails = [...result]
      studentsDetails.sort((studentDetail1, studentDetail2) => {
        return (studentDetail2.CodingInfo[1].LeetCode.Ranking - studentDetail1.CodingInfo[1].LeetCode.Ranking);
      });

      for (let i = 0; i < 10; i++) {
        studentsPersonalInfo.push(studentsDetails[i].personalInfo);
      }
      res.json({ topTenStudens: studentsPersonalInfo });
    });

  } catch (err) {

  }
}
export default adminDashBoard;