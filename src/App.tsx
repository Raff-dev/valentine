import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Snowfall from 'react-snowfall';
import { animated, useSpring } from "react-spring";

import snowflake2Img from "../assets/img/heart.png";
import snowflake1Img from "../assets/img/horse.png";
import horsesImg from "../assets/img/horses.webp";
import picImg from "../assets/img/pic.webp";

const snowflake1 = document.createElement("img");
const snowflake2 = document.createElement("img");

snowflake1.src = snowflake1Img;
snowflake2.src = snowflake2Img;

const images = [snowflake1, snowflake2];

const App = () => {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [imagePath, setImagePath] = useState(picImg);

  const yesAnimation = useSpring({
    opacity: showFinalMessage ? 1 : 0,
    transform: showFinalMessage ? "translateY(0)" : "translateY(-20px)",
    config: { duration: 1000 },
    delay: 1000,
  });

  const handleNoButtonClick = () => {
    console.log("clicked no :(");
    const newX =
      window.innerWidth * 0.2 + Math.random() * window.innerWidth - 100;
    const newY =
      window.innerWidth * 0.5 +
      (Math.random() * window.innerHeight) / 2 -
      100;
    setNoButtonStyle({
      position: "absolute",
      left: `${newX}px`,
      top: `${newY}px`,
    });
  };

  const handleYesButtonClick = () => {
    console.log("clicked yes 😊");
    setShowFinalMessage(true);
    setImagePath(horsesImg);
  };

  return (
    <Box sx={{ p: 2, textAlign: "center", overflow: "hidden" }}>
      <img
        src={imagePath}
        alt="Us"
        style={{
          maxWidth: "100%",
          height: "auto",
          padding: "20px 0",
          transition: "transform 0.5s",
        }}
      />
      {!showFinalMessage && (
        <>
          <Typography variant="h4" gutterBottom>
            Will you be my valentine?
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleYesButtonClick}
              >
                Yes
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNoButtonClick}
                sx={noButtonStyle}
              >
                No
              </Button>
            </Grid>
          </Grid>
        </>
      )}
      {showFinalMessage && (
        <>
          <Snowfall
            // Applied to the canvas element
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
            }}
            // Controls the number of snowflakes that are created (default 150)
            snowflakeCount={15}
            // Pass in the images to be used
            images={images}
            radius={[20, 80]}
          />
          <animated.div style={yesAnimation}>
            <Typography variant="h5" gutterBottom>
              Awesome 😊
            </Typography>
            <animated.div style={{ ...yesAnimation }}>
              <Typography variant="h6">
                See you in the evening
              </Typography>
            </animated.div>
          </animated.div>
        </>
      )}
    </Box>
  );
};

export default App;
