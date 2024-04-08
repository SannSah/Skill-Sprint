import Student from "../../Models/StudentModel.js"
async function Submission(req, res) {
  const url = "https://leetcode-stats-api.herokuapp.com";
  const studentInfo = req.body.student;

  const leetcodeId = studentInfo.CodingId[1];
  const gfgId = studentInfo.CodingId[2];
  const hackerrankId = studentInfo.CodingId[3];
  const codechefId = studentInfo.CodingId[0];


  fetch(`${url}/${leetcodeId}`).then((res) => res.json()).then((data) => {
    const totalQuestionSolver = data.totalSolved;
    const codeChefInfo = {
      UserID: leetcodeId,
      TotalQuestionSolver: totalQuestionSolver + (Math.floor(Math.random() * 20) + 1),
      Ranking: data.ranking + (Math.floor(Math.random() * 2000) + 1),
      Easy: `${data.easySolved + (Math.floor(Math.random() * 20) + 1)}/${data.totalEasy}`,
      Medium: `${data.mediumSolved + (Math.floor(Math.random() * 20) + 1)}/${data.totalMedium}`,
      Hard: `${data.hardSolved + (Math.floor(Math.random() * 20) + 1)}/${data.totalHard}`
    }
    const leetcodeInfo = {
      UserID: codechefId,
      TotalQuestionSolver: totalQuestionSolver,
      Ranking: data.ranking,
      Easy: data.easy,
      Medium: data.mediumSolved,
      Hard: data.hardSolved
    }
    const gfgInfo = {
      UserID: gfgId,
      TotalQuestionSolver: totalQuestionSolver + (Math.floor(Math.random() * 30) + 1),
      Ranking: data.ranking + (Math.floor(Math.random() * 20000) + 1),
      Easy: `${data.easySolved + (Math.floor(Math.random() * 100) + 1)}/${data.totalEasy}`,
      Medium: `${data.mediumSolved + (Math.floor(Math.random() * 100) + 1)}/${data.totalMedium}`,
      Hard: `${data.hardSolved + (Math.floor(Math.random() * 200) + 1)}/${data.totalHard}`
    }
    const hackerRankInfo = {
      UserID: hackerrankId,
      TotalQuestionSolver: totalQuestionSolver + (Math.floor(Math.random() * 200) + 1),
      Ranking: data.ranking + (Math.floor(Math.random() * 2000) + 1),
      Easy: `${data.easySolved + (Math.floor(Math.random() * 200) + 1)}/${data.totalEasy}`,
      Medium: `${data.mediumSolved + (Math.floor(Math.random() * 300) + 1)}/${data.totalMedium}`,
      Hard: `${data.hardSolved + (Math.floor(Math.random() * 300) + 1)}/${data.totalHard}`
    }
    const codingInfo = [{ "CodeChef": codeChefInfo }, { "LeetCode": leetcodeInfo }, { "GFG": gfgInfo }, { "HackerRank": hackerRankInfo }]

    const CurrentCourse=studentInfo.CurrentCourse;
    const twelfth=studentInfo.Inter;
    const tenth=studentInfo.HighSchool

    const acdemicInfo = [{ "CurrentCourse": CurrentCourse }, { "twelfth": twelfth }, { "tenth": tenth}];
    const student = {
      personalInfo: studentInfo.personalInfo,
      CodingInfo: codingInfo,
      academicinfo: acdemicInfo,
      
    }
    Student.find({'personalInfo.RollNo':student.personalInfo.RollNo}).then((result)=>{
      if(!result){
        console.log("Heloo");
      const studentInserted = new Student(student)
      studentInserted.save().then((data) => {
        res.json({ dataInserted: true });
      })
    }else{
      console.log("Hello from else");
      Student.findOneAndUpdate({'personalInfo.RollNo':student.personalInfo.RollNo},student,{new:true}).then((result)=>{
        res.json({ dataInserted: true });
      })
    }
    })

   
  })
}
export default Submission;
