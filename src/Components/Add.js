import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Paper, Grid } from "@material-ui/core";

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

  const handleChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then((respond) => respond.json()).then((data) => {
        console.log('data',data)
    }
    )
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
          {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
