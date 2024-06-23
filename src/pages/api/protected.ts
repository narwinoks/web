import { authMiddleware } from '@/common/middleware/auth';

const handler = async (req: any, res: any) => {
  return res
    .status(200)
    .json({ message: 'You are authenticated', user: req.user });
};
export default authMiddleware(handler);
