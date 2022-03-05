import React from "react";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import avatar from "../assets/avatar.jpeg";
import Typed from "react-typed";
import { makeStyles } from "@mui/styles";

// CSS STYLES

const useStyles = makeStyles({
  avatar: {
    width: 120,
    height: 120,
    margin: 8,
  },
  title: {
    color: "#f95959",
  },
  subtitle: {
    color: "#455d7a",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container alignItems="center" justifyContent="center">
        <Avatar sx={{ width: 150, height: 150, mb: 5 }} src={avatar} />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Alberto Gutiérrez"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "Physicist"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
