import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id, proof, error } = req.query;
    const logData = { id, proof, error };

    console.log(logData);

    res.status(200).json({ message: 'Log successful', log: logData });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
