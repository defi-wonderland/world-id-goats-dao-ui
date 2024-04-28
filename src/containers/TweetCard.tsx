import { Box, Typography, styled } from '@mui/material';
import { Tweet } from 'react-tweet';

export const TweetCard = () => {
  return (
    <Box>
      <Typography></Typography>
      <SBox className='dark'>
        <Tweet id='1774728635145965672' />
        <Tweet id='1775775458598306029' />
      </SBox>
    </Box>
  );
};

const SBox = styled(Box)({
  zIndex: 100,
  position: 'relative',
});
