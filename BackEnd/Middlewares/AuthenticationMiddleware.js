import jwt from 'jsonwebtoken';
import secretKey from '../SecretKey.js';

function Authentication(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.sendStatus(401);

  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error('JWT verification failed:', err);
      return res.status(403).json({ inValidToken: true });
    } else {
      req.user = decoded;
      next();
    }
  });
}

export default Authentication;
