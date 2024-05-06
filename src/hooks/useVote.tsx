import { useContext } from 'react';
import { VoteContext } from '~/providers/VoteProvider';

export const useVote = () => {
  const context = useContext(VoteContext);

  if (context === undefined) {
    throw new Error('useVote must be used within a VoteProvider');
  }

  return context;
};
