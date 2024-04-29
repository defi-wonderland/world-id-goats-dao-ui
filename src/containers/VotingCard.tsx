import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';

import { GradientTitle, ProposalPoll, Voting, CountdownTimer } from '~/components';
import { useContract } from '~/hooks';
import { getConfig } from '~/config';

const { PROPOSAL_ID } = getConfig();

export const VotingCard = () => {
  const { getProposalDeadline } = useContract();
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
      <GradientTitle title='Should wonderland donate 250 WLD to Goat Guy?' />
      <VotingContainer>
        <Voting />
        <ProposalPoll />
        {deadline && <CountdownTimer targetDate={deadline} />}
      </VotingContainer>
    </SBox>
  );
};

export const SBox = styled(Box)(() => {
  return {
    marginTop: '8rem',
    marginBottom: '8rem',
  };
});

export const VotingContainer = styled(Box)(() => {
  return {
    margin: '0 6rem',
  };
});
