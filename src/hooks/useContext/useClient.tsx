import { useContext } from 'react';
import { ClientContext } from '~/providers/ClientProvider';

export const useClient = () => {
  const context = useContext(ClientContext);

  if (context === undefined) {
    throw new Error('useCustomClient must be used within a StateProvider');
  }

  return context;
};
