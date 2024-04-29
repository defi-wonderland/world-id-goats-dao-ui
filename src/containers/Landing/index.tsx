import { styled } from '@mui/material/styles';
import { GoatGuy, ProposalDetail, TweetCard, VotingCard } from '~/containers';
import { SectionBackground } from '~/components/BackgroundCircle';

export const Landing = () => {
  return (
    <LandingContainer>
      <BackgroundContainer>
        <BG1 type='2' align='center' />
        <BG2 type='1' align='left' />
        <BG3 type='4' align='right' />
      </BackgroundContainer>
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

const BackgroundContainer = styled('div')`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
`;

const BG1 = styled(SectionBackground)`
  top: 150rem;
  right: 0;
  width: 38%;
`;

const BG2 = styled(SectionBackground)`
  top: 100rem;
  width: 38%;
`;

const BG3 = styled(SectionBackground)`
  margin-left: auto;
  top: 50rem;
  right: 5rem;
  width: 38%;
`;
