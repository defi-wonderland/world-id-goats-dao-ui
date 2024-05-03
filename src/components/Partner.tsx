import { Box, styled, Typography } from '@mui/material';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';

import { useCustomTheme } from '~/hooks';
import Image from 'next/image';
import wonderland from '../assets/wonderland.svg';
import worldId from '../assets/worldId.svg';

export const Partner = () => {
  return (
    <PartnerContainer>
      <SText>
        Made with <SHeart /> by
        <Link href='https://defi.sucks/' target='_blank'>
          <WonderlandImg src={wonderland} alt='wonderland' width={1} height={1} />
        </Link>
      </SText>

      <SCircleIcon />

      <SText>
        Powered by
        <Link href='https://worldcoin.org/world-id' target='_blank'>
          <WorldIdImg src={worldId} alt='worldId' />
        </Link>
      </SText>
    </PartnerContainer>
  );
};

export const PartnerContainer = styled(Box)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    a: {
      textDecoration: 'none',
      color: darkTheme.textPrimary,
      display: 'flex',
      alignItems: 'center',
    },
    '@media (max-width: 720px)': {
      display: 'grid',
    },
  };
});

export const SText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1rem',
  '@media (max-width: 720px)': {
    fontSize: '0.5rem',
  },
});

export const SCircleIcon = styled(CircleIcon)({
  fontSize: '0.5rem',
  margin: '0 0.75rem',
  '@media (max-width: 720px)': {
    display: 'none',
  },
});

export const SHeart = styled(FavoriteIcon)({
  fontSize: '1rem',
  margin: '0 0.25rem',
  '@media (max-width: 720px)': {
    fontSize: '0.5rem',
  },
});

const WonderlandImg = styled(Image)({
  display: 'flex',
  alignItems: 'center',
  height: '1rem',
  width: 'auto',
  '@media (max-width: 720px)': {
    height: '0.35rem',
    width: 'auto',
  },
});

const WorldIdImg = styled(Image)({
  display: 'flex',
  alignItems: 'center',
  height: '1.75rem',
  width: 'auto',
  '@media (max-width: 720px)': {
    height: '0.55rem',
    width: 'auto',
  },
});
