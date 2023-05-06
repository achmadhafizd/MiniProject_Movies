import React from "react";
import { Link } from "react-router-dom";
import { RatingStars } from "../../molecules";
import detailMovieSlice from "../../../config/redux/MoviesDetails/moviesDetailSlice";
import GenreMoviesTemplateView from "./GenreMovies.templateView";

function GenreMoviesTemplate() {
  const templateModel = GenreMoviesTemplateView();
  return (
    <div>
      <h1 className="flex font-bold text-green-700 text-2xl dark:text-white ms-3 pt-5 justify-items-center">
        <span className="text-red-500">|</span> Genre{" "}
        {templateModel.genreMovie.name}
      </h1>
      <div className="md:container grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 p-2 gap-10">
        {templateModel.mergedMovie
          .filter((movie) =>
            movie.genre_ids.find(
              (element) => element === templateModel.convertGenreId
            )
          )
          .filter((movie) => movie.poster_path !== null)
          .map((movie) => (
            <Link
              key={movie.id}
              className="hover:opacity-75 w-full max-w-xs bg-emerald-700 border  border-emerald-700 rounded-lg shadow dark:bg-indigo-800 dark:border-indigo-800 gap-5"
              to={`/DetailMovie/${movie.id}`}
              onClick={() =>
                templateModel.dispatch(
                  detailMovieSlice.actions.setDetailMovies(movie)
                )
              }
            >
              <div>
                <img
                  className="rounded-md w-full"
                  src={`${templateModel.baseImgUrl}/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="px-5 pb-2 flex flex-col">
                  <div className="">
                    <h5 className="text-xl truncate text-center mt-5 font-semibold tracking-tight text-lime-100 dark:text-white">
                      <Link to={`/DetailMovie/${movie.id}`}>{movie.title}</Link>
                    </h5>
                  </div>
                  <div className="mt-auto mb-3">
                    <div className="grid grid-cols-2  dark:text-white mt-3 gap-x-10 ">
                      <div className="flex items-center justify-between">
                        <RatingStars
                          vAverage={movie.vote_average}
                          vCount={`${movie.vote_count} Reviews`}
                        />
                      </div>
                      <div>
                        <p className="font-medium italic text-lime-200 dark:text-pink-400">
                          {movie.release_date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default GenreMoviesTemplate;
