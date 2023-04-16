import * as React from "react";
import Cards from "../../components/organism/Card/Cards.oragnism";
import Navibar from "../../components/organism/Navbar/Navibar.organism";
import NavV3 from "../../components/organism/Navbar/NavV3";
import { NavTemp } from "../../components/organism";
import {
  usePopularMoviesSelector,
  usePopularMoviesTypeSelector,
} from "../../config/redux/movies/moviesSelector";
import { useDispatch } from "react-redux";
import { retrievePopularMovies } from "../../config/redux/movies/moviesThunk";

const LandingPage = () => {
  const popularMovies = usePopularMoviesSelector();
  const popularMoviesType = usePopularMoviesTypeSelector();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(retrievePopularMovies());
  }, []);
  return (
    <div>
      {/* <NavV3 /> */}
      {/* <NavTemp /> */}
      <Navibar />
      <Cards />
    </div>
  );
};

export default LandingPage;
