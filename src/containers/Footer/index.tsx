import { styled, Box, Typography, Divider } from '@mui/material';

import { useCustomTheme } from '~/hooks';
import proposalData from '~/data/proposal.json';
import { Partner } from '~/components/Partner';

export const Footer = () => {
  const { terms } = proposalData.LEGAL;
  return (
    <FooterContainer>
      <Partner />
      <Divider />
      <Box>
        <LegalTerms>Disclaimer: {terms}</LegalTerms>
      </Box>
    </FooterContainer>
  );
};

const FooterContainer = styled('footer')(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'grid',
    padding: '0 8rem',
    backgroundColor: darkTheme.backgroundPrimary,
    width: '100%',
    gap: '0.5rem',
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

const LegalTerms = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    textAlign: 'justify',
    whiteSpace: 'pre-wrap',
    fontSize: '0.6rem',
    color: darkTheme.disabledColor,
    padding: '0 0 2rem 0',
  };
});
