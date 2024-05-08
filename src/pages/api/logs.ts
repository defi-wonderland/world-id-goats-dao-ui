import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const referer = req.headers.referer;

  const allowedReferers = ['https://www.moregoats.com/', 'https://dev.moregoats.com/'];

  if (!referer || !allowedReferers.includes(referer)) {
    res.status(403).json({ error: 'Unauthorized access' });
    return;
  }

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
