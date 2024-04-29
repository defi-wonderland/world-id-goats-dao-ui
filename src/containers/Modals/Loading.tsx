import { Box, Typography, styled, CircularProgress } from '@mui/material';

import BaseModal from '~/components/BaseModal';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';

export const LoadingModal = () => {
  return (
    <BaseModal type={ModalType.LOADING} title={'Vote'}>
      <ModalBody>
        <CircularProgress size='3rem' variant='indeterminate' thickness={4} />
        <STitle variant='h4'> Casting your vote... </STitle>
        <STypography variant='body1'>You can safely close this modal</STypography>
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

const STypography = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: darkTheme.textSecondary,
      fontSize: '1rem',
      fontWeight: 400,
    },
  };
});
