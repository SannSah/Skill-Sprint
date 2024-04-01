import mongoose, { Schema } from "mongoose";

const schema =new Schema({
  username:String,
  password:String
});
const User=mongoose.model('users',schema);
export default User;