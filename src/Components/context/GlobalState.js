import React,{useContext, useReducer, useEffect, createContext} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    watchList: [],
    watched: []
}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState )


    //actions

    const addWatchListMovies = movie => {
        dispatch({type: "ADD_MOVIES_TO_WATCHLIST", payload: movie})
    }
    return(
      <GlobalContext.Provider value={{watchList: state.watchList, watched:state.watched, addWatchListMovies}}>
        {props.children}
      </GlobalContext.Provider>  
    )
}