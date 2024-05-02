import { styled } from '@mui/material/styles';
import { GoatGuy, TweetCard, VotingCard } from '~/containers';
import { SectionBackground } from '~/components/BackgroundCircle';
import { GoatDAOProposal } from '../GoatDAOProposal';
import { useContract } from '~/hooks';

export const Landing = () => {
  const { isLoading } = useContract();
  return (
    <>
      <BackgroundContainer>
        <BG1 type='2' align='center' />
        <BG2 type='1' align='left' />
        <BG3 type='4' align='right' />
      </BackgroundContainer>
      <LandingContainer>
        {!isLoading && (
          <>
            <VotingCard />
            <GoatGuy />
            <TweetCard />
            <GoatDAOProposal />
            <VotingCard />
          </>
        )}
      </LandingContainer>
    </>
  );
};

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.625rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '66.25rem',
  overflow: 'hidden',
  gap: '5rem',
  '@media (max-width: 600px)': {
    padding: '0 1rem',
    width: '100%',
    margin: '1rem',
  },
});

const BackgroundContainer = styled('div')`
  position: relative;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
`;

const BG1 = styled(SectionBackground)`
  top: 140rem;
  right: -15rem;
  width: 55%;
`;

const BG2 = styled(SectionBackground)`
  top: 110rem;
  left: -15rem;
  width: 55%;
`;

const BG3 = styled(SectionBackground)`
  top: 80rem;
  right: -23rem;
  width: 45%;
`;
