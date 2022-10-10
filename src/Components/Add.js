import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Paper, Grid,CardMedia } from "@material-ui/core";
import SearchResult from "./SearchResult";
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
        console.log("final results", searchResults);
      });
  };

  return (
    <div className={classes.root}>
      <Container>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                fullWidth
                value={query}
                onChange={handleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <br />
        <Grid container spacing={3}>
          <Grid item sm={12} md={3}>
        
            <Paper className={classes.paper}>
                <SearchResult searchResults={searchResults} />
                {/* {result.title}
<img src={`http://image.tmdb.org/t/p/w400${result.poster_path}`} />
                <CardMedia
        // className={classes.media}
        image={`http://image.tmdb.org/t/p/w400${result.poster_path}`}
        title={result.title}
      /> */}
                {/* poster_path */}
            </Paper>
            
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
}
