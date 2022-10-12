import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Grid } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { PopularMovies } from "./PopularMovies";

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

export default function Add() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((respond) => respond.json())
      .then((data) => {
        setSearchResults(data.results);
      });
  };
  
  return (
    <div className={classes.root}>
      <Container>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="outlined-helperText"
              label="search for movies"
              variant="outlined"
              type="text"
              fullWidth
              placeholder="Search for movies..."
              value={query}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </Container>

      <br />
      {searchResults.length > 0 ? (
        <Container>
          <Grid container spacing={8}>
            {searchResults.map((movie) => (
              <Grid item xs={12} sm={3}>
                <div key={movie.id}>
                  <SearchResult movie={movie} />
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <PopularMovies />
      )}
    </div>
  );
}
