import { useCallback } from 'react';
import { Box, styled, Button } from '@mui/material';
import { IDKitWidget, useIDKit } from '@worldcoin/idkit';
import { usePublicClient } from 'wagmi';
import { useAccount } from 'wagmi';
import { decodeAbiParameters, encodePacked, Hex, parseAbiParameters } from 'viem';
import JSConfetti from 'js-confetti';

import { useContract, useCustomTheme, useModal, useVote } from '~/hooks';
import { ModalType } from '~/types';
import { getConfig } from '~/config';

//APP_ID for production
const { APP_ID, PROPOSAL_ID } = getConfig();

interface ISuccessResult {
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
}

export enum VerificationLevel {
  Orb = 'orb',
  Device = 'device',
}

export const Voting = () => {
  const { setModalOpen } = useModal();
  const { vote, setVote } = useVote();
  const { setTxHash, castVote, simulateCheckValidity } = useContract();
  const publicClient = usePublicClient();
  const { isConnected } = useAccount();
  const { setOpen } = useIDKit();
  const thoughts = `Voting for: ${vote}`;

  const handleVote = (support: number) => {
    setVote(support);
    setOpen(true);
  };

  const onSuccess = useCallback(
    async (result: ISuccessResult) => {
      try {
        // Get the proof data
        console.log(result);
        const { merkle_root, nullifier_hash, proof } = result;

        const [decodedMerfleRoot] = decodeAbiParameters(parseAbiParameters('uint256 merkle_root'), merkle_root as Hex);
        const [decodedNullifierHash] = decodeAbiParameters(
          parseAbiParameters('uint256 nullifier_hash'),
          nullifier_hash as Hex,
        );
        const [decodedProof] = decodeAbiParameters(parseAbiParameters('uint256[8] proof'), proof as Hex);

        const proofData = encodePacked(
          ['uint256', 'uint256', 'uint256[8]'],
          [decodedMerfleRoot, decodedNullifierHash, decodedProof],
        );

        //PRODUCTION
        const validate = await simulateCheckValidity(BigInt(PROPOSAL_ID), vote, proofData);

        if (validate) {
          const hash = await castVote(BigInt(PROPOSAL_ID), vote, thoughts, proofData);
          if (!hash) throw new Error('No hash returned');
          setModalOpen(ModalType.LOADING);
          if (!publicClient) return;
          const receipt = await publicClient.waitForTransactionReceipt({
            hash: hash as Hex,
          });
          setTxHash(receipt.transactionHash);
          if (receipt) {
            setModalOpen(ModalType.SUCCESS);
            if (vote === 1) {
              const jsConfetti = new JSConfetti();
              jsConfetti?.addConfetti({
                emojis: ['🐐', '🌈', '✨'],
                emojiSize: 100,
                confettiNumber: 85,
              });
            }
          }
        } else {
          setModalOpen(ModalType.ERROR);
        }
      } catch (error) {
        console.error('Cast failed:', error);
        setModalOpen(ModalType.ERROR);
      }
    },
    [simulateCheckValidity, vote, castVote, thoughts, setModalOpen, publicClient, setTxHash],
  );

  return (
    <>
      <SBox>
        <SButtonFor onClick={() => handleVote(1)} disabled={!isConnected}>
          🐐 For 🐐
        </SButtonFor>
        <SButton onClick={() => handleVote(2)} disabled={!isConnected}>
          Against
        </SButton>
        <SButton onClick={() => handleVote(0)} disabled={!isConnected}>
          Abstain
        </SButton>
      </SBox>

      <IDKitWidget
        app_id={`app_${APP_ID}`}
        action={PROPOSAL_ID?.toString()}
        signal={vote?.toString()}
        onSuccess={onSuccess}
        //Device verification
        verification_level={VerificationLevel.Device}
      />
    </>
  );
};

export const SBox = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: '2rem 0',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      gap: '0rem',
      margin: '0rem',
    },
  };
});

export const SButton = styled(Button)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    padding: '0.2rem 2.75rem',
    fontWeight: 600,
    fontSize: '1.2rem',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    margin: '0.5rem',
    width: 'auto',
    border: `1px solid ${darkTheme.textPrimary}`,
    color: darkTheme.textPrimary,
    borderRadius: '2rem',
    gap: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3rem',
    lineHeigth: '0.9rem',
    '&.Mui-disabled': {
      border: `1px solid ${darkTheme.disabledColor}`,
    },
    '@media (max-width: 600px)': {
      fontSize: '0.75rem',
      padding: '0.2rem 1.75rem',
      letterSpacing: '0.125rem',
    },
  };
});

export const SButtonFor = styled(Button)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    padding: '0.1rem 2.7rem',
    fontWeight: 800,
    fontSize: '1.75rem',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    margin: '0.5rem',
    width: 'auto',
    color: darkTheme.textPrimary,
    borderRadius: '2rem',
    letterSpacing: '0.3rem',
    gap: '0.5rem',
    textTransform: 'uppercase',
    background: 'linear-gradient(90deg, #FCCC50 0%, #C55FA3 42.5%, #935EB1 71%, #625CBF 100%)',
    lineHeigth: '0.9rem',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      padding: '0.2rem 1rem',
      gap: '0rem',
      margin: '0rem',
    },
  };
});
