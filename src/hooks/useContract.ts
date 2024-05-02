import { useCallback, useState, useEffect } from 'react';
import { usePublicClient, useWalletClient, useAccount } from 'wagmi';
import { Address, Hex } from 'viem';

import { getConfig } from '~/config';
import {
  castVoteWithReasonAndParams,
  checkVoteValidity,
  proposalDeadline,
  proposalSnapshot,
  proposalVotes,
  proposalsQuorumThreshold,
  state,
  votingDelay,
  hasVoted,
} from '~/utils/parsedAbi';

const { CONTRACT_ADDRESS, PROPOSAL_ID } = getConfig();

type ProposalID = bigint;
type SupportType = number;
type ProofData = Hex;
type Reason = string;
type Params = Hex;

export function useContract() {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const [txHash, setTxHash] = useState<Hex>();
  const [votes, setVotes] = useState({ for: 0, against: 0, abstain: 0 });
  const [quorum, setQuorum] = useState('');
  const { address } = useAccount();
  const [deadline, setDeadline] = useState<Date>();
  const [addressVoted, setAddressVoted] = useState<boolean>();
  const [status, setStatus] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkValidity = useCallback(
    async (proposalId: ProposalID, support: SupportType, proofData: ProofData) => {
      if (!walletClient) return;

      return await walletClient.writeContract({
        abi: checkVoteValidity,
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
        abi: checkVoteValidity,
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
        abi: proposalsQuorumThreshold,
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
        abi: proposalSnapshot,
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
        abi: proposalDeadline,
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
        abi: proposalVotes,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'proposalVotes',
        args: [proposalId],
      });
    },
    [publicClient],
  );

  const getHasVoted = useCallback(
    async (proposalId: ProposalID, address: Address) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: hasVoted,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'hasVoted',
        args: [proposalId, address],
      });
    },
    [publicClient],
  );

  const getProposalState = useCallback(
    async (proposalId: ProposalID) => {
      if (!publicClient) return;
      return await publicClient.readContract({
        abi: state,
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
      abi: votingDelay,
      address: CONTRACT_ADDRESS as Address,
      functionName: 'votingDelay',
    });
  }, [publicClient]);

  const castVote = useCallback(
    async (proposalId: ProposalID, support: SupportType, reason: Reason, params: Params) => {
      if (!walletClient) return;
      return await walletClient.writeContract({
        abi: castVoteWithReasonAndParams,
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
        abi: castVoteWithReasonAndParams,
        address: CONTRACT_ADDRESS as Address,
        functionName: 'castVoteWithReasonAndParams',
        args: [proposalId, support, reason, params],
      });
    },
    [publicClient],
  );

  const fetchContractData = useCallback(async () => {
    const quorumThreshold = await getQuorumThreshold(BigInt(PROPOSAL_ID));
    const voteCounts = await getProposalVotes(BigInt(PROPOSAL_ID));
    const deadlineResponse = await getProposalDeadline(BigInt(PROPOSAL_ID));
    const proposalStatus = await getProposalState(BigInt(PROPOSAL_ID));
    const hasVotedResponse = address && (await getHasVoted(BigInt(PROPOSAL_ID), address));

    if (deadlineResponse) {
      const date = new Date(Number(deadlineResponse) * 1000);
      setDeadline(date);
    }
    if (hasVotedResponse) {
      setAddressVoted(hasVotedResponse);
    }
    if (proposalStatus) {
      setStatus(Number(proposalStatus));
    }
    if (voteCounts) {
      setVotes({
        for: Number(voteCounts[1]),
        against: Number(voteCounts[2]),
        abstain: Number(voteCounts[0]),
      });
    }
    if (quorumThreshold) {
      setQuorum(quorumThreshold.toString());
    }
    if (
      quorumThreshold !== undefined &&
      voteCounts !== undefined &&
      proposalStatus !== undefined &&
      hasVotedResponse !== undefined &&
      deadlineResponse !== undefined
    ) {
      setIsLoading(false);
    }
  }, [address, getQuorumThreshold, getProposalVotes, getProposalDeadline, getProposalState, getHasVoted]);

  useEffect(() => {
    fetchContractData();
  }, [fetchContractData]);

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
    getHasVoted,
    setTxHash,
    txHash,
    votes,
    quorum,
    addressVoted,
    status,
    deadline,
    isLoading,
  };
}
