import * as React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navibar } from "../../organism";
import { Carousels } from "../../molecules";
import { usePopularMoviesSelector } from "../../../config/redux/movies/moviesSelector";

function LandingPageTemplate() {
  const popularMovieList = usePopularMoviesSelector();
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;

  return (
    <div>
      <Navibar />
      <div className="bg-lime-50 dark:bg-indigo-950">
        <Carousels
          isiCarousels={popularMovieList
            .filter((movie) => movie.poster_path !== null)
            .map((movie) => (
              <img
                src={`${baseImgUrl}/${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageTemplate;
