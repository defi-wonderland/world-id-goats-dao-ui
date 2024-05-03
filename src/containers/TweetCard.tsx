import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import tweet from '../assets/tweet.png';

export const TweetCard = () => {
  return (
    <TweetContainer>
      <SText>Thanks to Worldcoin, Richard was able to buy his 🐐</SText>

      <SText>
        After that, he went viral on Twitter, when he named his goat Sam (after Sam Altman, founder of Worldcoin)
      </SText>

      <SText>Now we want to help him get even more goats! </SText>

      <SBox>
        <Link href='https://twitter.com/OpanyRichard/status/1774728635145965672' target='_blank'>
          <Tweet src={tweet} alt='tweet' />
        </Link>
      </SBox>
    </TweetContainer>
  );
};

const TweetContainer = styled(Box)({
  display: 'grid',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  '@media (max-width: 600px)': {
    width: '20rem',
    margin: '10rem 0 0 0',
  },
});

const SText = styled(Typography)({
  textAlign: 'center',
  lineHeight: 'normal',
  fontSize: '2.125rem',
  fontWeight: 500,
  '@media (max-width: 600px)': {
    width: '20rem',
    margin: 'auto',
  },
});

const SBox = styled(Box)({
  zIndex: 100,
  display: 'grid',
  justifyContent: 'center',
  position: 'relative',
  margin: '1.5rem 0 0 0',
});

const Tweet = styled(Image)({
  borderRadius: '1rem',
  width: '43rem',
  height: 'auto',
  '@media (max-width: 600px)': {
    width: '20rem',
    height: '26rem',
    margin: 'auto',
  },
});
