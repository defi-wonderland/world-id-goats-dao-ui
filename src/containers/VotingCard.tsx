import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { GradientTitle, ProposalPoll, Voting, CountdownTimer } from '~/components';
import { useContract } from '~/hooks';
import { getConfig } from '~/config';

const { PROPOSAL_ID } = getConfig();

export const VotingCard = () => {
  const { getProposalDeadline } = useContract();
  const { isConnected } = useAccount();
  const [deadline, setDeadline] = useState<Date>();

  useEffect(() => {
    async function fetchContractData() {
      const deadline = await getProposalDeadline(BigInt(PROPOSAL_ID));
      if (deadline) {
        const date = new Date(Number(deadline) * 1000);
        setDeadline(date);
      }
    }
    fetchContractData();
  }, [getProposalDeadline]);

  return (
    <SBox>
      <GradientTitle title="Should Wonderland contribute 250 WLD to Richard's goat project?" />

      <VotingContainer>
        {isConnected && <Voting />}
        {!isConnected && (
          <ConnectContainer>
            <ConnectButton showBalance={false} accountStatus='address' chainStatus='none' />
          </ConnectContainer>
        )}
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
    marginBottom: '5rem',
    width: '100%',
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
