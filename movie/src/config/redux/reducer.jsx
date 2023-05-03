import { combineReducers } from "redux";
import movieSlice from "./movies/moviesSlice";
import authSlice from "./Auth/authSlice";
import detailMovieSlice from "./MoviesDetails/moviesDetailSlice";

const reducer = combineReducers({
  movies: movieSlice.reducer,
  auth: authSlice.reducer,
  moviesDetails: detailMovieSlice.reducer,
});

export default reducer;
