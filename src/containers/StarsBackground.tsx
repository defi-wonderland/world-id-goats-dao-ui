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
    z-index: 0;
  }

  & .stars1 {
    width: 0.1rem;
    height: 0.1rem;
    box-shadow: ${(props) => generateStars(props.smstars)};
    z-index: 0;
  }

  & div {
    border-radius: 100%;
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
        </StarsContainer>
      )}
    </>
  );
}
