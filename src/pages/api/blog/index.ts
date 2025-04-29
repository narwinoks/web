import { NextApiRequest, NextApiResponse } from 'next';

import { getBlogs, saveBlog } from '@/services/contents';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let data: any = {};
    try {
      data = await saveBlog(req.body);
    } catch (error) {
      data = {
        status: 500,
        data: error,
      };
    }
    res.status(data.status).json({ status: true, data: data.data });
  } else if (req.method === 'GET') {
    const { limit, offset, search, sort, category_id } = req.query;
    const limitNumber = parseInt(limit as string, 10) || 10;
    const offsetNumber = parseInt(offset as string, 10) || 0;
    const searchFix: any = search ?? '';
    const sortFix: any = sort ?? 'asc';
    const categoryIDFix: any = category_id ?? '';
    const response = await getBlogs(
      limitNumber,
      offsetNumber,
      searchFix,
      sortFix,
      categoryIDFix,
    );
    res.status(response.status).json(response);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
