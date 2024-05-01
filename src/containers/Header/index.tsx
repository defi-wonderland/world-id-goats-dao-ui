import { Box, Typography, styled } from '@mui/material';

import { useCustomTheme } from '~/hooks';
import { Connect, Partner } from '~/components';

export const Header = () => {
  return (
    <StyledHeader>
      <Partner />
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
