import { styled } from '@mui/material/styles';
import { TweetCard, VotingCard } from '~/containers';
import { SectionBackground } from '~/components/BackgroundCircle';
import { GoatDAOProposal } from '../GoatDAOProposal';

export const Landing = () => {
  return (
    <>
      <BackgroundContainer>
        <BG1 type='2' align='center' />
        <BG2 type='1' align='left' />
        <BG3 type='4' align='right' />
      </BackgroundContainer>
      <LandingContainer>
        <TweetCard />
        <GoatDAOProposal />
        <VotingCard />
      </LandingContainer>
    </>
  );
};

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  gap: '6.25rem',
  padding: '0.625rem',
  width: '66.25rem',
  '@media (max-width: 600px)': {
    width: '100%',
  },
});

const BackgroundContainer = styled('div')`
  position: relative;
  z-index: -1;
  width: 100vw;
`;

const BG1 = styled(SectionBackground)`
  top: 80rem;
  right: -15rem;
  width: 67rem;
  @media (max-width: 600px) {
    right: -10rem;
    width: 20rem;
  }
`;

const BG2 = styled(SectionBackground)`
  top: 20rem;
  left: -15rem;
  width: 67rem;
  @media (max-width: 600px) {
    width: 20rem;
    left: -2rem;
    top: 40rem;
  }
`;

const BG3 = styled(SectionBackground)`
  top: -10rem;
  right: -23rem;
  width: 67rem;
  @media (max-width: 600px) {
    width: 20rem;
    right: -10rem;
    top: -5rem;
  }
`;
