import User from "../../Models/UserModel.js";
import jwt from 'jsonwebtoken';
import secretKey from "../../SecretKey.js";
async function StudentSignin(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username, password: password });

    if (user) {
      const token = jwt.sign({ userId: user._id, username: username,session:user.session }, secretKey);
      console.log(token);
      res.json({ isValidUser: true, Token: token });
    } else {
      res.json({ isValidUser: false });
    }
  } catch (err) {
    // Handle errors
  }
}

export default StudentSignin;
