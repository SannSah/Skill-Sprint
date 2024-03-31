import User from "../../Models/UserModel.js";
import jwt from 'jsonwebtoken';
import secretKey from "../../SecretKey.js";
async function StudentSignin(req, res) {
  const { username, password } = req.body;
  console.log(username + " " + password);
  try {
    const user = await User.findOne({ username: username, password: password });
    console.log(user);
    if (user) {
      const token=jwt.sign({userId:user._id},secretKey);
      res.json({ isValidUser: true,token:token });
    } else {
      res.json({ isValidUser: false });
    }
  } catch (err) {
    // Handle errors
  }
}

export default StudentSignin;
