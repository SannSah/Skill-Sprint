import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import adminRouter from "./Routes/AdminRoutes.js";


mongoose.connect("mongodb+srv://shivamkrish149:WM6j14E8jBoLphyp@cluster0.mducs0b.mongodb.net/chitkaraPlacement?retryWrites=true&w=majority")


const app = express();
app.use(express.json())
app.use(cors());


app.use("/admin/", adminRouter);
app.listen(8000);