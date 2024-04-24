import { useCallback, useContext } from 'react';
import { ClientContext } from '~/providers/ClientProvider';
import { checkVoteValidity, proposalsQuorumThreshold, castVoteWithReasonAndParams } from '~/utils';
import { getConfig } from '~/config';

const { CONTRACT_ADDRESS } = getConfig();

type ProposalID = number;
type SupportType = number;
type ProofData = string;
type Reason = string;
type Params = string;
//temporary
type ContractParams = [number, string];

export function useContract() {
  const { walletClient, publicClient } = useContext(ClientContext);

  const executeContractRead = useCallback(
    async (client: typeof publicClient, abi: string, functionName: string, params: ContractParams) => {
      if (!client) return null;
      return await client.readContract({
        abi,
        address: CONTRACT_ADDRESS,
        functionName,
        params,
      });
    },
    [],
  );

  const executeContractWrite = useCallback(
    async (client: typeof walletClient, abi: string, functionName: string, params: ContractParams) => {
      if (!client) return null;
      const request = await client.simulateContract({
        abi,
        address: CONTRACT_ADDRESS,
        functionName,
        params,
      });
      return await client.writeContract(request);
    },
    [],
  );

  const checkValidity = useCallback(
    async (proposalId: ProposalID, support: SupportType, proofData: ProofData) => {
      return executeContractWrite(walletClient, checkVoteValidity, 'checkVoteValidity', [
        support,
        proposalId,
        proofData,
      ]);
    },
    [walletClient, executeContractWrite],
  );

  const getQuorumThreshold = useCallback(
    async (proposalId: ProposalID) => {
      return executeContractRead(publicClient, proposalsQuorumThreshold, 'proposalsQuorumThreshold', [proposalId]);
    },
    [publicClient, executeContractRead],
  );

  const castVote = useCallback(
    async (proposalId: ProposalID, support: SupportType, reason: Reason, params: Params) => {
      return executeContractWrite(walletClient, castVoteWithReasonAndParams, 'castVoteWithReasonAndParams', [
        proposalId,
        support,
        reason,
        params,
      ]);
    },
    [walletClient, executeContractWrite],
  );

  return {
    checkValidity,
    getQuorumThreshold,
    castVote,
  };
}
