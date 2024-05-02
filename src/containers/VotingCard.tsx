import { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';

import { ProposalPoll, Voting, CountdownTimer, Title } from '~/components';
import { useContract } from '~/hooks';
import { getConfig } from '~/config';
import { useAccount } from 'wagmi';

const { PROPOSAL_ID } = getConfig();

export const VotingCard = () => {
  const { getProposalDeadline, getHasVoted, getProposalState, txHash } = useContract();
  const { address } = useAccount();
  const [deadline, setDeadline] = useState<Date>();
  const [addressVoted, setAddressVoted] = useState<boolean>();
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    async function fetchContractData() {
      const deadline = await getProposalDeadline(BigInt(PROPOSAL_ID));
      const proposalStatus = await getProposalState(BigInt(PROPOSAL_ID));
      const hasVoted = address && (await getHasVoted(BigInt(PROPOSAL_ID), address));
      if (deadline) {
        const date = new Date(Number(deadline) * 1000);
        setDeadline(date);
      }
      if (hasVoted) {
        setAddressVoted(hasVoted);
      }
      if (proposalStatus) {
        /* enum ProposalState {
          Pending,
          Active,
          Canceled,
          Defeated,
          Succeeded,
          Queued,
          Expired,
          Executed
          }
          returns the index position
          */
        setStatus(Number(proposalStatus));
      }
    }
    fetchContractData();
  }, [address, getHasVoted, getProposalDeadline, getProposalState, txHash]);

  return (
    <SBox>
      <Title title="Should Wonderland contribute 250 WLD to Richard's goat project?" />

      <VotingContainer>
        {!addressVoted && status === 1 && <Voting />}

        <ProposalPoll />

        {addressVoted && status === 1 && <SecondaryText>THANKS FOR YOUR VOTE</SecondaryText>}

        {deadline && status === 1 && <CountdownTimer targetDate={deadline} />}

        {status != 1 && <SecondaryText>VOTING ENDED</SecondaryText>}

        {status != 1 && <EndText>🐐 THANKS FOR YOUR HELPING RICHARD OUT 🐐</EndText>}
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
    marginTop: '1.5rem',
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

export const SecondaryText = styled(Typography)(() => {
  return {
    fontSize: '1.8rem',
    fontWeight: 800,
    lineHeight: '2rem',
    textAlign: 'center',
    letterSpacing: '0.25rem',
    textTransform: 'uppercase',
    margin: '5rem 0 0 0',
  };
});

export const EndText = styled(Typography)(() => {
  return {
    fontSize: '1rem',
    fontWeight: 800,
    lineHeight: '2rem',
    textAlign: 'center',
    letterSpacing: '0.25rem',
    textTransform: 'uppercase',
  };
});
