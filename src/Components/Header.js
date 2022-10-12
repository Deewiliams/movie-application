import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "gray" }}>
        <Toolbar style={{ backGroundColor: "white" }}>
          <Typography
            variant="h6"
            className={classes.title}
            to="/"
            component={Link}
            style={{ textDecoration: "none", color: "white" }}
          >
            Movie App
          </Typography>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="white"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="WatchList" to="/" component={Link} />
            <Tab label="watched" to="/watched" component={Link} />
            <Tab label="+ Add" to="/add" component={Link} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
