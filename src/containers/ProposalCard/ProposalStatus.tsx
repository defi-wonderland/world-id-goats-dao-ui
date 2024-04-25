import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  styled,
  TypographyProps,
} from '@mui/material';
import {
  AddCircleOutline,
  PublishedWithChanges,
  PlayCircleOutline,
  PauseCircleOutline,
  CheckCircleOutline,
  OpenInNew,
} from '@mui/icons-material';

import { useCustomTheme } from '~/hooks';
import { MoreButton } from '~/components';

type StatusType = 'done' | 'active' | 'pending';

interface STextProps extends TypographyProps {
  status: StatusType | string;
}

export const ProposalStatus = () => {
  const handleExplorer = (url: string) => {
    //navigate to block scan
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  /*
  TBD: Add more states/dynamic
  Quorum not reached
  Proposal executed
  */

  const statusItems = [
    {
      icon: <AddCircleOutline />,
      primary: 'Draft created',
      secondary: 'Wed Apr 3, 02:50 pm',
      status: 'done',
    },
    {
      icon: <PublishedWithChanges />,
      primary: 'Published onchain',
      secondary: 'Wed Apr 3, 02:50 pm',
      status: 'active',
      menuItems: [
        {
          label: 'View on block explorer',
          onClick: () => handleExplorer('https://optimistic.etherscan.io/'),
          icon: <OpenInNew />,
        },
      ],
    },
    {
      icon: <PlayCircleOutline />,
      primary: 'Voting period started',
      secondary: 'Sat Apr 6, 03:22 pm',
      status: 'pending',
      menuItems: [
        {
          label: 'View on block explorer',
          onClick: () => handleExplorer('https://optimistic.etherscan.io/'),
          icon: <OpenInNew />,
        },
      ],
    },
    {
      icon: <PauseCircleOutline />,
      primary: 'End voting period',
      secondary: 'Sat Apr 20, 05:32 pm',
      status: 'pending',
      links: false,
    },
    {
      icon: <CheckCircleOutline />,
      primary: 'Execute proposal',
      secondary: 'Sat Apr 20, 05:32 pm',
      status: 'pending',
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
          <React.Fragment key={index}>
            {item.primary === 'Execute' && <Divider sx={{ my: 2 }} />}
            <ListItem key={index}>
              <SIcon status={item.status}>{item.icon}</SIcon>
              <ListItemText primary={<SText status={item.status}>{item.primary}</SText>} secondary={item.secondary} />
              {item.menuItems && <MoreButton menuItems={item.menuItems} />}
            </ListItem>
          </React.Fragment>
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

const TitleContainer = styled(Box)({
  paddingBottom: '0.5rem',
});

const STitle = styled(Typography)({
  fontWeight: 800,
});

const SIcon = styled(ListItemIcon)<STextProps>(({ status }) => {
  const { currentTheme } = useCustomTheme();
  let color;

  switch (status) {
    case 'active':
      color = currentTheme.textTertiary;
      break;
    case 'pending':
      color = currentTheme.textSecondary;
      break;
    case 'done':
      color = currentTheme.textPrimary;
      break;
    default:
      color = currentTheme.textPrimary;
  }

  return {
    fontWeight: 800,
    color: color,
  };
});

const SText = styled(Typography)<STextProps>(({ status }) => {
  const { currentTheme } = useCustomTheme();
  let color;

  switch (status) {
    case 'active':
      color = currentTheme.textTertiary;
      break;
    case 'pending':
      color = currentTheme.textSecondary;
      break;
    case 'done':
      color = currentTheme.textPrimary;
      break;
    default:
      color = currentTheme.textPrimary;
  }

  return {
    fontWeight: 800,
    color: color,
  };
});
