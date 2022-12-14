import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Button, Container, TextField,Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { truncate } from "../Utils/helpers";
import { Link } from "react-router-dom";
import MovieControls from "./MovieControls";
import TextMessage from "./TextMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50
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

const WatchList = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const { watchList } = useContext(GlobalContext);

  if (watchList.length <= 0) {
    return <TextMessage message="watch list" />;
  }

  return (
    <div className={classes.root}>
      <br />
      <Container>
      <div>
        <Typography variant="h6" >
          Watch lists
        </Typography>
      </div>
      <br />
        <Grid item xs={12}>
          <TextField
            id="outlined-helperText"
            label="search watchlist movies"
            variant="outlined"
            type="text"
            fullWidth
            placeholder="Search for watch list movies..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container spacing={3}>
          {watchList &&
            watchList
              .filter((movie) => {
                if (query === "") {
                  return movie;
                } else if (
                  movie.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return movie;
                }
              })
              .map((movie) => (
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
                    <Link
                      to={`/movie/${movie.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained" color="primary" fullWidth>
                        View Movie detail
                      </Button>
                    </Link>
                  </Card>
                  <MovieControls movie={movie} />
                </Grid>
              ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WatchList;
