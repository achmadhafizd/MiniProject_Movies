import { useSelector } from "react-redux";

export const useMoviesDetailSelector = () =>
  useSelector((state) => state.moviesDetails.detailMovies);
