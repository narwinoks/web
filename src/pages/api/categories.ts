import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/common/libs/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const data = await prisma.categories.findMany();
    const response = data.map((element: any) => ({
      value: element.id,
      label: element.name,
      icon: element.icon,
    }));
    res.status(200).json({ status: true, data: response });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
