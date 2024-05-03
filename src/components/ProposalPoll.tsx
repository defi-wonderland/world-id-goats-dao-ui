import { useMemo, useState, useEffect } from 'react';
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
  const { getQuorumThreshold, getProposalVotes, txHash } = useContract();
  const { darkTheme } = useCustomTheme();
  const [votes, setVotes] = useState({ for: 0, against: 0, abstain: 0 });
  const [quorum, setQuorum] = useState('');

  useEffect(() => {
    async function fetchContractData() {
      const quorumThreshold = await getQuorumThreshold(BigInt(PROPOSAL_ID));
      const voteCounts = await getProposalVotes(BigInt(PROPOSAL_ID));
      if (voteCounts) {
        setVotes({
          for: Number(voteCounts[1]),
          against: Number(voteCounts[2]),
          abstain: Number(voteCounts[0]),
        });
      }
      if (quorumThreshold) {
        setQuorum(quorumThreshold.toString());
      }
    }
    fetchContractData();
  }, [getProposalVotes, getQuorumThreshold, txHash]);

  const totalVotes = useMemo(() => votes.for + votes.against + votes.abstain, [votes]);

  const voteTypes = useMemo(
    () => [
      { type: 'For', count: votes.for, color: darkTheme.successPrimary },
      { type: 'Against', count: votes.against, color: darkTheme.errorPrimary },
      { type: 'Abstain', count: votes.abstain, color: darkTheme.disabledColor },
    ],
    [darkTheme, votes],
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
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    flexDirection: 'column',
    color: darkTheme.textPrimary,
    fontWeight: 500,
    margin: '1rem 3.75rem 3rem 3.75rem',
    '@media (max-width: 600px)': {
      marginTop: '1.5rem',
    },
    '@media (min-width: 601px) and (max-width: 1440px)': {
      margin: '2rem 3.75rem',
    },
    '@media (min-width: 1441px)': {
      margin: '4rem 0',
    },
  };
});

const StatsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '0.5rem',
});

const StatsInfoContainer = styled(Box)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      color: darkTheme.textTertiary,
    },
    '& .MuiTypography-root': {
      fontWeight: 500,
      fontSize: '1rem',
      marginBottom: '0.25rem',
      '@media (max-width: 600px)': {
        fontSize: '0.9rem',
      },
    },
  };
});

const VoteStatsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    margin: '0',
  },
});

const SBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  gap: '0.5rem',
});

const SText = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    fontWeight: 500,
    color: darkTheme.textSecondary,
    fontSize: '1rem',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem',
    },
  };
});

const StyledTypography = styled(Typography)<StyledTypographyProps>(({ color }) => ({
  color: color,
  marginRight: 'auto',
  fontWeight: 500,
  fontSize: '1rem',
  '@media (max-width: 600px)': {
    fontSize: '0.7rem',
    margin: '0',
    width: 'max-content',
  },
}));

const StyledCircleIcon = styled(Circle)(({ color }) => ({
  color: color,
  '@media (max-width: 600px)': {
    fontSize: '0.75rem',
  },
}));

const OverallProgressContainer = styled('div')({
  position: 'relative',
  height: '10px',
  width: '35rem',
  borderRadius: '5px',
  overflow: 'hidden',
  backgroundColor: '#E0E0E0',
  margin: 'auto',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    marginTop: '0',
    width: '20rem',
  },
});

const ProgressSegment = styled('div')<ProgressSegmentProps>(({ left, width, backgroundColor }) => ({
  position: 'absolute',
  left: `${left}%`,
  top: 0,
  height: '100%',
  width: `${width}%`,
  backgroundColor,
}));
