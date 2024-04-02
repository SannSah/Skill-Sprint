import adminDashBoard from "../Controllers/Admin/AdminDashBoard.js";
import adminSignin from "../Controllers/Admin/AdminSignin.js";
import sessions from "../Controllers/Admin/AdminSession.js";
import express from 'express';
import Authentication from "../Middlewares/AuthenticationMiddleware.js";
import studentCompleteInfo from "../Controllers/Admin/StudentCompleteInfo.js";
import AdminStudents from "../Controllers/Admin/AdminStudents.js";
import AdminAllowEdit from "../Controllers/Admin/AdminAllowEdit.js";

const adminRouter = express.Router();

adminRouter.post("/singin", adminSignin);
adminRouter.get("/dashboard/Ranking", Authentication, adminDashBoard);
adminRouter.get("/dashboard/session", Authentication,sessions);
adminRouter.get("/dashboard/students",Authentication,AdminStudents);
adminRouter.get("/dashboard/studentCompleteInfo",Authentication,studentCompleteInfo);
adminRouter.post("/dashboard/studentCompleteInfo/allowEdit",Authentication,AdminAllowEdit)


export default adminRouter;