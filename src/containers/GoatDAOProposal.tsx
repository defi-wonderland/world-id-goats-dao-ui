import { Box, Typography, styled } from '@mui/material';

import { useCustomTheme } from '~/hooks';
import proposalData from '~/data/proposal.json';

export const GoatDAOProposal = () => {
  const { summary } = proposalData.DESCRIPTION;
  const { data } = proposalData.CODE;
  return (
    <ProposalContainer>
      <STitle>Goat DAO Proposal</STitle>

      <SParagraph paragraph>{summary}</SParagraph>
      <SParagraph>Executable code:</SParagraph>
      <CodeSnippet>{data}</CodeSnippet>
    </ProposalContainer>
  );
};

const ProposalContainer = styled(Box)({
  display: 'grid',
  gap: '1.5rem',
});

const CodeSnippet = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    background: darkTheme.backgroundModal,
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    fontSize: '1rem',
    color: darkTheme.textPrimary,
    zIndex: '100',
    '@media (max-width: 600px)': {
      maxWidth: '18rem',
    },
  };
});

const SParagraph = styled(Typography)({
  textAlign: 'justify',
  whiteSpace: 'pre-wrap',
  fontSize: '1.5rem',
  fontWeight: 500,
});

const STitle = styled(Typography)({
  fontWeight: 800,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '4rem',
  lineHeight: 'normal',
  alignSelf: 'strech',
  fontFamily: 'SharpGroteskMedium',
});
