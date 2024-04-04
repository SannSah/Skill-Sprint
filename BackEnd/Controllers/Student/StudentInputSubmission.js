function Submission(req, res) {
  const url = "https://leetcode-stats-api.herokuapp.com";
  const studentInfo = req.body.student;
  const id = studentInfo.CodingId[1];
  fetch(`${url}/${id}`).then((res)=>res.json()).then((data)=>{
    console.log(data);
  })


  res.json({ Hello: "Hello" })
}
export default Submission;