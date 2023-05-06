import React from "react";
import PopularMovies from "../../../views/PopularMovies/PopularMovies.view";
import NowPlayingMovies from "../../../views/NowPlayingMovies/NowPlayingMovies.view";

function MoviesTemplate() {
  return (
    <div>
      <PopularMovies />
      <NowPlayingMovies />
    </div>
  );
}

export default MoviesTemplate;
