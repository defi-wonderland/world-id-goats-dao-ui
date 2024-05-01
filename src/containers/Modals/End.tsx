import { Typography } from '@mui/material';

import { BaseModal } from '~/components';
import { ModalBody, STitle } from '~/containers';
import { ModalType } from '~/types';

export const End = () => {
  return (
    <BaseModal type={ModalType.END} title='GOAT'>
      <ModalBody>
        <Typography> 🐐 </Typography>
        <STitle variant='h4'> THANK YOU FOR VOTING </STitle>
        <Typography> 🐐 </Typography>
      </ModalBody>
    </BaseModal>
  );
};
