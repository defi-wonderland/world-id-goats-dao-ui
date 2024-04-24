import type { ReactNode } from 'react';

import { StateProvider } from './StateProvider';
import { ThemeProvider } from './ThemeProvider';
import { WalletProvider } from './WalletProvider';
import { ModalProvider } from './ModalProvider';
import { ClientProvider } from './ClientProvider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <StateProvider>
          <ClientProvider>
            <WalletProvider>{children}</WalletProvider>
          </ClientProvider>
        </StateProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};
