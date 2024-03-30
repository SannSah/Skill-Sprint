import adminDashBoard from "../Controllers/Admin/AdminDashBoard.js";
import adminSignin from "../Controllers/Admin/AdminSignin.js";
import sessions from "../Controllers/Admin/AdminSession.js";
import express from 'express';
import Authentication from "../Middlewares/AuthenticationMiddleware.js";

const adminRouter = express.Router();

adminRouter.post("/singin", adminSignin);
adminRouter.get("/dashboard/Ranking", Authentication, adminDashBoard);
adminRouter.get("/dashboard/session", Authentication,sessions);

export default adminRouter;