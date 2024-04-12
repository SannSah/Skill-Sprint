import express from "express";
import StudentSignin from '../Controllers/Student/StudentSign.js';
import StudentAuthentication from "../Middlewares/StudentAuthentication.js";
import StudentRanking from "../Controllers/Student/StudentRanking.js";
import StudentPersonalInfo from "../Controllers/Student/StudentPersonalInfo.js";
import StudentEditInfo from "../Controllers/Student/StudentEditInfo.js";
import Submission from "../Controllers/Student/StudentInputSubmission.js";
import StudentIsValid from "../Controllers/Student/StudentIsValid.js";
import ChangePassword from "../Controllers/Student/ChangePassword.js";
import { v2 as cloudinary } from 'cloudinary';

const studentRouter = express.Router();


          
cloudinary.config({ 
  cloud_name: 'dplnk24fl', 
  api_key: '618675338187385', 
  api_secret: 'FLigJHR37URM3Dle-2ko-u7gv78' 
});


studentRouter.post("/signin", StudentSignin)
studentRouter.get("/Ranking", StudentAuthentication, StudentRanking);
studentRouter.get("/PersonalInfo", StudentAuthentication, StudentPersonalInfo);
studentRouter.get("/Edit", StudentAuthentication, StudentEditInfo);
studentRouter.post("/Add", StudentAuthentication, Submission);
studentRouter.get("/validUser", StudentIsValid);
studentRouter.post("/changepassword",StudentAuthentication,ChangePassword)
export default studentRouter;
