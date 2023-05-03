import { useSelector } from "react-redux";

export const usePopularMoviesSelector = () =>
  useSelector((state) => state.movies.popularMovies);

export const useSearchSelector = () =>
  useSelector((state) => state.movies.searchMovies);

export const useTypeSelector = () => useSelector((state) => state.movies.type);

export const useSearchData = () =>
  useSelector((state) => state.movies.searchData);
