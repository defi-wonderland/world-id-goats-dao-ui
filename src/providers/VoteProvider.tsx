import { createContext, useState } from 'react';

type ContextType = {
  vote: number;
  setVote: (value: number) => void;
  txDone: boolean;
  setTxDone: (value: boolean) => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const VoteContext = createContext({} as ContextType);

export const VoteProvider = ({ children }: StateProps) => {
  const [vote, setVote] = useState<number>(1);
  const [txDone, setTxDone] = useState<boolean>(false);

  return (
    <VoteContext.Provider
      value={{
        vote,
        setVote,
        txDone,
        setTxDone,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
