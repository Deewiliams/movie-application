import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { truncate } from "../Utils/helpers";

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
  console.log('image',watchList);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {watchList.map((watch) => (
          <Grid item xs={6} sm={3}>
            <Card className={classes.root}>
              <CardHeader title={truncate(watch.title)} />
              <CardMedia
                className={classes.media}
                image={`http://image.tmdb.org/t/p/w400${watch.poster_path}`}
                title={watch.title}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WatchList;
