import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box, Typography, styled } from '@mui/material';

import { useCustomTheme } from '~/hooks/useTheme';

export const Header = () => {
  return (
    <StyledHeader>
      <Box>
        <SText>Made with 💜 by Wonderland</SText>
        <SText>Powered by World ID</SText>
      </Box>
      <ControlsBox>
        <ConnectButton showBalance={false} accountStatus='address' chainStatus='none' />
      </ControlsBox>
    </StyledHeader>
  );
};

// Styles
const StyledHeader = styled('header')(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: '5rem',
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: '100',
    boxShadow: currentTheme.boxShadow,
    '@media (max-width: 600px)': {
      padding: '0 1rem',
    },
  };
});

const ControlsBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const SText = styled(Typography)({
  fontSize: '1rem',
});
