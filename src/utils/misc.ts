import { hexToBigInt, numberToHex, decodeAbiParameters, parseAbiParameters, encodePacked, Hex, Address } from 'viem';

import { ProofData } from '~/types';

export const truncateValue = (value: string) => {
  return `${value?.slice(0, 6)}...${value?.slice(-4)}`;
};

export const formattedDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const nth = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const day = date.getDate();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  return `${month.split(',')[0]} ${day}${nth(day)}, ${date.getFullYear()}`;
};

export function to32Bytes(hexString: string): string {
  const bigInt = hexToBigInt(hexString as Address, { size: 32 });
  const bytes32 = numberToHex(bigInt, { size: 32 });
  return bytes32;
}

export function formatProofData({ merkleRoot, nullifierHash, proof }: ProofData) {
  // Format merkle root to bytes32
  const merkleRootBytes32 = to32Bytes(merkleRoot);

  const [decodedMerkleRoot] = decodeAbiParameters(parseAbiParameters('uint256 merkle_root'), merkleRootBytes32 as Hex);

  const [decodedNullifierHash] = decodeAbiParameters(
    parseAbiParameters('uint256 nullifier_hash'),
    nullifierHash as Hex,
  );

  const [decodedProof] = decodeAbiParameters(parseAbiParameters('uint256[8] proof'), proof as Hex);

  const proofData = encodePacked(
    ['uint256', 'uint256', 'uint256[8]'],
    [decodedMerkleRoot, decodedNullifierHash, decodedProof],
  );
  return proofData;
}
