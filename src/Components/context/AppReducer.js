export default ( state,action) => {
    switch(action.type){
        case "ADD_MOVIES_TO_WATCHLIST":
            return {
                ...state,
                watchList: [action.payload, ...state.watchList]
            }
        default:
            return state;
    }
}