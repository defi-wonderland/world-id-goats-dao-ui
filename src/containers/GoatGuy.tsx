import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import arrow from '~/assets/arrow.svg';
import goatGuy from '~/assets/goatGuy.svg';
import { useCustomTheme } from '~/hooks';

export const GoatGuy = () => {
  return (
    <GoatGuyContainer>
      <SImage src={goatGuy} alt='Goat Guy' width={150} height={150} />
      <Link href='https://twitter.com/OpanyRichard' target='_blank'>
        <Box>
          <TextStyled variant='body1'>Who is Richard Opany?</TextStyled>
          <TextStyled variant='body1'>(aka Goat Guy)</TextStyled>
        </Box>
        <ArrowBox>
          <Image src={arrow} alt='Arrow' width={75} height={75} />
        </ArrowBox>
      </Link>
    </GoatGuyContainer>
  );
};

export default GoatGuy;

const GoatGuyContainer = styled(Box)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'baseline',
    margin: '0 1rem 3rem 0',
    a: {
      textDecoration: 'none',
      color: darkTheme.textPrimary,
    },
    '@media (max-width: 600px)': {
      display: 'grid',
      justifyContent: 'center',
      margin: '1rem 0',
    },
  };
});

const TextStyled = styled(Typography)({
  width: 'fit-content',
  margin: '0 10rem',
  fontFamily: 'SharpGroteskLight',
  '@media (max-width: 600px)': {
    margin: '0',
  },
});

const SImage = styled(Image)({
  position: 'relative',
  bottom: '-2rem',
  left: '35rem',
  '@media (max-width: 600px)': {
    bottom: '0',
    left: '0',
  },
});

const ArrowBox = styled(Box)({
  position: 'relative',
  bottom: '2rem',
  left: '3rem',
  '@media (max-width: 600px)': {
    left: '5rem',
    bottom: '0rem',
  },
});
