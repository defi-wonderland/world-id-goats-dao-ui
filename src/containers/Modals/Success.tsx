import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';

import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';
import { BaseModal, ModalButton } from '~/components';
import iconCheck from '~/assets/iconcheck.svg';

export const SuccessModal = () => {
  return (
    <BaseModal type={ModalType.SUCCESS}>
      <ModalBody>
        <Image src={iconCheck} alt='Success' />
        <STitle variant='h4'>Vote Registered</STitle>

        <STypography variant='body1'>You can safely close this modal</STypography>
        <ModalButton />
      </ModalBody>
    </BaseModal>
  );
};

const ModalBody = styled(Box)(() => {
  return {
    marginTop: '-3.2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '0.5rem',

    img: {
      width: '7rem',
      height: '7rem',
      background: '#1f3d2b', // fixed color
      padding: '0.4rem',
      borderRadius: '50%',
      border: '1.3rem solid #15281d', // fixed color
      marginBottom: '2rem',
    },
  };
});

const STitle = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: darkTheme.textPrimary,
      fontSize: '1.5rem',
      fontWeight: 500,
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
    },
  };
});
