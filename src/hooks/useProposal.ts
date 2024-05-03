import { useCallback, useState, useEffect } from 'react';
import { usePublicClient, useWalletClient, useAccount } from 'wagmi';

import { useContract } from './useContract';
import { getConfig } from '~/config';

const { PROPOSAL_ID } = getConfig();

export function useProposal() {
  const { getQuorumThreshold, getHasVoted, getProposalDeadline, getProposalState, getProposalVotes } = useContract();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const [votes, setVotes] = useState({ for: 0, against: 0, abstain: 0 });
  const [quorum, setQuorum] = useState('');
  const { address } = useAccount();
  const [deadline, setDeadline] = useState<Date>();
  const [addressVoted, setAddressVoted] = useState<boolean>();
  const [status, setStatus] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchContractData = useCallback(async () => {
    try {
      const quorumThreshold = await getQuorumThreshold(BigInt(PROPOSAL_ID));
      const voteCounts = await getProposalVotes(BigInt(PROPOSAL_ID));
      const deadlineResponse = await getProposalDeadline(BigInt(PROPOSAL_ID));
      const proposalStatus = await getProposalState(BigInt(PROPOSAL_ID));
      const hasVotedResponse = address && (await getHasVoted(BigInt(PROPOSAL_ID), address));

      if (deadlineResponse) {
        setDeadline(new Date(Number(deadlineResponse) * 1000));
      }
      setAddressVoted(hasVotedResponse);
      setStatus(Number(proposalStatus));
      if (voteCounts !== undefined) {
        setVotes({
          for: Number(voteCounts[1]),
          against: Number(voteCounts[2]),
          abstain: Number(voteCounts[0]),
        });
      }
      if (quorumThreshold) {
        setQuorum(quorumThreshold.toString());
      }

      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [address, getHasVoted, getProposalDeadline, getProposalState, getProposalVotes, getQuorumThreshold]);

  useEffect(() => {
    if (publicClient && walletClient) {
      fetchContractData();
    }
  }, [fetchContractData, publicClient, walletClient]);

  return {
    votes,
    quorum,
    addressVoted,
    status,
    deadline,
    isLoading,
  };
}
