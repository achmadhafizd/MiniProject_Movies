import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGenreMovieSelector,
  useNowPlayingMoviesSelector,
  usePopularMoviesSelector,
} from "../../../config/redux/movies/moviesSelector";

function GenreMoviesTemplateView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const convertGenreId = parseInt(id, 10);
  const popularMovies = usePopularMoviesSelector();
  const NowPlayingMovies = useNowPlayingMoviesSelector();
  const listofGenre = useGenreMovieSelector();
  const { genres } = listofGenre;
  const genreMovie = genres.find((element) => element.id === convertGenreId);
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
  const ids = new Set(popularMovies.map((d) => d.id));
  const mergedMovie = [
    ...popularMovies,
    ...NowPlayingMovies.filter((d) => !ids.has(d.id)),
  ];

  return {
    convertGenreId,
    popularMovies,
    NowPlayingMovies,
    listofGenre,
    genres,
    genreMovie,
    baseImgUrl,
    mergedMovie,
    dispatch,
  };
}

export default GenreMoviesTemplateView;
