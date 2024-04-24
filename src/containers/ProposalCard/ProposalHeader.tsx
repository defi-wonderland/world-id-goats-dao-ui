import { Typography, Box, styled } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import { useCustomTheme } from '~/hooks';
import proposalData from '~/data/proposal.json';
import { truncateValue } from '~/utils';
import { MoreButton } from '~/components';
import { VoteButton } from './VoteButton';

export const ProposalHeader = () => {
  const { title, status, date, id } = proposalData.HEADER;

  const handleExplorer = (url: string) => {
    //navigate to block scan
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const menuItems = [
    {
      label: 'View on block explorer',
      onClick: () => handleExplorer('https://optimistic.etherscan.io/'),
      icon: <OpenInNew />,
    },
  ];

  /*
  TBD: Add more status/dynamic
  active - executed - defeated
  */

  return (
    <HeaderContainer>
      <LeftSection>
        <StatusBadge>{status}</StatusBadge>
        <Title variant='h5'>{title}</Title>
        <IDDateBox>
          <Typography variant='subtitle2'>ID {truncateValue(id)}</Typography>
          <Typography variant='subtitle2'>Proposed on: {date}</Typography>
        </IDDateBox>
      </LeftSection>

      <RightSection>
        <VoteButton />
        <MoreButton menuItems={menuItems} />
      </RightSection>
    </HeaderContainer>
  );
};

const HeaderContainer = styled('div')(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '12.5rem',
    margin: '1rem 0',
    backgroundColor: currentTheme.backgroundSecondary,
    color: currentTheme.textPrimary,
    borderRadius: currentTheme.borderRadius,
    padding: '0 2rem',
    boxShadow: currentTheme.boxShadow,
    '@media (max-width: 600px)': {
      display: 'inline-block',
    },
    '@media (max-width: 390px)': {
      height: '15rem',
    },
  };
});

const LeftSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const RightSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
});

const StatusBadge = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    backgroundColor: currentTheme.primaryColor,
    color: '#fff',
    borderRadius: '20px',
    padding: '0.2rem 1rem',
    fontWeight: 800,
    fontSize: '0.75rem',
    width: 'fit-content',
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
      fontSize: '0.5rem',
      marginTop: '1rem',
    },
  };
});

const IDDateBox = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',

    '& .MuiTypography-root': {
      color: currentTheme.textSecondary,
      fontWeight: 600,
    },
    '@media (max-width: 600px)': {
      justifyContent: 'space-between',
    },
  };
});

const Title = styled(Typography)({
  fontWeight: 800,
  '@media (max-width: 600px)': {
    fontSize: '1.3rem',
  },
});
