import { styled } from '@mui/material/styles';
import { GoatGuy, ProposalDetail, TweetCard, VotingCard } from '~/containers';

export const Landing = () => {
  return (
    <LandingContainer>
      <VotingCard />
      <GoatGuy />
      <TweetCard />
      <ProposalDetail />
      <VotingCard />
    </LandingContainer>
  );
};

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  '@media (max-width: 600px)': {
    padding: '0 1rem',
  },
});
