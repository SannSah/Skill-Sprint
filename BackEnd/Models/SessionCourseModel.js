import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  SessionName: String,
  D_id: String
})

const sessioncourses = mongoose.model("sessioncourses", schema);
export default sessioncourses;
