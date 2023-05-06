import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchMovie } from "../../../config/redux/movies/moviesThunk";
import movieSlice from "../../../config/redux/movies/moviesSlice";
import authSlice from "../../../config/redux/Auth/authSlice";
import { useSignInSelector } from "../../../config/redux/Auth/authSelector";
import { useLogOutSuccess } from "../../../config/Toastify/Toastify";

function NavibarOrganismModel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSignInSelector();

  const handleLogout = useCallback(() => {
    dispatch(authSlice.actions.setSignIn(false));
    useLogOutSuccess();
  });

  const search = async (q) => {
    if (q.length > 2) {
      const query = await dispatch(SearchMovie(q));
      dispatch(movieSlice.actions.setSearchData(query.payload.results));
      navigate("/searchData");
    } else if (q.length === 0) {
      navigate("/");
    }
  };

  return { dispatch, navigate, isLogin, handleLogout, search };
}

export default NavibarOrganismModel;
