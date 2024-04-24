import { parseAbi } from 'viem';

/**
 * @notice Checks the validity of a vote
 * @param _support The support for the proposal
 * @param _proposalId The proposal id
 * @param _proofData The proof data containing the Merkle root, the nullifier hash and the zkProof
 * @return _nullifierHash The nullifier hash
 */

export const checkVoteValidity = parseAbi([
  'function checkVoteValidity(uint8 _support,uint256 _proposalId,bytes memory _proofData ) external returns (uint256 _nullifierHash);',
]);

/**
 * @notice Returns the quorum threshold for the proposal
 * @param _proposalId The ID of the proposal
 * @return _quorumThreshold The quorum threshold for the proposal
 */

export const proposalsQuorumThreshold = parseAbi([
  'function proposalsQuorumThreshold(uint256 _proposalId) external view returns (uint256 _quorumThreshold);',
]);

/**
 * @dev Cast a vote with a reason and additional encoded parameters
 *
 * Emits a {VoteCast} or {VoteCastWithParams} event depending on the length of params.
 */

export const castVoteWithReasonAndParams = parseAbi([
  'function castVoteWithReasonAndParams( uint256 proposalId,uint8 support, string calldata reason, bytes memory params) external returns (uint256 balance);',
]);

/**
 * @notice module:core
 * @dev Current state of a proposal, following Compound's convention
 */

export const state = parseAbi(['function state(uint256 proposalId) external view returns (ProposalState);']);

/**
 * @notice module:core
 * @dev Timepoint used to retrieve user's votes and quorum. If using block number (as per Compound's Comp), the
 * snapshot is performed at the end of this block. Hence, voting for this proposal starts at the beginning of the
 * following block.
 */

export const proposalSnapshot = parseAbi([
  'function proposalSnapshot(uint256 proposalId) external view returns (uint256);',
]);

/**
 * @notice module:core
 * @dev Timepoint at which votes close. If using block number, votes close at the end of this block, so it is
 * possible to cast a vote during this block.
 */

export const proposalDeadline = parseAbi([
  'function proposalDeadline(uint256 proposalId) external view returns (uint256);',
]);

/**
 * @notice module:user-config
 * @dev Delay, between the proposal is created and the vote starts. The unit this duration is expressed in depends
 * on the clock (see ERC-6372) this contract uses.
 *
 * This can be increased to leave time for users to buy voting power, or delegate it, before the voting of a
 * proposal starts.
 */

export const votingDelay = parseAbi(['function votingDelay() public view virtual returns (uint256);']);

/**
 * @dev Accessor to the internal vote counts.
 */

export const proposalVotes = parseAbi([
  ' function proposalVotes(uint256 proposalId) public view virtual returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes) ',
]);
