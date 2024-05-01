import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';

import { ProposalPoll, Voting, CountdownTimer, Title } from '~/components';
import { useContract } from '~/hooks';
import { getConfig } from '~/config';
import { useAccount } from 'wagmi';

const { PROPOSAL_ID } = getConfig();

export const VotingCard = () => {
  const { getProposalDeadline, getHasVoted, getProposalState, txHash } = useContract();
  const { address } = useAccount();
  const [deadline, setDeadline] = useState<Date>();
  const [enableVote, setEnableVote] = useState<boolean>(true);

  useEffect(() => {
    async function fetchContractData() {
      const deadline = await getProposalDeadline(BigInt(PROPOSAL_ID));
      const hasVoted = address && (await getHasVoted(BigInt(PROPOSAL_ID), address));
      const active = await getProposalState(BigInt(PROPOSAL_ID));
      if (deadline) {
        const date = new Date(Number(deadline) * 1000);
        setDeadline(date);
      }
      if (hasVoted && active) {
        const votingActive = active === 'Active';
        setEnableVote(!hasVoted && votingActive);
      }
    }
    fetchContractData();
  }, [address, getHasVoted, getProposalDeadline, getProposalState, txHash]);

  return (
    <SBox>
      <Title title="Should Wonderland contribute 250 WLD to Richard's goat project?" />

      <VotingContainer>
        <Voting enableVote={enableVote} />
        <ProposalPoll />
        {deadline && <CountdownTimer targetDate={deadline} />}
      </VotingContainer>
    </SBox>
  );
};

export const SBox = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem',
    marginBottom: '7rem',
    width: '100%',
    '@media (max-width: 600px)': {
      margin: '1rem',
    },
  };
});

export const VotingContainer = styled(Box)(() => {
  return {
    margin: '0 6rem',
  };
});

export const ConnectContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '1rem 0 2rem',
  };
});
