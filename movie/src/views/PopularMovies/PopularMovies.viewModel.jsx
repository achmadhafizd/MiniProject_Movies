import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { retrievePopularMovies } from "../../config/redux/movies/moviesThunk";
import { usePopularMoviesSelector } from "../../config/redux/movies/moviesSelector";

function PopularMoviesViewModel() {
  const dispatch = useDispatch();
  const popularMovieList = usePopularMoviesSelector();
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;

  useEffect(() => {
    dispatch(retrievePopularMovies());
  }, []);

  return { dispatch, popularMovieList, baseImgUrl };
}

export default PopularMoviesViewModel;
