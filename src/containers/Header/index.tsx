import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/material/styles';
import { IconButton, Box } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useCustomTheme } from '~/hooks/useTheme';
import { zIndex, HEADER_HEIGHT } from '~/utils';

export const Header = () => {
  const { changeTheme, theme } = useCustomTheme();

  return (
    <StyledHeader>
      <Logo>GoatDAO</Logo>
      <ControlsBox>
        <SIconButton onClick={changeTheme}>{theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</SIconButton>
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
    height: `${HEADER_HEIGHT}rem`,
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: zIndex.HEADER,
    boxShadow: currentTheme.boxShadow,
  };
});

const Logo = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});

const ControlsBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const SIconButton = styled(IconButton)({
  color: 'inherit',
});
