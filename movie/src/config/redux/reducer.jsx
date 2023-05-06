import { combineReducers } from "redux";
import movieSlice from "./movies/moviesSlice";
import authSlice from "./Auth/authSlice";
import detailMovieSlice from "./MoviesDetails/moviesDetailSlice";
import CommentSlice from "./Comments/komenSlice";

const reducer = combineReducers({
  movies: movieSlice.reducer,
  auth: authSlice.reducer,
  moviesDetails: detailMovieSlice.reducer,
  editKomen: CommentSlice.reducer,
});

export default reducer;
