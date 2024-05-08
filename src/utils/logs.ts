interface LogEntry {
  id: `0x${string}`;
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
  error?: string;
}

export async function sendLog(data: LogEntry) {
  try {
    const response = await fetch(
      `/api/logs?id=${data.id}&proof=${data.proof}&merkle_root=${data.merkle_root}&nullifier_hash=${
        data.nullifier_hash
      }&error=${data.error || null}`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error('Failed to send log data');
    }

    const responseData = await response.json();
    console.log('Server log response:', responseData);
  } catch (error) {
    console.error('Failed to send log:', error);
  }
}
