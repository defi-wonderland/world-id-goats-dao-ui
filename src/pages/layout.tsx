import { Box, CssBaseline, styled } from '@mui/material';

import { Footer, LoadingModal, SuccessModal, ErrorModal, WalletConfirm } from '~/containers';

export const Modals = () => {
  return (
    <>
      {/* Add all modals here... */}
      <LoadingModal />
      <SuccessModal />
      <ErrorModal />
      <WalletConfirm />
    </>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Modals />

      <MainContent>
        <NoScriptMessage>
          <p>This website requires JavaScript to function properly.</p>
        </NoScriptMessage>

        {children}
        <Footer />
      </MainContent>
    </>
  );
}

const MainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
`;

const NoScriptMessage = styled('noscript')(() => {
  return {
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
    fontSize: '1.6rem',
    padding: '1rem 0',
    p: {
      padding: '1rem 0',
      margin: 0,
    },
  };
});
