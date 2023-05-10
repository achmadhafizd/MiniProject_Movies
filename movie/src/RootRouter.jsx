import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  DetailPageView,
  LoginView,
  NotFound,
  RegisterView,
  SearchMovieView,
} from "./views";
import {
  GenreMoviesTemplate,
  LandingPageTemplate,
  MoviesTemplate,
} from "./components/templates";
import UpcomingMoviesView from "./views/UpcomingMovies/UpcomingMovies.view";

function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageTemplate />}>
          <Route path="/" element={<MoviesTemplate />} />
          <Route path="searchData" element={<SearchMovieView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="DetailMovie/:id" element={<DetailPageView />} />
          <Route path="genre/:id" element={<GenreMoviesTemplate />} />
          <Route path="upcoming" element={<UpcomingMoviesView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RootRouter;
