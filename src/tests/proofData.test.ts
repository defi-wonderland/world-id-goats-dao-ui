import { formatProofData, to32Bytes } from '~/utils/misc';
import { ProofData } from '~/types';

describe('Proof Data Formatting', () => {
  it('should correctly format proof data including handling of truncated merkle_root', () => {
    const input: ProofData = {
      merkleRoot: '0x' + '1'.repeat(63), // 31 bytes hex string, missing one character to make it 32 bytes
      nullifierHash: '0x' + '2'.repeat(64), // 32 bytes
      proof: '0x' + '3'.repeat(64).repeat(8), //uint256[8]
    };

    // Testing the merkle_root formatting to 32 bytes
    const formattedMerkleRoot = to32Bytes(input.merkleRoot);
    expect(formattedMerkleRoot.length).toBe(66); // 64 hex chars + '0x'

    const output = formatProofData(input);

    // Verify the output format
    expect(typeof output).toBe('string');
  });
});
