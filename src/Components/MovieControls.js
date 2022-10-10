import React,{useContext} from "react";
import { Button } from "@material-ui/core";
import { GlobalContext } from "./context/GlobalState";

const MovieControls = ({movie}) => {
    const { removeMovieFromWatchList,addMovieToWatched } = useContext(GlobalContext);
  return (
    <div>
      <Button onClick={() => addMovieToWatched(movie)} variant="contained">Default</Button>
      <Button onClick={() => removeMovieFromWatchList(movie.id)} variant="contained" color="primary">
        X
      </Button>
    </div>
  );
};

export default MovieControls;
