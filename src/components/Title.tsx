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
  '@media (max-width: 600px)': {
    fontSize: '2rem',
    margin: '0',
  },
});
