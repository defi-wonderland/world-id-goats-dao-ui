import { Container, Typography, styled } from '@mui/material';

export function GradientTitle({ title }: { title: string }) {
  return (
    <Container>
      <GradientText>{title}</GradientText>
    </Container>
  );
}

const GradientText = styled(Typography)({
  fontSize: '5rem',
  background: 'linear-gradient(to right, rgb(98, 92, 191), rgb(197, 95, 163), rgb(252, 204, 80))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'SharpGroteskItalic',
  textAlign: 'center',
  fontStyle: 'italic',
  fontWeight: 300,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  padding: '0.5rem',
  '@media (max-width: 600px)': {
    fontSize: '2.5rem',
  },
});
