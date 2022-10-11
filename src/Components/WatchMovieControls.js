import React,{useContext} from "react";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { GlobalContext } from "./context/GlobalState";

const WatchedMovieControls = ({movie}) => {
    const { removeFromWatched,addMovieToWatched } = useContext(GlobalContext);
  return (
    <div style={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}} >
      <p onClick={() => addMovieToWatched(movie)} variant="contained">
        <RemoveRedEyeIcon />
      </p>
      <p onClick={() => removeFromWatched(movie.id)} variant="contained" color="primary">
        <DeleteForeverIcon />
      </p>
    </div>
  );
};

export default  WatchedMovieControls 
    ;
