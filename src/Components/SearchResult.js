import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { GlobalContext } from "./context/GlobalState";
import { truncate } from "../Utils/helpers";
import{ Link} from 'react-router-dom'

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
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SearchResult({ movie }) {
  const classes = useStyles();
  const {
    addWatchListMovies,
    addMovieToWatched,
    watchList,
    watched,
  } = useContext(GlobalContext);

  const storeMovie = watchList.find((o) => o.id === movie.id);
  const storeMovieWatched = watched.find((o) => o.id === movie.id);
  const disablewatchListMovie = storeMovie
    ? true
    : storeMovieWatched
    ? true
    : false;

  const watchedDisable = storeMovieWatched ? true : false;
  return (
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
      <br />
      <Button
        variant="contained"
        color="primary"
        disabled={disablewatchListMovie}
        onClick={() => addWatchListMovies(movie)}
        fullWidth
      >
        Add Watch list
      </Button>
      <br />
      <div>
        <Button
          variant="contained"
          color="primary"
          disabled={watchedDisable}
          onClick={() => addMovieToWatched(movie)}
          fullWidth
        >
          Add to watched
        </Button>
      </div>
    </Card>
  );
}
