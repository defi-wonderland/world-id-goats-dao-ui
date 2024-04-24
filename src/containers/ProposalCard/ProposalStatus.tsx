import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, styled } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { useCustomTheme } from '~/hooks';
import { MoreButton } from '~/components';

export const ProposalStatus = () => {
  const handleExplorer = (url: string) => {
    //navigate to block scan
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const statusItems = [
    {
      icon: <AddCircleOutlineIcon />,
      primary: 'Draft created',
      secondary: 'Wed Apr 3, 02:50 pm',
      state: 'done',
    },
    {
      icon: <PublishedWithChangesIcon />,
      primary: 'Published onchain',
      secondary: 'Wed Apr 3, 02:50 pm',
      state: 'active',
      menuItems: [
        { label: 'View on block explorer', onClick: () => handleExplorer('https://optimistic.etherscan.io/') },
      ],
    },
    {
      icon: <PlayCircleOutlineIcon />,
      primary: 'Voting period started',
      secondary: 'Sat Apr 6, 03:22 pm',
      state: 'pending',
      menuItems: [
        { label: 'View on block explorer', onClick: () => handleExplorer('https://optimistic.etherscan.io/') },
      ],
    },
    {
      icon: <PauseCircleOutlineIcon />,
      primary: 'End voting period',
      secondary: 'Sat Apr 20, 05:32 pm',
      state: 'pending',
      links: false,
    },
    {
      icon: <CheckCircleOutlineIcon />,
      primary: 'Execute',
      secondary: 'Sat Apr 20, 05:32 pm',
      state: 'pending',
      links: false,
    },
  ];

  return (
    <StatusContainer>
      <TitleContainer>
        <STitle variant='h6'>Status</STitle>
      </TitleContainer>
      <Divider sx={{ my: 2 }} />
      <List>
        {statusItems.map((item, index) => (
          <>
            {item.primary === 'Execute' && <Divider sx={{ my: 2 }} />}
            <StatusListItem key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.primary} secondary={item.secondary} />
              {item.menuItems && <MoreButton menuItems={item.menuItems} />}
            </StatusListItem>
          </>
        ))}
      </List>
    </StatusContainer>
  );
};

const StatusContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    boxShadow: currentTheme.boxShadow,
    margin: '0 0 1rem 0',
    padding: '2rem',
  };
});

const StatusListItem = styled(ListItem)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    '&.done': {
      color: currentTheme.textSecondary,
    },
    '&.active': {
      color: currentTheme.textPrimary,
      // '& .MuiListItemIcon-root': {
      //   color: currentTheme.active,
      // },
    },
    '&.pending': {
      color: currentTheme.textSecondary,
      opacity: 0.5,
    },
    // '& .MuiListItemIcon-root': {
    //   color: currentTheme.done,
    // },
    '& .MuiIconButton-root': {
      color: currentTheme.textSecondary,
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  };
});

const TitleContainer = styled(Box)({
  paddingBottom: '0.5rem',
});

const STitle = styled(Typography)({
  fontWeight: 800,
});
