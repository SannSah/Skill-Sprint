import express from "express";
import StudentSignin from '../Controllers/Student/StudentSign.js';

const studentRouter = express.Router();

studentRouter.post("/signin", StudentSignin)
export default studentRouter;
