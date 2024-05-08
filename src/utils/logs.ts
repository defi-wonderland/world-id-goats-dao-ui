interface LogEntry {
  id: `0x${string}`;
  proof: {
    merkle_root: string;
    nullifier_hash: string;
    proof: string;
  };
  error?: string;
}

export async function sendLog(data: LogEntry) {
  try {
    const response = await fetch(`/api/log?id=${data.id}&proof=${data.proof}&error=${data.error || null}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to send log data');
    }

    const responseData = await response.json();
    console.log('Server log response:', responseData);
  } catch (error) {
    console.error('Failed to send log:', error);
  }
}
