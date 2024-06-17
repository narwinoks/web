import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/common/libs/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    if (req.method === 'GET') {
        const response = await prisma.contents.findMany();
        res.status(200).json({ status: true, data: response });
    }else{
        res.status(405).json({ message: 'Method not allowed' });
    }
  }