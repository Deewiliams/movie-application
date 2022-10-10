import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { truncate } from "../Utils/helpers";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 150,
    paddingTop: "56.25%", // 16:9
  },
}));

const WatchList = () => {
  const classes = useStyles();
  const { watchList } = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {watchList.map((watch) => (
          <Grid item xs={12} sm={3} key={watch.id}>
            <Card className={classes.root}>
              <CardHeader title={truncate(watch.title)} />
              <Link to={`/movie/${watch.id}`}>
                <CardMedia
                  style={{ cursor: "pointer" }}
                  className={classes.media}
                  image={`http://image.tmdb.org/t/p/w400${watch.poster_path}`}
                  title={watch.title}
                />
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WatchList;
