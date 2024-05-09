import { formatProofData, to32Bytes } from '~/utils/misc';
import { ISuccessResult } from '~/types';

describe('Proof Data Formatting', () => {
  it('should correctly format proof data including handling of truncated merkle_root', () => {
    const input: ISuccessResult = {
      merkle_root: '0x' + '1'.repeat(63), // 31 bytes hex string, missing one character to make it 32 bytes
      nullifier_hash: '0x' + '2'.repeat(64), // 32 bytes
      proof: '0x' + '3'.repeat(256), // 128 bytes
    };

    // Testing the merkle_root formatting to 32 bytes
    const formattedMerkleRoot = to32Bytes(input.merkle_root);
    expect(formattedMerkleRoot.length).toBe(66); // 64 hex chars + '0x'

    const output = formatProofData(input);

    // Verify the output format
    expect(typeof output).toBe('string');
  });
});
