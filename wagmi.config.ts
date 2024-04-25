// wagmi.config.ts

import { defineConfig } from '@wagmi/cli';
import { abi } from './src/data/abi.json';

export default defineConfig({
  out: 'src/utils/contracts.ts',
  contracts: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { name: 'GoatsDAO', abi: abi as any },
  ],
  plugins: [],
});
