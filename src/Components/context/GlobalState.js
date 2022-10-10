import React, { useReducer, useEffect, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addWatchListMovies = (movie) => {
    dispatch({ type: "ADD_MOVIES_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (id) => {
    dispatch({type: "REMOVE_MOVIE_FROM_WATCH_LIST", payload: id})
  }
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addWatchListMovies,
        removeMovieFromWatchList
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
