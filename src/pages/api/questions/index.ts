import { NextApiRequest, NextApiResponse } from 'next';

import { getQuestion, saveQuestion } from '@/services/questions';

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
    res.status(200).json({ status: data.status, data: data.data });
  } else if (req.method === 'GET') {
    const response = await getQuestion();
    res.status(response.status).json(response);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
