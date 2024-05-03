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
  '@media (max-width: 600px)': {
    width: '20rem',
    margin: 'auto',
  },
});

const CodeSnippet = styled(Typography)(() => {
  const { darkTheme } = useCustomTheme();
  return {
    background: darkTheme.backgroundCode,
    padding: '1.25rem 2.5rem',
    gap: '0.25rem',
    alignItems: 'stretch',
    borderRadius: '0.625rem',
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    fontSize: '1.125rem',
    color: darkTheme.textPrimary,
    zIndex: '100',
    '@media (max-width: 720px)': {
      fontSize: '0.8rem',
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
  fontSize: '3rem',
  lineHeight: 'normal',
  alignSelf: 'strech',
  fontFamily: 'SharpGroteskMedium',
});
