import { Box, Typography, styled } from '@mui/material';
import Link from 'next/link';

import { useCustomTheme } from '~/hooks';
import { Connect } from '~/components/Connect';

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
        <Connect />
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
      color: darkTheme.textPrimary,
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

export const SText = styled(Typography)({
  fontSize: '1rem',
  '@media (max-width: 600px)': {
    fontSize: '0.75rem',
  },
});
