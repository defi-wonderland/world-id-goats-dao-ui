import { useState, SyntheticEvent } from 'react';
import { Tab, Tabs, Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useCustomTheme } from '~/hooks';
import proposalData from '~/data/proposal.json';

export const ProposalDetail = () => {
  const [tabValue, setTabValue] = useState(0);
  const { summary } = proposalData.DESCRIPTION;
  const { data } = proposalData.CODE;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <DetailContainer>
      <TitleContainer>
        <STitle variant='h6'>PROPOSAL</STitle>
      </TitleContainer>

      <Divider sx={{ my: 2 }} />

      <StyledTabs value={tabValue} onChange={handleChange} aria-label='proposal detail tabs'>
        <StyledTab label='Description' />
        <StyledTab label='Executable Code' />
      </StyledTabs>

      {tabValue === 0 && (
        <TabPanel>
          <SectionTitle>Summary</SectionTitle>
          <SParagraph paragraph>{summary}</SParagraph>
        </TabPanel>
      )}

      {tabValue === 1 && (
        <TabPanel>
          <SectionTitle>Executable Code</SectionTitle>
          <CodeSnippet>{data}</CodeSnippet>
        </TabPanel>
      )}
    </DetailContainer>
  );
};

const DetailContainer = styled(Box)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '1rem 0',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)', // For Safari compatibility
    color: darkTheme.textPrimary,
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow
    width: '50rem',
    border: '0.5px solid rgba(0, 0, 0, 0.2)',
    '@media (max-width: 600px)': {
      width: 'inherit',
    },
  };
});

const TitleContainer = styled(Box)({
  paddingBottom: '0.5rem',
});

const StyledTabs = styled(Tabs)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    '& .MuiTabs-indicator': {
      backgroundColor: darkTheme.textPrimary,
    },
    '& .MuiTab-root': {
      color: '#999',
      '&.Mui-selected': {
        color: darkTheme.textPrimary,
        fontWeight: 'bold',
      },
    },
  };
});

const StyledTab = styled(Tab)({});

const SectionTitle = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    fontWeight: 'bold',
    margin: '1rem 0',
    color: darkTheme.textPrimary,
  };
});

const TabPanel = styled(Box)({
  padding: '16px',
});

const CodeSnippet = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    background: darkTheme.backgroundPrimary,
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    fontSize: '1rem',
    color: darkTheme.textPrimary,
    '@media (max-width: 600px)': {
      maxWidth: '18rem',
    },
  };
});

const SParagraph = styled(Typography)({
  textAlign: 'justify',
});

const STitle = styled(Typography)({
  fontWeight: 800,
});
