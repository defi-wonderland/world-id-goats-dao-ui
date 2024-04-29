import { useEffect, useState, useMemo } from 'react';
import { Box, Typography, TypographyProps, styled } from '@mui/material';
import { Circle } from '@mui/icons-material';

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

export const ProposalPoll = () => {
  const { getQuorumThreshold, getProposalVotes } = useContract();
  const [votes, setVotes] = useState({ for: 0, against: 0, abstain: 0 });
  const [quorum, setQuorum] = useState('');

  useEffect(() => {
    async function fetchContractData() {
      const quorumThreshold = await getQuorumThreshold(BigInt(PROPOSAL_ID));
      const voteCounts = await getProposalVotes(BigInt(PROPOSAL_ID));
      if (voteCounts) {
        setVotes({
          for: Number(voteCounts[0]),
          against: Number(voteCounts[1]),
          abstain: Number(voteCounts[2]),
        });
      }
      if (quorumThreshold) {
        setQuorum(quorumThreshold.toString());
      }
    }
    fetchContractData();
  }, [getProposalVotes, getQuorumThreshold]);

  const totalVotes = useMemo(() => votes.for + votes.against + votes.abstain, [votes]);

  const voteTypes = useMemo(
    () => [
      { type: 'For', count: votes.for, color: '#4aa16c' },
      { type: 'Against', count: votes.against, color: '#D92D20' },
      { type: 'Abstain', count: votes.abstain, color: '#94969c' },
    ],
    [votes],
  );

  const voteOffsets = useMemo(() => {
    let accumulatedLeft = 0;
    return voteTypes.map((vote) => {
      const percentage = totalVotes > 0 ? (vote.count / totalVotes) * 100 : 0;
      const offset = accumulatedLeft;
      accumulatedLeft += percentage;
      return { ...vote, percentage, offset };
    });
  }, [voteTypes, totalVotes]);
  return (
    <PollContainer>
      <StatsContainer>
        <StatsInfoContainer>
          <Typography>Quorum</Typography>
        </StatsInfoContainer>
        <SText>
          {totalVotes} of {quorum}
        </SText>
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
            <StyledTypography>{vote.type} :</StyledTypography>
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
    color: currentTheme.textPrimary,
    gap: '0.5rem',
    fontWeight: 800,
    margin: '0 3.75rem',
  };
});

const StatsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '0.5rem',
  letterSpacing: '0.125rem',
  textTransform: 'uppercase',
});

const StatsInfoContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      color: currentTheme.textTertiary,
    },
    '& .MuiTypography-root': {
      fontWeight: 800,
    },
  };
});

const VoteStatsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem 0',
});

const SBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  gap: '0.5rem',
  margin: '0 0.5rem',
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
