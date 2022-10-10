import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  let { movieId } = useParams();

  const fetchMovieDetails = () => {
    fetch(
      `
          https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
      .then((respond) => respond.json())
      .then((data) => {
        console.log("details", data);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  console.log("id", movieId);
  return <div>MovieDetails</div>;
};

export default MovieDetails;
