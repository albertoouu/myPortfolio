import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material/";
import MobileRightMenuSlider from "@mui/material/Drawer";
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  ArrowBackIosNew,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import avatar from "../assets/avatar.jpeg";
import { NavLink } from "react-router-dom";

//CCS STYLES
const useStyles = makeStyles({
  menuSliderContainer: {
    width: 250,
    background: "#233142",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: 104,
    height: 104,
  },
  listItem: {
    color: "#e3e3e3",
  },
});

const menuItems = [
  {
    listIcon: <Home sx={{ color: "#e3e3e3" }} />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd sx={{ color: "#e3e3e3" }} />,
    listText: "Resume / CV",
    listPath: "/resume",
  },
  {
    listIcon: <Apps sx={{ color: "#e3e3e3" }} />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail sx={{ color: "#e3e3e3" }} />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        sx={{ width: 120, height: 120, mb: 5 }}
        className={classes.avatar}
        src={avatar}
        alt="yo"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <NavLink to={lsItem.listPath}>
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#233142" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBackIosNew style={{ color: "#e3e3e3" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#e3e3e3" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
