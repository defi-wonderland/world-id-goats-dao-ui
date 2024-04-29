import { styled } from '@mui/material/styles';
import { GoatGuy, ProposalDetail, TweetCard, VotingCard } from '~/containers';
// import { SectionBackground } from '~/components/Section';

export const Landing = () => {
  return (
    <LandingContainer>
      {/* <BackgroundContainer>
        <BG_1 type='2' align='center' />
        <BG_2 type='1' align='left' />
        <BG_3 type='2' align='right' />
      </BackgroundContainer> */}
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

// const BackgroundContainer = styled('div')`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
//   width: 100%;
// `;

// const BG_1 = styled(SectionBackground)`
//   position: relative;
//   width: 50%;
//   margin: 0 auto;
// `;

// const BG_2 = styled(SectionBackground)`
//   position: relative;
//   width: 38%;
// `;

// const BG_3 = styled(SectionBackground)`
//   position: relative;
//   margin-left: auto;
//   width: 38%;
//   right: 0%;
// `;
