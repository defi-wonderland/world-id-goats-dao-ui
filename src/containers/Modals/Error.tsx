import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';

import BaseModal from '~/components/BaseModal';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';
import errorIcon from '~/assets/icons/x-circle.svg';

export const ErrorModal = () => {
  return (
    <BaseModal type={ModalType.ERROR} title={'Error'}>
      <ModalBody>
        <Image src={errorIcon} alt='Error' width={100} height={100} />
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
  const { currentTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: currentTheme.textPrimary,
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  };
});
