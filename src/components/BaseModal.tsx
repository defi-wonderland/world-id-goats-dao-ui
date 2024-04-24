import * as React from 'react';
import clsx from 'clsx';
import { Modal, styled, Box, Typography, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useCustomTheme, useModal } from '~/hooks';
import { ModalType } from '~/types';

interface BaseModalProps {
  children: React.ReactNode;
  type: ModalType;
  title?: string;
  fixedHeight?: boolean;
  image?: string;
}

const BaseModal = ({ children, type, title, fixedHeight }: BaseModalProps) => {
  const { modalOpen, closeModal } = useModal();
  return (
    <StyledModal open={type === modalOpen} onClose={closeModal} slots={{ backdrop: StyledBackdrop }}>
      <SModal className={fixedHeight ? 'big-modal' : ''}>
        <ModalHeader>
          <Box>{title && <Title variant='h2'>{title}</Title>}</Box>
          <IconButton onClick={closeModal} className='close-button'>
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        <Divider />
        {children}
      </SModal>
    </StyledModal>
  );
};

export default BaseModal;

export const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean; className: string }>((props, ref) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});

Backdrop.displayName = 'Backdrop';

export const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 200;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 600px) {
    padding: 0rem 1.6rem;
  }
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(0.05rem);
  -webkit-tap-highlight-color: transparent;
`;

export const SModal = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '28rem',
    minHeight: '25rem',
    maxHeight: '40rem',
    borderRadius: currentTheme.borderRadius,
    backgroundColor: currentTheme.backgroundSecondary,
    border: currentTheme.border,
    display: 'flex',
    padding: '2rem 3.2rem 3.2rem 3.2rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',

    '&.big-modal': {
      minHeight: '38.6rem',
    },

    '@media (max-width: 600px)': {
      minWidth: '100%',
      margin: '0rem 1.6rem',
      padding: '1.6rem 2rem 3.2rem',
    },
  };
});

export const ModalHeader = styled(Box)(() => {
  return {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    div: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '0.8rem',
    },
    '.close-button': {
      padding: '0.4rem',
      marginRight: '-0.4rem',
      marginLeft: 'auto',
    },

    '@media (max-width: 600px)': {
      h2: {
        fontSize: '1.8rem',
      },
    },
  };
});

const Title = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '1rem',
    alignItems: 'center',
    fontWeight: 800,
    color: currentTheme.textSecondary,
  };
});
