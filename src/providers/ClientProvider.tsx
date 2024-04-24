import { createContext, useContext, useMemo } from 'react';
import { useAccount } from 'wagmi';
import { createWalletClient, createPublicClient, custom, http } from 'viem';
import { optimism, mainnet } from 'viem/chains';

export const ClientContext = createContext(null);

interface StateProps {
  children: React.ReactElement;
}

export const ClientProvider = ({ children }: StateProps) => {
  const { address } = useAccount();

  const walletClient = useMemo(() => {
    if (address && typeof window !== 'undefined' && window.ethereum) {
      return createWalletClient({
        account: address,
        chain: optimism,
        transport: custom(window.ethereum),
      });
    }
  }, [address]);

  const publicClient = useMemo(() => {
    return createPublicClient({
      chain: mainnet,
      transport: http('https://opt-mainnet.g.alchemy.com/v2/ZU99hje9YBJNX05j2vuYNfH8Wq6CrPKP'),
    });
  }, []);

  const value = { walletClient, publicClient };

  return <ClientContext.Provider value={value}>{children}</ClientContext.Provider>;
};

export const useClients = () => useContext(ClientContext);
