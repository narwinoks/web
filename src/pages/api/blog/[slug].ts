import type { NextApiRequest, NextApiResponse } from 'next';

import { showBlogs } from '@/services/contents';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug } = req.query;
  if (typeof slug !== 'string') {
    res.status(400).json({ message: 'Invalid slug' });
    return;
  }
  if (req.method === 'GET') {
    const response = await showBlogs(slug);
    res.status(response.status).json(response);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
