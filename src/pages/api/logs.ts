import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'nextjs-cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await Cors(req, res, {
    methods: ['GET'],
    origin: 'https://www.moregoats.com/',
    allowCredentials: true,
    optionsSuccessStatus: 200,
  });

  if (req.method === 'GET') {
    const { id, merkle_root, nullifier_hash, proof, error } = req.query;
    const logData = { id, merkle_root, nullifier_hash, proof, error };

    console.log(logData);

    res.status(200).json({ message: 'Log successful', log: logData });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
