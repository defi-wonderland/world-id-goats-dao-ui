import { useEffect, useState } from 'react';
import { Box, Typography, Divider, TypographyProps, styled } from '@mui/material';
import { CheckCircle, Circle } from '@mui/icons-material';

import { useCustomTheme, useContract } from '~/hooks';
import { getConfig } from '~/config';

const { PROPOSAL_ID } = getConfig();

interface StyledTypographyProps extends TypographyProps {
  color?: string;
}

interface ProgressSegmentProps {
  left: number;
  width: number;
  backgroundColor: string;
}

interface Vote {
  type: string;
  count: number;
  color: string;
  percentage: number;
  offset: number;
}

export const ProposalPoll = () => {
  const { getQuorumThreshold, getProposalVotes } = useContract();
  const [quorum, setQuorum] = useState('');
  const [votes, setVotes] = useState({ for: 0, against: 0, abstain: 0 });
  const [majoritySupport, setMajoritySupport] = useState('No');

  useEffect(() => {
    async function fetchContractData() {
      const quorumThreshold = await getQuorumThreshold(BigInt(PROPOSAL_ID));
      const voteCounts = await getProposalVotes(BigInt(PROPOSAL_ID));

      if (quorumThreshold !== undefined && voteCounts !== undefined) {
        setQuorum(quorumThreshold.toString()); // Convert BigInt to String for display
        setVotes({
          for: Number(voteCounts[0]), // Convert BigInt to Number for calculations
          against: Number(voteCounts[1]),
          abstain: Number(voteCounts[2]),
        });

        // Check if the "For" votes exceed the quorum threshold
        setMajoritySupport(voteCounts[0] > quorumThreshold ? 'Yes' : 'No');
      }
    }

    fetchContractData();
  }, [getQuorumThreshold, getProposalVotes]);

  const voteTypes = [
    { type: 'For', count: votes.for, color: '#4aa16c' },
    { type: 'Against', count: votes.against, color: '#D92D20' },
    { type: 'Abstain', count: votes.abstain, color: '#94969c' },
  ];

  const totalVotes = votes.for + votes.against + votes.abstain;

  // Calculate the left offsets for each segment
  let accumulatedLeft = 0;
  const voteOffsets: Vote[] = voteTypes.map((vote) => {
    const percentage = (Number(vote.count) / Number(totalVotes)) * 100;
    const offset = accumulatedLeft;
    accumulatedLeft += percentage; // Accumulate the width for the next item's offset
    return {
      ...vote,
      percentage,
      offset,
    };
  });

  return (
    <PollContainer>
      <TitleContainer>
        <STitle variant='h6'>Current Votes</STitle>
      </TitleContainer>

      <Divider sx={{ my: 2 }} />

      <StatsContainer>
        <StatsInfoContainer>
          <CheckCircle />
          <Typography>Quorum</Typography>
        </StatsInfoContainer>
        <SText>{quorum}</SText>
      </StatsContainer>

      <StatsContainer>
        <StatsInfoContainer>
          <CheckCircle />
          <Typography>Majority support</Typography>
        </StatsInfoContainer>
        <SText>{majoritySupport}</SText>
      </StatsContainer>

      <OverallProgressContainer>
        {voteOffsets.map((vote, index) => (
          <ProgressSegment key={index} left={vote.offset} width={vote.percentage} backgroundColor={vote.color} />
        ))}
      </OverallProgressContainer>

      <VoteStatsContainer>
        {voteTypes.map((vote) => (
          <SBox key={vote.type}>
            <StyledCircleIcon sx={{ color: vote.color }} />
            <StyledTypography color={vote.color}>{vote.type}</StyledTypography>
            <SText>{vote.count}</SText>
          </SBox>
        ))}
      </VoteStatsContainer>
    </PollContainer>
  );
};

const PollContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: currentTheme.backgroundSecondary,
    color: currentTheme.textPrimary,
    borderRadius: '0.8rem',
    margin: '1rem 0',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    gap: '0.5rem',
    fontWeight: 800,
  };
});

const TitleContainer = styled(Box)({
  paddingBottom: '0.5rem',
});

const StatsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const StatsInfoContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '& svg': {
      color: currentTheme.textTertiary,
    },
    '& .MuiTypography-root': {
      fontWeight: 800,
    },
  };
});

const VoteStatsContainer = styled(Box)({
  display: 'inline-block',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
  paddingTop: '0.5rem',
});

const SBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: '8px 0',
  padding: '4px',
});

const STitle = styled(Typography)({
  fontWeight: 800,
});

const SText = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontWeight: 800,
    color: currentTheme.textSecondary,
    '@media (max-width: 1200px)': {
      fontSize: '0.75rem',
    },
  };
});

const StyledTypography = styled(Typography)<StyledTypographyProps>(({ color }) => ({
  color: color,
  marginRight: 'auto',
  marginLeft: '12px',
  fontWeight: 800,
}));

const StyledCircleIcon = styled(Circle)(({ color }) => ({
  color: color,
}));

const OverallProgressContainer = styled('div')({
  position: 'relative',
  height: '10px',
  width: '100%',
  borderRadius: '5px',
  overflow: 'hidden',
  backgroundColor: '#E0E0E0',
  marginTop: '1rem',
});

const ProgressSegment = styled('div')<ProgressSegmentProps>(({ left, width, backgroundColor }) => ({
  position: 'absolute',
  left: `${left}%`,
  top: 0,
  height: '100%',
  width: `${width}%`,
  backgroundColor,
}));
