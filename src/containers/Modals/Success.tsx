import { Box, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import BaseModal from '~/components/BaseModal';
import { useCustomTheme } from '~/hooks';
import { ModalType } from '~/types';
import { truncateValue } from '~/utils/misc';
import successIcon from '~/assets/icons/check-circle.svg';
import openLinkIcon from '~/assets/icons/open-link.svg';

export const SuccessModal = () => {
  const hash = '0x';

  return (
    <BaseModal type={ModalType.SUCCESS} title={'Vote'}>
      <ModalBody>
        <Image src={successIcon} alt='Success' width={100} height={100} />
        <STitle variant='h4'> Vote Succeed! </STitle>
        {hash && (
          <StyledLink href={`https://optimistic.etherscan.io//${hash}`} target='_blank'>
            {truncateValue(hash)}
            <Image src={openLinkIcon} alt='Open transaction in block explorer' />
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

const STypography = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    '&&': {
      display: 'block',
      color: currentTheme.textSecondary,
      fontSize: '1rem',
      fontWeight: 400,
    },
  };
});

const StyledLink = styled(Link)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    textDecoration: 'none',
    color: currentTheme.primaryColor,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '&:hover': {
      textDecoration: 'underline',
      color: currentTheme.primaryColor,
    },
  };
});
