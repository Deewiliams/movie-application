import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import DisplayPopularMovies from "./DisplayPopularMovies";

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
          {fetchedMovies.map((movie) => (
            <Grid item xs={12} sm={3}>
              <DisplayPopularMovies movie={movie} key={movie.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
