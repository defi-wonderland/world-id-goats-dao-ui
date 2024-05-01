import { Box, Typography, styled } from '@mui/material';
import { Cancel } from '@mui/icons-material';

import { BaseModal } from '~/components';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';

export const ErrorModal = () => {
  return (
    <BaseModal type={ModalType.ERROR} title='ERROR'>
      <ModalBody>
        <SErrorIcon />
        <STitle variant='h4'> Something went wrong</STitle>
      </ModalBody>
    </BaseModal>
  );
};

const ModalBody = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '4rem',
    margin: 'auto',
  };
});

const STitle = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: darkTheme.textPrimary,
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  };
});

const SErrorIcon = styled(Cancel)({
  fontSize: '5rem',
  color: '#D92D20',
});
