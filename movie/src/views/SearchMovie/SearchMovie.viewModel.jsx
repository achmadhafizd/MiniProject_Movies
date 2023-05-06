import { useDispatch } from "react-redux";
import { useSearchData } from "../../config/redux/movies/moviesSelector";

function SearchMovieViewModel() {
  const dispatch = useDispatch();
  const searchData = useSearchData() || [];
  const baseImgUrl = import.meta.env.VITE_BASEIMGURL;
  return { dispatch, baseImgUrl, searchData };
}

export default SearchMovieViewModel;
