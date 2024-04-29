import { useState, useEffect } from 'react';
import styled from 'styled-components';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const generateStars = (stars: number) => {
  const width = 4000;
  const height = 2000;

  let shadows = `${getRandomInt(width)}px ${getRandomInt(height)}px #fff`;
  for (let index = 0; index < stars; index++) {
    shadows = `${shadows}, ${getRandomInt(width)}px ${getRandomInt(height)}px #fff`;
  }
  return shadows;
};

export interface StarsContainerProps {
  smstars: number;
  mdstars: number;
  lgstars: number;
  zindex?: number;
}

const StarsContainer = styled.div<StarsContainerProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;

  & .stars {
    width: 0.1rem;
    height: 0.1rem;
    box-shadow: ${(props) => generateStars(props.smstars)};
    animation: animStar ${getRandomInt(2000) + 1000}ms linear infinite;
    z-index: 0;
  }

  & .stars1 {
    width: 0.1rem;
    height: 0.1rem;
    box-shadow: ${(props) => generateStars(props.smstars)};
    animation: animStar ${getRandomInt(2000) + 1000}ms linear infinite;
    z-index: 0;
  }

  & .stars2 {
    width: 0.1rem;
    height: 0.1rem;
    box-shadow: ${(props) => generateStars(props.smstars)};
    animation: animStar ${getRandomInt(2000) + 1000}ms linear infinite;
    z-index: 0;
  }

  & .stars3 {
    width: 0.1rem;
    height: 0.1rem;
    box-shadow: ${(props) => generateStars(props.smstars)};
    animation: animStar ${getRandomInt(2000) + 1000}ms linear infinite;
    z-index: 0;
  }

  & .stars4 {
    width: 0.1rem;
    height: 0.1rem;

    box-shadow: ${(props) => generateStars(props.smstars)};
    animation: animStar ${getRandomInt(2000) + 1000}ms linear infinite;
    z-index: 0;
  }

  & .stars5 {
    width: 0.2rem;
    height: 0.2rem;
    background: transparent;
    box-shadow: ${(props) => generateStars(props.mdstars)};
    animation: animStar 1213ms linear infinite;
  }
  & .stars6 {
    width: 0.3rem;
    height: 0.3rem;
    background: transparent;
    box-shadow: ${(props) => generateStars(props.lgstars)};
    animation: animStar2 747ms linear infinite;
  }

  & div {
    border-radius: 100%;
  }

  @keyframes animStar {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes animStar2 {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

interface BackgroundProps {
  zIndex?: number;
}

export default function StarsBackground({ zIndex }: BackgroundProps) {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    });
  }, []);

  return (
    <>
      {showBackground && (
        <StarsContainer smstars={700} mdstars={700} lgstars={50} zindex={zIndex}>
          <div className='stars'></div>
          <div className='stars1'></div>
          <div className='stars2'></div>
          <div className='stars3'></div>
          <div className='stars4'></div>
          <div className='stars5'></div>
          <div className='stars6'></div>
        </StarsContainer>
      )}
    </>
  );
}
