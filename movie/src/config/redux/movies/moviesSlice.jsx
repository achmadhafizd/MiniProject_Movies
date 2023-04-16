import { createSlice } from "@reduxjs/toolkit";
import { retrievePopularMovies } from "./moviesThunk";

const initialState = {
  popularMovies: [],

  retrievePopularMoviesLoading: false,
  retrievePopularMoviesError: undefined,

  type: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //#region Retrieve Popular Movies
      .addCase(retrievePopularMovies.pending, (state, action) => {
        return {
          ...state,
          retrievePopularMoviesLoading: true,
          retrievePopularMoviesError: undefined,
          type: action.type,
        };
      })
      .addCase(retrievePopularMovies.fulfilled, (state, action) => {
        return {
          ...state,
          popularMovies: action.payload,
          retrievePopularMoviesLoading: false,
          retrievePopularMoviesError: undefined,
          type: action.type,
        };
      })
      .addCase(retrievePopularMovies.rejected, (state, action) => {
        return {
          ...state,
          retrievePopularMoviesLoading: false,
          retrievePopularMoviesError: action.payload,
          type: action.type,
        };
      });
    //#endregion
  },
});

export default movieSlice;
