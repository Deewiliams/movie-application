import React, { useContext, useState } from "react";
import { GlobalContext } from "./context/GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { truncate } from "../Utils/helpers";
import { Link } from "react-router-dom";
import WatchedMovieControls from "./WatchMovieControls";
import TextMessage from "./TextMessage";
import { Container, TextField, Typography } from "@material-ui/core";

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
  const [query, setQuery] = useState("");
  const { watched } = useContext(GlobalContext);

  if (watched.length < 1) {
    return <TextMessage message="watched" />;
  }

  return (
    <div className={classes.root}>
      <br />
      <Container>
      <div>
        <Typography variant="h6" >
          Watched Movies
        </Typography>
      </div>
      <br />
        <Grid item xs={12}>
          <TextField
            id="outlined-helperText"
            label="search watched movies"
            variant="outlined"
            type="text"
            fullWidth
            placeholder="Search for watched movies..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid container spacing={3}>
          <>
            {watched &&
              watched
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
