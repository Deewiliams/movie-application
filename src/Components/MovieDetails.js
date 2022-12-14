import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  Typography,
  Button,
  CardContent,
  CardHeader,
} from "@material-ui/core";
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
}));

const MovieDetails = () => {
  const classes = useStyles();
  let { movieId } = useParams();
  const [movieDetails, setMovieDeatails] = useState({});

  const fetchMovieDetails = () => {
    fetch(
      `
          https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((respond) => respond.json())
      .then((data) => {
        setMovieDeatails(data);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3} style={{ textAlign: "center" }}>
          <Grid item xs={12} sm={6}>
            <img
              src={`http://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardHeader
              title={movieDetails.title}
              subheader={movieDetails.release_date}
            />
            <CardContent>
              <Typography paragraph style={{ textAlign: "start" }}>
                Overview:
              </Typography>
              <Typography
                paragraph
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "justify" }}
              >
                {movieDetails.overview}
              </Typography>

              <Typography paragraph style={{ textAlign: "start" }}>
                popularity:
              </Typography>
              <Typography
                paragraph
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "justify" }}
              >
                {movieDetails.popularity}
              </Typography>
            </CardContent>
            <Link to="/" style={{textDecoration: "none"}}>
              <Button variant="contained" color="primary" fullWidth >
                Go Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MovieDetails;
