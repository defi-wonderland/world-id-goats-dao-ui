import { Box } from '@mui/material';
import { ProposalPoll, Voting } from '~/components';

export const VotingCard = () => {
  return (
    <Box>
      <Voting />
      <ProposalPoll />
    </Box>
  );
};
