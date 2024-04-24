import { styled } from '@mui/material/styles';

import { ProposalCard } from '~/containers';

export const Landing = () => {
  return (
    <LandingContainer>
      <ProposalCard />
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
