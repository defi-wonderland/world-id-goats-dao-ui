import { Container, Typography, styled } from '@mui/material';

export function Title({ title }: { title: string }) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
}

const TitleText = styled(Typography)({
  fontSize: '5.25rem',
  fontFamily: 'SharpGroteskItalic',
  textAlign: 'center',
  fontStyle: 'italic',
  fontWeight: 300,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  letterSpacing: '0.25rem',
  padding: '0.5rem',
  margin: '0.5rem 2rem 1rem 0',
  '@media (max-width: 600px)': {
    fontSize: '2rem',
    margin: '0',
  },
});
