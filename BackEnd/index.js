import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRouter from "./Routes/AdminRoutes.js";
import studentRouter from "./Routes/StudentRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://shivamkrish149:WM6j14E8jBoLphyp@cluster0.mducs0b.mongodb.net/chitkaraPlacement?retryWrites=true&w=majority")

app.use("/admin/", adminRouter);
app.use("/student/", studentRouter);
app.listen(8000);
