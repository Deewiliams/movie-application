import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { GlobalContext, GlobalProvider } from "./context/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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
  const {addWatchListMovies,watchList} = useContext(GlobalContext)

  const storeMovie = watchList.find(o => o.id === movie.id );
  const disablewatchListMovie = storeMovie ? true : false;
  return (
    <Card className={classes.root}>
     
          <CardHeader title={movie.title} subheader={movie.release_date} />
          <CardMedia
            className={classes.media}
            image={`http://image.tmdb.org/t/p/w400${movie.poster_path}`}
            title={movie.title}
          />
          <Button variant="contained" color="primary" disabled={disablewatchListMovie} onClick={() => addWatchListMovies(movie)} >Add movies</Button>
    
    </Card>
  );
}
