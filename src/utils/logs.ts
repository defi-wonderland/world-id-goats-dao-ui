interface LogEntry {
  id: `0x${string}`;
  proof: {
    merkle_root: string;
    nullifier_hash: string;
    proof: string;
  };
  error?: string;
}

const logs: LogEntry[] = [];

export const addLog = (entry: LogEntry) => {
  logs.push({ ...entry });
  console.log('Log added:', entry);
};

export const getLogs = (): LogEntry[] => {
  return logs;
};
