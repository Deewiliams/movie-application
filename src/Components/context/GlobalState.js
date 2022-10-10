import React, { useContext, useReducer, useEffect, createContext } from "react";
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
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addWatchListMovies,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
