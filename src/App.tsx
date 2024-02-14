import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';

const App = () => {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const yesAnimation = useSpring({
    opacity: showFinalMessage ? 1 : 0,
    transform: showFinalMessage ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 1000 },
  });

  const handleNoButtonClick = () => {
    console.log("clicked no :(")
    const newX = window.innerWidth * 0.2 + Math.random() * window.innerWidth - 100;
    const newY = window.innerWidth * 0.5 + Math.random() * window.innerHeight /2 - 100;
    setNoButtonStyle({
      position: 'absolute',
      left: `${newX}px`,
      top: `${newY}px`,
    });
  };

  const handleYesButtonClick = () => {
    console.log("clicked yes 😊")
    setShowFinalMessage(true);
  };

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <img src="public/horse.png" alt="Us" style={{ maxWidth: '100%', height: 'auto', padding: '20px 0' }} />
      {!showFinalMessage &&
      <>
      <Typography variant="h4" gutterBottom>
        Will you be my valentine?
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleYesButtonClick}>
            Yes
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleNoButtonClick} sx={noButtonStyle}>
            No
          </Button>
        </Grid>
      </Grid>
      {/* <FallingImages imagePath="public/horse.png"/>
      <FallingImages imagePath="public/heart.png"/> */}
      </>
    }
      {showFinalMessage && (
        <>
        <animated.div style={yesAnimation}>
          <Typography variant="h5" gutterBottom>Awesome 😊</Typography>
          <animated.div style={{...yesAnimation, delay: 2000}}>
            <Typography variant="h6">See you in the evening</Typography>
          </animated.div>
        </animated.div>
        </>
      )}
    </Box>
  );
};

export default App;


