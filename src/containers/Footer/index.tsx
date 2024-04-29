import { styled, Box, Typography } from '@mui/material';
import { useCustomTheme } from '~/hooks/useTheme';

export const Footer = () => {
  return (
    <FooterContainer>
      <Box>
        <SText>Made with 💜 by Wonderland</SText>
        <SText>Powered by World ID</SText>
      </Box>
    </FooterContainer>
  );
};

const FooterContainer = styled('footer')(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: '5rem',
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: currentTheme.backgroundPrimary,
    width: '100%',
  };
});

const SText = styled(Typography)({
  fontSize: '1rem',
});
