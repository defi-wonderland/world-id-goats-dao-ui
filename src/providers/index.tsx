import type { ReactNode } from 'react';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { WalletProvider } from './WalletProvider';
import { ModalProvider } from './ModalProvider';
import { VoteProvider } from './VoteProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <StateProvider>
          <VoteProvider>
            <WalletProvider>{children}</WalletProvider>
          </VoteProvider>
        </StateProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};
