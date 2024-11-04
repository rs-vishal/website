import crypto from 'crypto';

// Generate a random JWT secret
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);
