import { useCallback } from 'react';
import { checkVoteValidity, proposalsQuorumThreshold, castVoteWithReasonAndParams } from '~/utils';
import { getConfig } from '~/config';
import { usePublicClient, useWalletClient } from 'wagmi';
import { Address, Hex } from 'viem';

const { CONTRACT_ADDRESS } = getConfig();

type ProposalID = bigint;
type SupportType = number;
type ProofData = Hex;
type Reason = Hex;
type Params = Hex;

export function useContract() {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const checkValidity = useCallback(
    async (proposalId: ProposalID, support: SupportType, proofData: ProofData) => {
      if (!walletClient) return;

      return await walletClient.writeContract({
        abi: checkVoteValidity,
        address: CONTRACT_ADDRESS as Address,
        functionName: checkVoteValidity[0].name,
        args: [support, proposalId, proofData],
      });
    },
    [walletClient],
  );

  const getQuorumThreshold = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: proposalsQuorumThreshold,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'proposalsQuorumThreshold',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const castVote = useCallback(
    async (proposalId: ProposalID, support: SupportType, reason: Reason, params: Params) => {
      if (!walletClient) return;
      return await walletClient.writeContract({
        abi: castVoteWithReasonAndParams,
        address: CONTRACT_ADDRESS as Address,
        functionName: castVoteWithReasonAndParams[0].name,
        args: [proposalId, support, reason, params],
      });
    },
    [walletClient],
  );

  return {
    checkValidity,
    getQuorumThreshold,
    castVote,
  };
}
