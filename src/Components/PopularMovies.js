import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button } from "@material-ui/core";
import DisplayPopularMovies from "./DisplayPopularMovies";

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

export const PopularMovies = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);

  const fetchPopularMovies = () => {
    fetch(
      `
          https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((respond) => respond.json())
      .then((data) => {
        setFetchedMovies(data.results);
      });
  };

  useEffect(() => fetchPopularMovies(), []);

  return (
    <div>
      <Container>
        <Grid container spacing={8}>
        {
          fetchedMovies.map((movie) => (
            <Grid item xs={12} sm={3}>
            <DisplayPopularMovies movie={movie}  key={movie.id}/>
            </Grid>
          ))
        }
        </Grid>

        {/* <Grid container spacing={8}>
          {fetchedMovies.map((movie) => (
            <Grid item xs={12} sm={3} key={movie.id}>
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
                  setDisableSelectedWatchList(movie.id); 
                }}
                fullWidth
              >
                Add Watch list
              </Button>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </div>
  );
};
