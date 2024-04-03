import express from "express";
import StudentSignin from '../Controllers/Student/StudentSign.js';
import StudentAuthentication from "../Middlewares/StudentAuthentication.js";
import StudentRanking from "../Controllers/Student/StudentRanking.js";
import StudentPersonalInfo from "../Controllers/Student/StudentPersonalInfo.js";
import StudentEditInfo from "../Controllers/Student/StudentEditInfo.js";
import Submission from "../Controllers/Student/StudentInputSubmission.js";

const studentRouter = express.Router();

studentRouter.post("/signin", StudentSignin)
studentRouter.get("/Ranking",StudentAuthentication,StudentRanking);
studentRouter.get("/PersonalInfo",StudentAuthentication,StudentPersonalInfo);
studentRouter.get("/Edit",StudentAuthentication,StudentEditInfo);
studentRouter.post("/AddStudent",StudentAuthentication,Submission);
export default studentRouter;
