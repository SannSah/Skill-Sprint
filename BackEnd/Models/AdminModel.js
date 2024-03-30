import mongoose, { Schema } from "mongoose";

const schema=new Schema({
  name: String, password: String, Department_id: String 
})

const Admin=mongoose.model("admins",schema);
export default Admin;