import { Box, Typography, styled } from '@mui/material';
import { Tweet } from 'react-tweet';

export const TweetCard = () => {
  return (
    <TweetContainer>
      <SText> Thanks to Worldcoin, Richard was able to buy his 🐐 </SText>
      <SText>
        After that, he went viral on Twitter, when he named his goat Sam (after Sam Altman, founder of Worldcoin)
      </SText>
      <SText>Now we want to help him get even more goats! </SText>

      <SBox className='dark'>
        <Tweet id='1774728635145965672' />
        <Tweet id='1775775458598306029' />
      </SBox>
    </TweetContainer>
  );
};

const TweetContainer = styled(Box)({
  display: 'block',
  justifyContent: 'center',
  width: '35rem',
  '@media (max-width: 600px)': {
    width: '20rem',
    margin: 'auto',
  },
});

const SText = styled(Typography)({
  textAlign: 'center',
  lineHeight: '2rem',
  fontFamily: 'SharpGroteskLight',
  fontSize: '1.5rem',
});

const SBox = styled(Box)({
  zIndex: 100,
  position: 'relative',
  justifyContent: 'center',
});
