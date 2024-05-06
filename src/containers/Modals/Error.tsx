import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';

import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';
import { BaseModal, ModalButton } from '~/components';
import iconError from '~/assets/iconerror.svg';

export const ErrorModal = () => {
  return (
    <BaseModal type={ModalType.ERROR}>
      <ModalBody>
        <Image src={iconError} alt='Error' width={100} height={100} />
        <STitle variant='h4'>Something went wrong</STitle>

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
      background: '#45110b', // fixed color
      padding: '0.4rem',
      borderRadius: '50%',
      border: '1.3rem solid #30110d', // fixed color
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
      fontWeight: 400,
      '@media (max-width: 720px)': {
        fontSize: '0.9rem',
      },
    },
  };
});
