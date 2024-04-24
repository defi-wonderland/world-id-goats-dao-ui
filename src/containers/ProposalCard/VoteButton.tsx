import { Button, styled } from '@mui/material';

import { useModal, useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';

export const VoteButton = () => {
  const { setModalOpen } = useModal();
  const handleVote = () => {
    setModalOpen(ModalType.VERIFY);
  };
  return (
    <StyledButton variant='contained' color='primary' onClick={handleVote}>
      Vote onchain
    </StyledButton>
  );
};

export const StyledButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    borderRadius: '0.8rem',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',

    '&:disabled': {
      fontWeight: 500,
      backgroundColor: currentTheme.disabledColor,
      borderColor: currentTheme.disabledColor,
      color: '#fff',
    },

    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
  };
});
