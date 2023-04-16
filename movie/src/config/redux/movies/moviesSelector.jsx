import { useSelector } from "react-redux";

export const usePopularMoviesSelector = () => {
  useSelector((state) => state.movies.popularMovies);
};
export const usePopularMoviesTypeSelector = () => {
  useSelector((state) => state.movies.type);
};
