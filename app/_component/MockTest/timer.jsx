"use client"
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';



const Timer = ({duration, onFinish }) => {
    const [seconds, setSeconds] = useState(duration);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timer);
            onFinish(); // Trigger onFinish when timer reaches 0
            return prevSeconds;
          }
          return prevSeconds - 1;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, [onFinish]);
    const remainingPercentage = (seconds / duration) * 100;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return (
        <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <CircularProgress variant="determinate" value={remainingPercentage} size={100} thickness={4} color="primary" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#000' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}</span>
        </div>
      </div>
    );
  };

  export default Timer;