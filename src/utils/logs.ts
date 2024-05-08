interface LogEntry {
  id: `0x${string}`;
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
  error?: string;
}

export async function sendLog(data: LogEntry) {
  try {
    const response = await fetch('/api/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send log data');
    }
  } catch (error) {
    console.error('Failed to send log:', error);
  }
}
