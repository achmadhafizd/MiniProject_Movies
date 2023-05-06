import { createSlice } from "@reduxjs/toolkit";
import {
  RetrieveGenreMovie,
  RetrieveUpcomingMovie,
  SearchMovie,
  retrieveNowPlayingMovies,
  retrievePopularMovies,
} from "./moviesThunk";

const initialState = {
  popularMovies: [],
  nowPlaying: [],
  genreMovies: [],
  searchMovies: [],
  searchData: [],
  upcomingMovies: [],

  retrievePopularMoviesLoading: false,
  retrievePopularMoviesError: undefined,

  retrieveNowPlayingMoviesLoading: false,
  retrieveNowPlayingMoviesError: undefined,

  SearchMovieLoading: false,
  SearchMovieError: undefined,

  GenreMovieLoading: false,
  GenreMovieError: undefined,

  RetrieveUpcomingMoviesLoading: false,
  RetrieveUpcomingMoviesError: undefined,

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

      // #region Retrieve Popular Movies
      .addCase(retrieveNowPlayingMovies.pending, (state, action) => ({
        ...state,
        retrieveNowPlayingMoviesLoading: true,
        retrieveNowPlayingMoviesError: undefined,
        type: action.type,
      }))
      .addCase(retrieveNowPlayingMovies.fulfilled, (state, action) => ({
        ...state,
        nowPlaying: action.payload,
        retrieveNowPlayingMoviesLoading: false,
        retrieveNowPlayingMoviesError: undefined,
        type: action.type,
      }))
      .addCase(retrieveNowPlayingMovies.rejected, (state, action) => ({
        ...state,
        retrieveNowPlayingMoviesLoading: false,
        retrieveNowPlayingMoviesError: action.payload,
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
      }))
      // #endregion

      // #region Genre Movies
      .addCase(RetrieveGenreMovie.pending, (state, action) => ({
        ...state,
        GenreMovieLoading: true,
        GenreMovieError: undefined,
        type: action.type,
      }))
      .addCase(RetrieveGenreMovie.fulfilled, (state, action) => ({
        ...state,
        genreMovies: action.payload,
        GenreMovieLoading: false,
        GenreMovieError: undefined,
        type: action.type,
      }))
      .addCase(RetrieveGenreMovie.rejected, (state, action) => ({
        ...state,
        GenreMovieLoading: false,
        GenreMovieError: action.payload,
        type: action.type,
      }))
      // #endregion

      // #region Upcoming Movies
      .addCase(RetrieveUpcomingMovie.pending, (state, action) => ({
        ...state,
        RetrieveUpcomingMoviesLoading: true,
        RetrieveUpcomingMoviesError: undefined,
        type: action.type,
      }))
      .addCase(RetrieveUpcomingMovie.fulfilled, (state, action) => ({
        ...state,
        upcomingMovies: action.payload,
        RetrieveUpcomingMoviesLoading: false,
        RetrieveUpcomingMoviesError: undefined,
        type: action.type,
      }))
      .addCase(RetrieveUpcomingMovie.rejected, (state, action) => ({
        ...state,
        RetrieveUpcomingMoviesLoading: false,
        RetrieveUpcomingMoviesError: action.payload,
        type: action.type,
      }));
    // #endregion
  },
});

export default movieSlice;
