import { Container, Typography, styled } from '@mui/material';

export function Title({ title }: { title: string }) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
}

const TitleText = styled(Typography)({
  fontSize: '5.5rem',
  fontFamily: 'SharpGroteskItalic',
  textAlign: 'center',
  fontStyle: 'italic',
  fontWeight: 300,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  letterSpacing: '0.25rem',
  padding: '0.5rem',
  margin: '0 2rem',
  '@media (max-width: 600px)': {
    fontSize: '2rem',
  },
});
