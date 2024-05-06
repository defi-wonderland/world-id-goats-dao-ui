export interface Env {
  RPC_URL: string;
  PROJECT_ID: string;
  ALCHEMY_KEY: string;
  PROPOSAL_ID: string;
  CONTRACT_ADDRESS: string;
  APP_ID: string;
}

export interface Constants {
  // ...
}

export interface Config extends Env, Constants {}
