import { combineReducers } from "redux";
import movieSlice from "./movies/moviesSlice";

const reducer = combineReducers({
  movies: movieSlice.reducer,
});

export default reducer;
