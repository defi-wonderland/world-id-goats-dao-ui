import { styled } from '@mui/material';
import Link from 'next/link';

import { useCustomTheme } from '~/hooks';
import { SText } from '~/containers';

export const Footer = () => {
  return (
    <FooterContainer>
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
