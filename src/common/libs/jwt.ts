import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const signToken = (user: any) => {
  return jwt.sign({ userId: user.id, username: user.username }, secret, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token: any) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
