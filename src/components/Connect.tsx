import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { ButtonProps } from '@mui/material';

import { truncateValue } from '~/utils';
import { SButton } from '~/components';

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
    <SButton onClick={handleClick} className={address ? 'connected' : ''} {...props}>
      {!address && 'Connect Wallet'}
      {address && truncateValue(address)}
    </SButton>
  );
};
