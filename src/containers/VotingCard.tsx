import { Box, styled } from '@mui/material';
import { GradientTitle, ProposalPoll, Voting } from '~/components';

export const VotingCard = () => {
  return (
    <SBox>
      <GradientTitle title='Should wonderland donate 250 WLD to Goat Guy?' />
      <VotingContainer>
        <Voting />
        <ProposalPoll />
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
