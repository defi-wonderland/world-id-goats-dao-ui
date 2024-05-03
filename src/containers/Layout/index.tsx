import { Box, styled } from '@mui/material';

import { Disclaimer } from '~/components';
import { GoatGuy, Header, VotingCard } from '~/containers';

export const Layout = () => {
  return (
    <ScreenContainer>
      <Disclaimer />
      <Header />
      <VotingCard />
      <GoatGuy />
    </ScreenContainer>
  );
};

export const ScreenContainer = styled(Box)(() => {
  return {
    width: '100%',
    height: '100vh',
  };
});
