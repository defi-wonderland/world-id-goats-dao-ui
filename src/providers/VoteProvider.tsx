import { createContext, useState } from 'react';

type ContextType = {
  vote: number;
  setVote: (value: number) => void;
};

interface StateProps {
  children: React.ReactElement;
}

export const VoteContext = createContext({} as ContextType);

export const VoteProvider = ({ children }: StateProps) => {
  const [vote, setVote] = useState<number>(1);

  return (
    <VoteContext.Provider
      value={{
        vote,
        setVote,
      }}
    >
      {children}
    </VoteContext.Provider>
  );
};
