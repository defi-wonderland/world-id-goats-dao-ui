export interface ISuccessResult {
  merkle_root: string;
  nullifier_hash: string;
  proof: string;
}

export enum VerificationLevel {
  Orb = 'orb',
  Device = 'device',
}
