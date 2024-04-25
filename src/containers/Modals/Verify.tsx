import React, { useState } from 'react';
import { Box, Typography, styled, Button, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';
import { IDKitWidget } from '@worldcoin/idkit';

import BaseModal from '~/components/BaseModal';
import { useCustomTheme, useModal } from '~/hooks';
import { ModalType } from '~/types';
import { getConfig } from '~/config';

const { APP_ID, PROPOSAL_ID } = getConfig();

export enum VerificationLevel {
  Orb = 'orb',
  Device = 'device',
}

export const VerifyModal = () => {
  const { setModalOpen, modalOpen, closeModal } = useModal();
  const [vote, setVote] = useState('for');
  const [thoughts, setThoughts] = useState('');
  const [idKitOpen, setIdKitOpen] = useState(false);

  const handleVoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVote((event.target as HTMLInputElement).value);
  };

  const handleVerify = () => {
    setIdKitOpen(true);
    closeModal();
  };

  const handleIDKitSuccess = () => {
    setIdKitOpen(false);
    setModalOpen(ModalType.LOADING);
  };

  return (
    <>
      <BaseModal type={ModalType.VERIFY} title={'Vote'}>
        <ModalBody>
          <StyledRadioGroup value={vote} onChange={handleVoteChange}>
            <StyledFormControlLabel value='for' control={<Radio />} label='For' />
            <StyledFormControlLabel value='against' control={<Radio />} label='Against' />
            <StyledFormControlLabel value='abstain' control={<Radio />} label='Abstain' />
          </StyledRadioGroup>
          <StyledTextField
            fullWidth
            multiline
            placeholder='Tell the community your thoughts...'
            minRows={1}
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            margin='normal'
          />
          <Typography variant='subtitle1'>Verify and cast your vote</Typography>
          <StyledButton onClick={handleVerify}>Verify</StyledButton>
        </ModalBody>
      </BaseModal>
      {idKitOpen && (
        <IDKitWidget
          app_id={`app_${APP_ID}`}
          action={PROPOSAL_ID.toString()}
          signal='user_value'
          onSuccess={handleIDKitSuccess}
          verification_level={VerificationLevel.Device}
        >
          {({ open }) => {
            // Automatically open the IDKitWidget if idKitOpen state is true
            if (modalOpen === ModalType.NONE) {
              open();
            }
            return <></>; // Render nothing since open() is called automatically
          }}
        </IDKitWidget>
      )}
    </>
  );
};
const ModalBody = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    backgroundColor: currentTheme.backgroundSecondary,
    color: currentTheme.textPrimary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '1rem',
    '& h4': {
      color: currentTheme.textPrimary,
    },
    '& .MuiTypography-subtitle1': {
      color: currentTheme.textSecondary,
    },
    '& .MuiFormControl-root': {
      margin: '1.5rem 0',
      '& .MuiRadio-root': {
        color: currentTheme.textSecondary,
      },
      '& .Mui-checked': {
        color: currentTheme.textPrimary,
      },
    },
    '& .MuiTextField-root': {
      borderColor: currentTheme.textSecondary,
      '& label.Mui-focused': {
        color: currentTheme.textPrimary,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: currentTheme.textSecondary,
        },
        '&:hover fieldset': {
          borderColor: currentTheme.textPrimary,
        },
        '&.Mui-focused fieldset': {
          borderColor: currentTheme.textPrimary,
        },
        '& .MuiInputBase-input': {
          color: currentTheme.textPrimary,
        },
      },
    },
  };
});

const StyledRadioGroup = styled(RadioGroup)({
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
});

const StyledFormControlLabel = styled(FormControlLabel)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    margin: '0.2rem 0',
    padding: '0.5rem 1.5rem',
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
    boxSizing: 'border-box',
  };
});

const StyledTextField = styled(TextField)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    '& .MuiInputBase-inputMultiline': {
      padding: '0.5rem',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: currentTheme.borderRadius,
      border: currentTheme.border,
    },
    '& .MuiOutlinedInput-multiline': {
      maxHeight: '3rem',
      overflow: 'auto',
    },
  };
});

export const StyledButton = styled(Button)(({ theme }) => {
  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '0.5rem 1rem',
    borderRadius: '0.8rem',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1.1rem',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    margin: '0.5rem 0',
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '@media (max-width: 600px)': {
      fontSize: '1.6rem',
    },
  };
});
