import { Box } from '@mui/material';
import { GradientTitle, ProposalPoll, Voting } from '~/components';

export const VotingCard = () => {
  return (
    <Box>
      <GradientTitle title='Should wonderland donate 250 WLD to Goat Guy?' />
      <Voting />
      <ProposalPoll />
    </Box>
  );
};
