import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNowPlayingMoviesSelector } from "../../config/redux/movies/moviesSelector";
import {
  RetrieveGenreMovie,
  RetrieveUpcomingMovie,
  retrieveNowPlayingMovies,
} from "../../config/redux/movies/moviesThunk";

function NowPlayingMoviesViewModel() {
  const dispatch = useDispatch();
  const nowPlayingMovieList = useNowPlayingMoviesSelector();
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;

  useEffect(() => {
    dispatch(retrieveNowPlayingMovies());
    dispatch(RetrieveGenreMovie());
    dispatch(RetrieveUpcomingMovie());
  }, []);

  return { dispatch, nowPlayingMovieList, baseImgUrl };
}

export default NowPlayingMoviesViewModel;
