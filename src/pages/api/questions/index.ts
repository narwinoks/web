import { NextApiRequest, NextApiResponse } from 'next';

import { saveQuestion } from '@/services/questions';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    let data: any = {};
    try {
      data = await saveQuestion(req.body);
    } catch (error) {
      data = {
        status: 500,
        data: error,
      };
    }
    res.status(200).json({ status: false, data: data.data });
  } else if (req.method === 'GET') {
    res.status(200).json([]);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
