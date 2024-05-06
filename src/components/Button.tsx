import { Button, styled } from '@mui/material';

import { useCustomTheme, useModal } from '~/hooks';
import { ModalType } from '~/types';

export const ModalButton = () => {
  const { setModalOpen } = useModal();
  return <MButton onClick={() => setModalOpen(ModalType.NONE)}>Close</MButton>;
};

const MButton = styled(Button)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    padding: '0.625rem 1rem',
    borderRadius: '0.75rem',
    color: darkTheme.textPrimary,
    backgroundColor: darkTheme.backgroundButton,
    boxShadow: '0 0.1rem 0.2rem 0 rgba(16, 24, 40, 0.05)',
    fontSize: '1.2rem',
    fontWeight: 500,
    textTransform: 'capitalize',
    width: '100%',
  };
});
