import { BaseModal } from '~/components';
import { ModalBody, SIcon, STitle } from '~/containers';
import { ModalType } from '~/types';

export const WalletConfirm = () => {
  return (
    <BaseModal type={ModalType.WALLETCONFIRM}>
      <ModalBody>
        <SIcon size='3rem' variant='indeterminate' thickness={4} />
        <STitle variant='h4'> Please confirm the transaction... </STitle>
      </ModalBody>
    </BaseModal>
  );
};
