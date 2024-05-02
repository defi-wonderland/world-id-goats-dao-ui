import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';

import tweet from '../assets/tweet.png';

export const TweetCard = () => {
  return (
    <TweetContainer>
      <SText> Thanks to Worldcoin, Richard was able to buy his 🐐 </SText>
      <SText>
        After that, he went viral on Twitter, when he named his goat Sam (after Sam Altman, founder of Worldcoin)
      </SText>
      <SText>Now we want to help him get even more goats! </SText>

      <SBox>
        <Tweet src={tweet} alt='tweet' />
      </SBox>
    </TweetContainer>
  );
};

const TweetContainer = styled(Box)({
  display: 'grid',
  justifyContent: 'center',
  width: '38rem',
  '@media (max-width: 600px)': {
    width: '20rem',
    margin: 'auto',
  },
});

const SText = styled(Typography)({
  textAlign: 'center',
  lineHeight: '2.5rem',
  fontFamily: 'SharpGroteskLight',
  fontSize: '1.5rem',
});

const SBox = styled(Box)({
  zIndex: 100,
  display: 'grid',
  justifyContent: 'center',
  position: 'relative',
});

const Tweet = styled(Image)({
  borderRadius: '1rem',
  width: '30rem',
  height: '40rem',
});
