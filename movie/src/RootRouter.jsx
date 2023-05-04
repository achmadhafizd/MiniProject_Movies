import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  DetailPageView,
  LoginView,
  PopularMoviesView,
  RegisterView,
  SearchMovieView,
} from "./views";
import LandingPageTemplate from "./components/templates/LandingPage/LandingPage.template";
import NotFound from "./views/404/NotFound.view";

function RootRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageTemplate />}>
          <Route path="/" element={<PopularMoviesView />} />
          <Route path="searchData" element={<SearchMovieView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="DetailMovie/:id" element={<DetailPageView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default RootRouter;
