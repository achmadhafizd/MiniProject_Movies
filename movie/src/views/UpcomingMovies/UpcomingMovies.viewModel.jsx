import { useDispatch } from "react-redux";
import { useUpcomingMovieSelector } from "../../config/redux/movies/moviesSelector";

function UpcomingMoviesViewModel() {
  const dispatch = useDispatch();
  const upcomingMovies = useUpcomingMovieSelector();
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;

  return { dispatch, upcomingMovies, baseImgUrl };
}

export default UpcomingMoviesViewModel;
