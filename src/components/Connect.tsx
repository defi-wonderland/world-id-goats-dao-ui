import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { ButtonProps, Button, styled } from '@mui/material';

import { truncateValue } from '~/utils';
import { useCustomTheme } from '~/hooks';

export const Connect = ({ ...props }: ButtonProps) => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  const handleClick = () => {
    if (address && openAccountModal) {
      openAccountModal();
    } else if (openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <ConnectButton onClick={handleClick} className={address ? 'connected' : ''} {...props}>
      {!address && 'Connect Wallet'}
      {address && truncateValue(address)}
    </ConnectButton>
  );
};

const ConnectButton = styled(Button)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    padding: '0.625rem 1rem',
    borderRadius: '0.75rem',
    color: darkTheme.textPrimary,
    backgroundColor: darkTheme.backgroundButton,
    boxShadow: '0 0.1rem 0.2rem 0 rgba(16, 24, 40, 0.05)',
    fontSize: '1.2rem',
    fontWeight: 500,
    textTransform: 'capitalize',

    '&:hover': {
      backgroundColor: darkTheme.backgroundButtonSecondary,
    },

    '&.connected': {
      color: darkTheme.textPrimary,
      backgroundColor: darkTheme.backgroundButton,
    },

    '&.connected:hover': {
      backgroundColor: darkTheme.backgroundButtonSecondary,
    },

    '@media (max-width: 720px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 400px)': {
      fontSize: '0.7rem',
    },
  };
});
