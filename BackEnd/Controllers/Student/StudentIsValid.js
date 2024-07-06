import jwt from 'jsonwebtoken';
import secretKey from '../../SecretKey.js';
import User from '../../Models/UserModel.js';

function StudentIsValid(req, res) {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(401);

  }
  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      console.error('JWT verification failed:', err);
      return res.status(403).json({ inValidToken: true });
    } else {

      const user = await User.findOne({ _id: decoded.userId });
      if (!user) {
        return res.status(403).json({ inValidToken: true });
      }else{
        const userInfo={username:user.username,session:user.session}
        res.json({inValidToken:false,UserInfo:userInfo});
      }
    }
  });

}
export default StudentIsValid;