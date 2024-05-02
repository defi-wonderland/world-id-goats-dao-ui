import { Typography, styled, CircularProgress } from '@mui/material';

import { BaseModal, ModalButton } from '~/components';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';
import { ModalBody } from './Loading';

export const WalletConfirm = () => {
  return (
    <BaseModal type={ModalType.WALLETCONFIRM}>
      <ModalBody>
        <Spinner size='5rem' variant='indeterminate' thickness={4} />
        <ModalWalletTitle variant='h4'> Please confirm transaction </ModalWalletTitle>
        <ModalButton />
      </ModalBody>
    </BaseModal>
  );
};

export const ModalWalletTitle = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: darkTheme.textPrimary,
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '2rem',
    },
  };
});

export const Spinner = styled(CircularProgress)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    color: darkTheme.primaryColor,
    margin: '2rem 0',
  };
});
