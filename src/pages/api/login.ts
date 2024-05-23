import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        console.log(username, password);
        if (username === 'admin' && password === 'password') {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
