import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';

import arrow from '~/assets/arrow.svg';
import goatGuy from '~/assets/goatGuy.svg';

export const GoatGuy = () => {
  return (
    <GoatGuyContainer>
      <ArrowBox>
        <Image src={arrow} alt='Arrow' width={100} height={100} />
      </ArrowBox>
      <Box>
        <TextStyled variant='body1'>Who is Richard Opany?</TextStyled>
        <TextStyled variant='body1'>(aka Goat Guy)</TextStyled>
      </Box>
      <Image src={goatGuy} alt='Goat Guy' width={175} height={175} />
    </GoatGuyContainer>
  );
};

export default GoatGuy;

const GoatGuyContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  height: 'max-content',
  width: '100%',
  alignItems: 'baseline',
  '@media (max-width: 600px)': {
    display: 'grid',
    justifyContent: 'center',
  },
});

const TextStyled = styled(Typography)({
  width: 'max-content',
  margin: '0 1rem',
  '@media (max-width: 600px)': {
    margin: '0',
  },
});

const ArrowBox = styled(Box)({
  position: 'absolute',
  bottom: '-20rem',
  right: '35rem',
  '@media (max-width: 600px)': {
    position: 'relative',
  },
});
