import { Box, Typography, styled } from '@mui/material';
import { Tweet } from 'react-tweet';

export const TweetCard = () => {
  return (
    <TweetContainer>
      <SText>
        Thanks to Worldcoin, Richard was able to buy his first 🐐 After that, he went viral on Twitter Now we want to
        help him get more goats
      </SText>
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
});

const SText = styled(Typography)({
  width: '35rem',
});

const SBox = styled(Box)({
  zIndex: 100,
  position: 'relative',
});
