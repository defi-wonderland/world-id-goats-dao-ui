import { useCallback, useState } from 'react';
import { usePublicClient, useWalletClient } from 'wagmi';
import { Address, Hex } from 'viem';

import { getConfig } from '~/config';
import { goatsDaoAbi } from '~/utils';

const { CONTRACT_ADDRESS } = getConfig();

type ProposalID = bigint;
type SupportType = number;
type ProofData = Hex;
type Reason = string;
type Params = Hex;

export function useContract() {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const [txHash, setTxHash] = useState<Hex>();

  const checkValidity = useCallback(
    async (proposalId: ProposalID, support: SupportType, proofData: ProofData) => {
      if (!walletClient) return;

      return await walletClient.writeContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'checkVoteValidity',
        args: [support, proposalId, proofData],
      });
    },
    [walletClient],
  );

  const simulateCheckValidity = useCallback(
    async (proposalId: ProposalID, support: SupportType, proofData: ProofData) => {
      if (!publicClient) return;

      return await publicClient.simulateContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'checkVoteValidity',
        args: [support, proposalId, proofData],
      });
    },
    [publicClient],
  );

  const getQuorumThreshold = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'proposalsQuorumThreshold',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const getProposalSnapshot = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'proposalSnapshot',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const getProposalDeadline = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'proposalDeadline',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const getProposalVotes = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'proposalVotes',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const getProposalState = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'state',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const getVotingDealay = useCallback(async () => {
    if (!publicClient) return;
    return await publicClient.readContract({
      abi: goatsDaoAbi,
      address: CONTRACT_ADDRESS as Address,
      functionName: 'votingDelay',
    });
  }, [publicClient]);

  const castVote = useCallback(
    async (proposalId: ProposalID, support: SupportType, reason: Reason, params: Params) => {
      if (!walletClient) return;
      return await walletClient.writeContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'castVoteWithReasonAndParams',
        args: [proposalId, support, reason, params],
      });
    },
    [walletClient],
  );

  const simulateCastVote = useCallback(
    async (proposalId: ProposalID, support: SupportType, reason: Reason, params: Params) => {
      if (!publicClient) return;
      return await publicClient.simulateContract({
        abi: goatsDaoAbi,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'castVoteWithReasonAndParams',
        args: [proposalId, support, reason, params],
      });
    },
    [publicClient],
  );

  return {
    checkValidity,
    getQuorumThreshold,
    castVote,
    getVotingDealay,
    getProposalVotes,
    getProposalDeadline,
    getProposalSnapshot,
    simulateCheckValidity,
    getProposalState,
    simulateCastVote,
    setTxHash,
    txHash,
  };
}
