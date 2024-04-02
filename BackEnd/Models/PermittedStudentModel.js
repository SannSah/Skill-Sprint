import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  'rollNo': String
})
const PermittedStudents = mongoose.model('permittedstudents', schema);
export default PermittedStudents;