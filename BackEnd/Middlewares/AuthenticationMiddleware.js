import jwt from 'jsonwebtoken';
import secretKey from '../SecretKey.js';
import Admin from '../Models/AdminModel.js';

function Authentication(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.sendStatus(401);

  }
  jwt.verify(token, secretKey, async (err, decoded) => {
    if (err) {
      console.error('JWT verification failed:', err);
      return res.status(403).json({ inValidToken: true });
    } else {
      const admin=await Admin.findOne({_id:decoded.adminId});
      if(!admin){
        return res.status(403).json({ inValidToken: true });
      }
      req.user = decoded;
      next();
    }
  });
}

export default Authentication;
