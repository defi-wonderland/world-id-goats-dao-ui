import { useState, SyntheticEvent } from 'react';
import { Tab, Tabs, Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useCustomTheme } from '~/hooks';
import proposalData from '../../data/proposal.json';

export const ProposalDetail = () => {
  const [tabValue, setTabValue] = useState(0);
  const { summary, background } = proposalData.DESCRIPTION;
  const { data } = proposalData.CODE;

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <DetailContainer>
      <TitleContainer>
        <STitle variant='h6'>Proposal</STitle>
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
          <SectionTitle>Background</SectionTitle>
          <SParagraph paragraph>{background}</SParagraph>
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
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '1rem 0',
    backgroundColor: currentTheme.backgroundSecondary,
    color: currentTheme.textPrimary,
    borderRadius: currentTheme.borderRadius,
    padding: '2rem',
    boxShadow: currentTheme.boxShadow,
  };
});

const TitleContainer = styled(Box)({
  paddingBottom: '0.5rem',
});

const StyledTabs = styled(Tabs)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    '& .MuiTabs-indicator': {
      backgroundColor: currentTheme.textPrimary,
    },
    '& .MuiTab-root': {
      color: '#999',
      '&.Mui-selected': {
        color: currentTheme.textPrimary,
        fontWeight: 'bold',
      },
    },
  };
});

const StyledTab = styled(Tab)({});

const SectionTitle = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontWeight: 'bold',
    margin: '1rem 0',
    color: currentTheme.textPrimary,
  };
});

const TabPanel = styled(Box)({
  padding: '16px',
});

const CodeSnippet = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    background: currentTheme.backgroundPrimary,
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    overflow: 'auto',
    whiteSpace: 'pre',
    color: currentTheme.textPrimary,
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
