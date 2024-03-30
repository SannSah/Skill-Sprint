import crypto from 'crypto';

// Generate a random secret key if it doesn't already exist
let secretKey = 'XYZ';

// if (!secretKey) {
//   secretKey = crypto.randomBytes(32).toString('hex');
// }

export default secretKey;