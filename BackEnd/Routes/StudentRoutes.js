import express from "express";
import StudentSignin from '../Controllers/Student/StudentSign.js';
import StudentAuthentication from "../Middlewares/StudentAuthentication.js";
import StudentRanking from "../Controllers/Student/StudentRanking.js";
import StudentPersonalInfo from "../Controllers/Student/StudentPersonalInfo.js";
import StudentEditInfo from "../Controllers/Student/StudentEditInfo.js";
import Submission from "../Controllers/Student/StudentInputSubmission.js";
import StudentIsValid from "../Controllers/Student/StudentIsValid.js";
import ChangePassword from "../Controllers/Student/ChangePassword.js";

const studentRouter = express.Router();

studentRouter.post("/signin", StudentSignin)
studentRouter.get("/Ranking", StudentAuthentication, StudentRanking);
studentRouter.get("/PersonalInfo", StudentAuthentication, StudentPersonalInfo);
studentRouter.get("/Edit", StudentAuthentication, StudentEditInfo);
studentRouter.post("/Add", StudentAuthentication, Submission);
studentRouter.get("/validUser", StudentIsValid);
studentRouter.post("/changepassword",StudentAuthentication,ChangePassword)
export default studentRouter;
