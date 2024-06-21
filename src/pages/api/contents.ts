import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';
import { saveBlog } from '@/services/contents';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const data = await saveBlog(req.body);
    res.status(data.status).json({ status: true, data: data.data });
  } else if (req.method === 'GET') {
    const response = await prisma.post.findMany();
    res.status(200).json({ status: true, data: response });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
