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
  const [timeLeft, setTimeLeft] = useState<number>(1);
  const votingActive = timeLeft > 0;

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
      {!votingActive && (
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

          {!votingActive && <SecondaryText>VOTING ENDED</SecondaryText>}

          {!votingActive && <EndText>🐐 THANKS FOR YOUR HELPING RICHARD OUT 🐐</EndText>}
        </VotingContainer>
      </SBox>
    </>
  );
};

export const SBox = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
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
