import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { truncate } from "../Utils/helpers";
import { Link } from "react-router-dom";
import WatchedMovieControls from "./WatchMovieControls";
import TextMessage from './TextMessage'
import { Container } from "@material-ui/core";

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

const Watched = () => {
  const classes = useStyles();

  const { watched } = useContext(GlobalContext);

  if(watched.length < 1){
    return <TextMessage message='watched'/>
  }

  return (
    <div className={classes.root}>
      <Container>
      <Grid container spacing={3}>
          <>
            {watched.map((movie) => (
              <Grid item xs={12} sm={3} key={movie.id}>
                <Card className={classes.root}>
                  <CardHeader title={truncate(movie.title)} />
                  <Link to={`/movie/${movie.id}`}>
                    <CardMedia
                      style={{ cursor: "pointer" }}
                      className={classes.media}
                      image={`http://image.tmdb.org/t/p/w400${movie.poster_path}`}
                      title={movie.title}
                    />
                  </Link>
                </Card>
                <WatchedMovieControls movie={movie} />
              </Grid>
            ))}
          </>
      </Grid>
      </Container>
    </div>
  );
};

export default Watched;
