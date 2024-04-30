import { styled, Box } from '@mui/material';
import { useCustomTheme } from '~/hooks';
import { SText } from '~/containers';

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
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: '5rem',
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: darkTheme.backgroundPrimary,
    width: '100%',
    '@media (max-width: 600px)': {
      padding: '0 1rem',
    },
  };
});
