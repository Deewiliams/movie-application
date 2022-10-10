import React,{useContext} from "react";
import { Button } from "@material-ui/core";
import { GlobalContext } from "./context/GlobalState";

const MovieControls = ({movie}) => {
    const { removeMovieFromWatchList } = useContext(GlobalContext);
  return (
    <div>
      <Button variant="contained">Default</Button>
      <Button onClick={() => removeMovieFromWatchList(movie.id)} variant="contained" color="primary">
        X
      </Button>
    </div>
  );
};

export default MovieControls;
