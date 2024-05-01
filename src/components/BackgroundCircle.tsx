import { FC } from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';

type backgroundType = '1' | '2' | '3' | '4';
type backgroundAlignType = 'left' | 'center' | 'right';

const handleBackgroundType = (type: backgroundType) => {
  switch (type) {
    case '1':
      return '72%';
    case '2':
      return '68%';
    case '3':
      return '70%';
    case '4':
      return '71%';
    default:
      return '71%';
  }
};

export interface SectionBackgroundProps {
  type: backgroundType;
  align: backgroundAlignType;
}

export const SectionBackground: FC<SectionBackgroundProps> = ({ type, align, ...props }) => {
  return (
    <StyledSectionBackground type={type} align={align} {...props}>
      <Image src={`/img/ethos/00${type}_grad.jpg`} width={500} height={500} alt='' loading='lazy' />
    </StyledSectionBackground>
  );
};

const StyledSectionBackground = styled('div')<{
  type: backgroundType;
  align: backgroundAlignType;
}>`
  position: absolute;
  width: '50rem';
  z-index: 0;

  ${({ align }) =>
    align === 'left' &&
    `
    left: -10%;
    left: max(calc((100vw - 100%) * -1), -29vw);
  `};
  ${({ align }) =>
    align === 'right' &&
    `
    right: -10%;
    right: max(calc((100vw - 100%) * -1), -29vw);
  `};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(14, 21, 44, 0.16),
      #0e152c ${({ type }) => handleBackgroundType(type)}
    );
  }

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 665px) {
    left: initial;
    right: initial;
  }
`;
