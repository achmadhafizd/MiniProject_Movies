import { useSelector } from "react-redux";

export const usePopularMoviesSelector = () =>
  useSelector((state) => state.movies.popularMovies);

export const useNowPlayingMoviesSelector = () =>
  useSelector((state) => state.movies.nowPlaying);

export const useGenreMovieSelector = () =>
  useSelector((state) => state.movies.genreMovies);

export const useUpcomingMovieSelector = () =>
  useSelector((state) => state.movies.upcomingMovies);

export const useSearchSelector = () =>
  useSelector((state) => state.movies.searchMovies);

export const useTypeSelector = () => useSelector((state) => state.movies.type);

export const useSearchData = () =>
  useSelector((state) => state.movies.searchData);
