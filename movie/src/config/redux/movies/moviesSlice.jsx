import { createSlice } from "@reduxjs/toolkit";
import { SearchMovie, retrievePopularMovies } from "./moviesThunk";

const initialState = {
  popularMovies: [],
  searchMovies: [],
  searchData: [],

  retrievePopularMoviesLoading: false,
  retrievePopularMoviesError: undefined,

  SearchMovieLoading: false,
  SearchMovieError: undefined,

  type: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearchData: (state, action) => ({
      ...state,
      searchData: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      // #region Retrieve Popular Movies
      .addCase(retrievePopularMovies.pending, (state, action) => ({
        ...state,
        retrievePopularMoviesLoading: true,
        retrievePopularMoviesError: undefined,
        type: action.type,
      }))
      .addCase(retrievePopularMovies.fulfilled, (state, action) => ({
        ...state,
        popularMovies: action.payload,
        retrievePopularMoviesLoading: false,
        retrievePopularMoviesError: undefined,
        type: action.type,
      }))
      .addCase(retrievePopularMovies.rejected, (state, action) => ({
        ...state,
        retrievePopularMoviesLoading: false,
        retrievePopularMoviesError: action.payload,
        type: action.type,
      }))
      // #endregion

      // #region Search Movies
      .addCase(SearchMovie.pending, (state, action) => ({
        ...state,
        SearchMovieLoading: true,
        SearchMovieError: undefined,
        type: action.type,
      }))
      .addCase(SearchMovie.fulfilled, (state, action) => ({
        ...state,
        searchMovies: action.payload,
        SearchMovieLoading: false,
        SearchMovieError: undefined,
        type: action.type,
      }))
      .addCase(SearchMovie.rejected, (state, action) => ({
        ...state,
        SearchMovieLoading: false,
        SearchMovieError: action.payload,
        type: action.type,
      }));
    // #endregion
  },
});

export default movieSlice;
