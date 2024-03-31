import sessioncourses from "../../Models/SessionCourseModel.js"
async function sessions(req, res) {
  try {
    await sessioncourses.find({ D_id:req.user.D_id}).exec().then((result) => {
      const Admin_session = [...result];
      res.json({ totalSession: Admin_session });
    })
  } catch (err) {

  }
}
export default sessions;