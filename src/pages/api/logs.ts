import type { NextApiRequest, NextApiResponse } from 'next';
import { getLogs } from '~/utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const logs = getLogs();
    res.status(200).json(logs);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
