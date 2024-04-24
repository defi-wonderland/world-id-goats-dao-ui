import { styled } from '@mui/material/styles';

import { ProposalDetail } from './ProposalDetail';
import { ProposalHeader } from './ProposalHeader';
import { ProposalPoll } from './ProposalPoll';
import { ProposalStatus } from './ProposalStatus';

export const ProposalCard = () => {
  return (
    <ProposalCardContainer>
      <HeaderSection>
        <ProposalHeader />
      </HeaderSection>
      <ContentSection>
        <LeftColumn>
          <ProposalDetail />
        </LeftColumn>
        <RightColumn>
          <ProposalPoll />
          <ProposalStatus />
        </RightColumn>
      </ContentSection>
    </ProposalCardContainer>
  );
};

const ProposalCardContainer = styled('article')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  height: '100%',
  '@media (max-width: 600px)': {
    display: 'block',
  },
});

const HeaderSection = styled('header')({
  gridRow: '1',
  width: '100%',
});

const ContentSection = styled('main')({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridRow: '2',
  gap: '1rem',
  '@media (max-width: 600px)': {
    display: 'block',
  },
});

const LeftColumn = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const RightColumn = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
