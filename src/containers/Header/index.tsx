import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box, Typography, styled } from '@mui/material';
import Link from 'next/link';

import { useCustomTheme } from '~/hooks';

export const Header = () => {
  return (
    <StyledHeader>
      <Box>
        <SText>
          Made with 💜 by
          <Link href='https://defi.sucks/' target='_blank'>
            Wonderland
          </Link>
        </SText>
        <SText>
          Powered by
          <Link href='https://worldcoin.org/world-id' target='_blank'>
            World ID
          </Link>
        </SText>
      </Box>
      <ControlsBox>
        <ConnectButton showBalance={false} accountStatus='address' chainStatus='none' />
      </ControlsBox>
    </StyledHeader>
  );
};

const StyledHeader = styled('header')(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: '5rem',
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: '100',
    a: {
      textDecoration: 'none',
      color: darkTheme.textPrimaryOpposite,
      marginLeft: '0.25rem',
    },
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
