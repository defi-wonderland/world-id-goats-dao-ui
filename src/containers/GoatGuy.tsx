import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import arrow from '~/assets/arrow.svg';
import goatGuy from '~/assets/goatGuy.svg';
import { useCustomTheme } from '~/hooks';

export const GoatGuy = () => {
  return (
    <GoatGuyContainer>
      <ArrowBox>
        <Image src={arrow} alt='Arrow' width={75} height={75} />
      </ArrowBox>

      <Link href='https://twitter.com/OpanyRichard' target='_blank'>
        <Box>
          <TextStyled variant='body1'>Who is Richard Opany?</TextStyled>
          <TextStyled variant='body1'>(a.k.a Goat Guy)</TextStyled>
        </Box>
      </Link>

      <SImage src={goatGuy} alt='Goat Guy' width={150} height={150} />
    </GoatGuyContainer>
  );
};

export default GoatGuy;

const GoatGuyContainer = styled(Box)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    position: 'absolute',
    padding: '0 6rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    height: 'auto',
    bottom: '-2rem',
    a: {
      textDecoration: 'none',
      color: darkTheme.textPrimary,
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      gap: '1rem',
      padding: '0 2rem',
      bottom: '-8rem',
    },
  };
});

const TextStyled = styled(Typography)({
  '@media (max-width: 720px)': {},
});

const SImage = styled(Image)({
  transform: 'rotate(10deg)',
  borderRadius: '1.125rem',
  '@media (max-width: 600px)': {
    transform: 'rotate(0deg)',
    display: 'grid',
    justifySelf: 'center',
    width: '8rem',
    height: '8rem',
    margin: '0 2rem',
  },
});

const ArrowBox = styled(Box)({
  marginTop: '0rem',
  '@media (max-width: 600px)': {
    margin: '0 0 0 5rem',
    img: {
      width: '8rem',
      height: '3rem',
    },
  },
});
