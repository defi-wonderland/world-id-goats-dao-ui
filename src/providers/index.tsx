import type { ReactNode } from 'react';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { WalletProvider } from './WalletProvider';
import { ModalProvider } from './ModalProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <StateProvider>
          <WalletProvider>{children}</WalletProvider>
        </StateProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};
