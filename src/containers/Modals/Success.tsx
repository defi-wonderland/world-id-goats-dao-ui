import { Box, Typography, styled } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { useCustomTheme, useModal } from '~/hooks';
import { ModalType } from '~/types';
import { SButton, BaseModal } from '~/components';

export const SuccessModal = () => {
  const { setModalOpen } = useModal();

  return (
    <BaseModal type={ModalType.SUCCESS} title={'SUCCESSFUL VOTE'}>
      <ModalBody>
        <SCheckIcon />
        <STitle variant='h4'> Vote Succeed! </STitle>

        <STypography variant='body1'>You can safely close this modal</STypography>
        <SButton onClick={() => setModalOpen(ModalType.NONE)}>Confirm</SButton>
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
    margin: 'auto',
    gap: '0.7rem',
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

const STypography = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: darkTheme.textPrimary,
      fontSize: '1rem',
      fontWeight: 400,
    },
  };
});

const SCheckIcon = styled(CheckCircle)({
  fontSize: '5rem',
  color: '#4aa16c',
});
