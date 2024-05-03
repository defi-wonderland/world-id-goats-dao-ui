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
          <TextStyled variant='body1'>(a.k.a Goat Guy)</TextStyled>
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
    position: 'relative',
    top: '-19.5rem',
    left: '45rem',
    justifyContent: 'flex-end',
    height: '1rem',
    width: '100%',
    alignItems: 'baseline',
    margin: '0 1rem -3rem 0',
    a: {
      textDecoration: 'none',
      color: darkTheme.textPrimary,
    },
    '@media (max-width: 600px)': {
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      left: '0',
    },
  };
});

const TextStyled = styled(Typography)({
  width: 'fit-content',
  fontSize: '1rem',
  position: 'relative',
  bottom: '-3rem',
  right: '5rem',
  '@media (max-width: 600px)': {
    fontSize: '0.75rem',
    top: '0',
    left: '0',
  },
});

const SImage = styled(Image)({
  position: 'relative',
  transform: 'rotate(10deg)',
  borderRadius: '1.125rem',
  bottom: '-10rem',
  right: '-10rem',
  '@media (max-width: 600px)': {
    transform: 'rotate(0deg)',
    display: 'flex',
    justifySelf: 'center',
    width: '8rem',
    height: '8rem',
    top: '0',
    left: '0',
  },
});

const ArrowBox = styled(Box)({
  position: 'relative',
  bottom: '1.5rem',
  right: '10rem',
  '@media (max-width: 600px)': {
    top: '-1rem',
    left: '5rem',
    img: {
      width: '8rem',
      height: '3rem',
    },
  },
});
