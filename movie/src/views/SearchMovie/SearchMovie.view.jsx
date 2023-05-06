import React from "react";
import { Link } from "react-router-dom";
import { RatingStars } from "../../components/molecules";
import detailMovieSlice from "../../config/redux/MoviesDetails/moviesDetailSlice";
import SearchMovieViewModel from "./SearchMovie.viewModel";

function SearchMovie() {
  const viewModel = SearchMovieViewModel();
  return (
    <div className="md:container p-2 gap-3 flex flex-wrap justify-between">
      {viewModel.searchData
        .filter((movie) => movie.poster_path !== null)
        .map((movie) => (
          <div className="flex justify-between items-center hover:opacity-75">
            <Link
              to={`/DetailMovie/${movie.id}`}
              onClick={() =>
                viewModel.dispatch(
                  detailMovieSlice.actions.setDetailMovies(movie)
                )
              }
            >
              <div className="w-full max-w-xs my-3 bg-emerald-700 border border-emerald-700 rounded-lg shadow dark:bg-indigo-800 dark:border-indigo-800 gap-5 ">
                <p>
                  <img
                    className="rounded-md"
                    src={`${viewModel.baseImgUrl}/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </p>
                <div className="px-5 pb-5">
                  <div>
                    <h5 className="text-xl text-center mt-5 font-semibold tracking-tight text-lime-100 dark:text-pink-400">
                      <Link to={`/DetailMovie/${movie.id}`}>{movie.title}</Link>
                    </h5>
                  </div>
                  <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex dark:text-white mt-3 gap-x-10 ">
                      <div className="flex items-center">
                        <RatingStars
                          vAverage={movie.vote_average}
                          vCount={`${movie.vote_count} Reviews`}
                        />
                      </div>
                      <div>
                        <p className="font-medium italic text-lime-200 dark:text-white">
                          {movie.release_date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SearchMovie;
