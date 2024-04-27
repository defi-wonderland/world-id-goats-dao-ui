import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import goatGuy from '~/assets/goatGuy.svg';

export const GoatGuy = () => {
  return (
    <RightHalfContainer>
      <Image src={goatGuy} alt='Goat Guy' />
      <ArrowStyled fontSize='small' />
      <TextStyled variant='body1'>Who is Richard Opány? (aka Goat Guy)</TextStyled>
    </RightHalfContainer>
  );
};

export default GoatGuy;

const RightHalfContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: '10rem',
  position: 'relative',
  right: 0,
  top: 0,
});

const ArrowStyled = styled(ArrowForwardIosIcon)({
  marginRight: '0.5rem',
});

const TextStyled = styled(Typography)({
  position: 'absolute',
  right: '1rem',
});
