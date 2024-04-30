import React, { useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<number>(targetDate.getTime() - new Date().getTime());

  useEffect(() => {
    // Update the time left every second
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  // Calculate days, hours, minutes and seconds left
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <>
      {timeLeft > 0 && (
        <CountdownContainer>
          <Typography> VOTING ENDS IN: {`${days}D ${hours}H ${minutes}M ${seconds}S`}</Typography>
        </CountdownContainer>
      )}
    </>
  );
};

export const CountdownContainer = styled(Box)(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3rem',
  };
});
