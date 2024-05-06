import { Box, Typography, styled, CircularProgress } from '@mui/material';

import { BaseModal, ModalButton } from '~/components';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';

export const LoadingModal = () => {
  return (
    <BaseModal type={ModalType.LOADING}>
      <ModalBody>
        <SIcon size='5rem' variant='indeterminate' thickness={4} />
        <STitle variant='h4'>Casting your vote 🐐 ...</STitle>

        <STypography variant='body1'>You can safely close this modal</STypography>
        <ModalButton />
      </ModalBody>
    </BaseModal>
  );
};

export const ModalBody = styled(Box)(() => {
  return {
    marginTop: '-3.2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '0.5rem',
  };
});

export const STitle = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: darkTheme.textPrimary,
      fontSize: '1.5rem',
      fontWeight: 500,
      '@media (max-width: 720px)': {
        fontSize: '1.3rem',
        margin: '0.5rem 0',
      },
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
      fontWeight: 300,
      '@media (max-width: 720px)': {
        fontSize: '0.9rem',
      },
    },
  };
});

export const SIcon = styled(CircularProgress)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    color: darkTheme.primaryColor,
    margin: '2rem 0',
  };
});
