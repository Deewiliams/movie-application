import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWatchlist = () => {
    navigate("/");
  };

  const handleWatch = () => {
    navigate("/watched");
  };

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "gray" }}>
        <Toolbar style={{ backGroundColor: "white" }}>
          <Typography variant="h6" className={classes.title}>
            Movie App
          </Typography>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="white"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="WatchList" onClick={handleWatchlist} />
            <Tab label="watched" onClick={handleWatch} />
            <Tab label="+ Add" onClick={handleAdd} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
