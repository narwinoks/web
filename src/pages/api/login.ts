import { getGithubUser } from '@/services/github';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    try {
        const { username, password } = req.body
        const response = {
            status: 200,
            data: {
                username: username,
                password: 123,
                token: 1234567890,
                message: 'login success'
            }
        }
        return res.status(response.status).json(response.data);
    } catch (error) {    
    }
}
