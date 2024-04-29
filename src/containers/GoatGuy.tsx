import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import goatGuy from '~/assets/goatGuy.svg';

export const GoatGuy = () => {
  return (
    <GoatGuyContainer>
      <ArrowBox>
        <svg xmlns='http://www.w3.org/2000/svg' width='76' height='115' viewBox='0 0 76 115' fill='none'>
          <path
            d='M0.487499 114.76L39.7676 105.252L11.8933 75.9883L0.487499 114.76ZM69.0574 0.126378C61.8719 39.1557 38.7239 70.9816 20.7119 90.6734L25.877 95.398C44.2826 75.2758 68.4142 42.2805 75.9417 1.39382L69.0574 0.126378Z'
            fill='textPrimaryOpposite'
          />
        </svg>
      </ArrowBox>
      <Box>
        <TextStyled variant='body1'>Who is Richard Opany?</TextStyled>
        <TextStyled variant='body1'>(aka Goat Guy)</TextStyled>
      </Box>
      <Image src={goatGuy} alt='Goat Guy' />
    </GoatGuyContainer>
  );
};

export default GoatGuy;

const GoatGuyContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  height: '20rem',
  width: '100%',
  alignItems: 'baseline',
});

const TextStyled = styled(Typography)({
  width: 'fit-content',
  margin: '0 1rem',
});

const ArrowBox = styled(Box)({
  position: 'relative',
  bottom: '-4rem',
});
