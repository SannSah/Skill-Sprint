import jwt from 'jsonwebtoken';
import secretKey from '../SecretKey.js';
import User from '../Models/UserModel.js';

function StudentAuthentication(req, res, next) {
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
      }

      req.user = decoded;

      req.rollNo = user.username+"";
      next();
    }
  });

}
export default StudentAuthentication;