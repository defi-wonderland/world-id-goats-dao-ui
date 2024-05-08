import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, merkle_root, nullifier_hash, proof, error } = req.body;
    const logData = { id, merkle_root, nullifier_hash, proof, error };

    console.log(logData);

    res.status(200).json({ message: 'Log successful', log: logData });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
