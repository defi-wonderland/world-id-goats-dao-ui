import { useEffect, useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { useAccount } from 'wagmi';

import { ProposalPoll, Voting, CountdownTimer, Title } from '~/components';
import { useContract } from '~/hooks';
import { getConfig } from '~/config';

const { PROPOSAL_ID } = getConfig();

export const VotingCard = () => {
  const { getProposalDeadline, getHasVoted, txHash } = useContract();
  const { address } = useAccount();
  const [deadline, setDeadline] = useState<Date>();
  const [addressVoted, setAddressVoted] = useState<boolean>();
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const votingActive = timeLeft > 0;
  const votingEnded = timeLeft < 0;

  useEffect(() => {
    async function fetchContractData() {
      const deadline = await getProposalDeadline(BigInt(PROPOSAL_ID));
      const hasVoted = address && (await getHasVoted(BigInt(PROPOSAL_ID), address));
      if (deadline) {
        const date = new Date(Number(deadline) * 1000);
        const time = date.getTime() - new Date().getTime();
        setDeadline(date);
        setTimeLeft(time);
      }
      if (hasVoted) {
        setAddressVoted(hasVoted);
      }
    }
    fetchContractData();
  }, [address, getHasVoted, getProposalDeadline, txHash]);

  return (
    <>
      {timeLeft < 0 && (
        <GoatBgContainer>
          <Goat1>🐐</Goat1>
          <Goat2>🐐</Goat2>
        </GoatBgContainer>
      )}

      <SBox>
        <Title title="Should Wonderland contribute 250 WLD to Richard's goat project?" />
        <VotingContainer>
          {!addressVoted && votingActive && <Voting />}

          <ProposalPoll />

          {addressVoted && votingActive && <SecondaryText>THANKS FOR YOUR VOTE</SecondaryText>}

          {deadline && votingActive && <CountdownTimer targetDate={deadline} />}

          {votingEnded && <SecondaryText>VOTING ENDED</SecondaryText>}

          {votingEnded && <EndText>🐐 THANKS FOR YOUR HELPING RICHARD OUT 🐐</EndText>}
        </VotingContainer>
      </SBox>
    </>
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
    '@media (min-width: 601px) and  (max-width: 1440px)': {
      margin: '1rem 0 7rem 0',
    },
    '@media (min-width: 1441px)': {
      margin: '6rem 0 16rem 0',
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

const GoatBgContainer = styled(Box)({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-around',
});

const Goat1 = styled(Typography)({
  fontSize: '17rem',
  position: 'absolute',
  transform: 'scaleX(-1) rotate(35deg)',
  top: '16rem',
  left: '4rem',
});

const Goat2 = styled(Typography)({
  fontSize: '17rem',
  position: 'absolute',
  right: '-5rem',
  top: '2rem',
  transform: 'rotate(45deg)',
});
