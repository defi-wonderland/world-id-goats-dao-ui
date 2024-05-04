import { Box, Typography, styled, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import arrow from '~/assets/arrow.svg';
import goatGuy from '~/assets/goatGuy.svg';
import { useCustomTheme } from '~/hooks';

export const GoatGuy = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <>
      {!isMobile && (
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
      )}
      {isMobile && (
        <GoatGuyContainerMobile>
          <SImageMobile src={goatGuy} alt='Goat Guy' width={120} height={120} />

          <Box>
            <Link href='https://twitter.com/OpanyRichard' target='_blank'>
              <Box>
                <Typography variant='body1'>Who is Richard Opany?</Typography>
                <Typography variant='body1'>(a.k.a Goat Guy)</Typography>
              </Box>
            </Link>

            <ArrowBoxMobile>
              <Image src={arrow} alt='Arrow' width={55} height={55} />
            </ArrowBoxMobile>
          </Box>
        </GoatGuyContainerMobile>
      )}
    </>
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
  };
});

const TextStyled = styled(Typography)({
  '@media (max-width: 720px)': {},
});

const SImage = styled(Image)({
  transform: 'rotate(10deg)',
  borderRadius: '1.125rem',
});

const ArrowBox = styled(Box)({
  marginTop: '0rem',
});

//Mobile
const GoatGuyContainerMobile = styled(Box)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    height: 'fit-content',
    gap: '1rem',
    margin: '5rem 0 0 0',
    a: {
      textDecoration: 'none',
      color: darkTheme.textPrimary,
    },
    '@media (max-width: 720px)': {
      margin: '5rem 0 0 0',
    },
    '@media (max-width: 600px)': {
      margin: '2rem 0 0 0',
    },
    '@media (max-width: 420px)': {
      margin: '5rem 0 0 0',
    },
  };
});

const SImageMobile = styled(Image)(() => {
  return {
    borderRadius: '1.125rem',
  };
});

const ArrowBoxMobile = styled(Box)({
  margin: '-1rem 0 0 10rem',
});
