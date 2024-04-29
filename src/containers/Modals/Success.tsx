import Link from 'next/link';
import { Box, Typography, styled } from '@mui/material';
import { CheckCircle, OpenInNew } from '@mui/icons-material';

import BaseModal from '~/components/BaseModal';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';
import { truncateValue } from '~/utils';

export const SuccessModal = () => {
  const hash = '0x';

  return (
    <BaseModal type={ModalType.SUCCESS} title={'Vote'}>
      <ModalBody>
        <SCheckIcon />
        <STitle variant='h4'> Vote Succeed! </STitle>
        {hash && (
          <StyledLink href={`https://optimistic.etherscan.io/tx/${hash}`} target='_blank'>
            {truncateValue(hash)}
            <OpenInNew />
          </StyledLink>
        )}
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
      color: darkTheme.textSecondary,
      fontSize: '1rem',
      fontWeight: 400,
    },
  };
});

const StyledLink = styled(Link)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    textDecoration: 'none',
    color: darkTheme.textTertiary,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 800,
    '& svg': {
      fontSize: '1.2rem',
      color: 'inherit',
    },
    '&:hover': {
      textDecoration: 'underline',
      color: darkTheme.textTertiary,
    },
  };
});

const SCheckIcon = styled(CheckCircle)({
  fontSize: '5rem',
  color: '#4aa16c',
});
