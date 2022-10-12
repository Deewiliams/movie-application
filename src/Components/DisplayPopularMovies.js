import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { GlobalContext } from "./context/GlobalState";
import { truncate } from "../Utils/helpers";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

const DisplayPopularMovies = ({ movie }) => {
  const classes = useStyles();
  const { addWatchListMovies, watchList } = useContext(GlobalContext);

  const storeMovie = watchList.find((o) => o.id === movie.id);
  const disablewatchListMovie = storeMovie ? true : false;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={truncate(movie.title)}
          subheader={movie.release_date.substring(0, 4)}
        />
        <Link to={`/movie/${movie.id}`}>
          <CardMedia
            className={classes.media}
            image={`http://image.tmdb.org/t/p/w400${movie.poster_path}`}
            title={movie.title}
          />
        </Link>
      </Card>
      <br />
      <Button
        variant="contained"
        color="primary"
        disabled={disablewatchListMovie}
        onClick={() => {
          addWatchListMovies(movie);
        }}
        fullWidth
      >
        Add Watch list
      </Button>
    </div>
  );
};

export default DisplayPopularMovies;
