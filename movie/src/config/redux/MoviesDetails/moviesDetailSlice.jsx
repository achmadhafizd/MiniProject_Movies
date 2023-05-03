import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailMovies: [],
};

const detailMovieSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetailMovies: (state, action) => ({
      ...state,
      detailMovies: action.payload,
    }),
  },
});

export default detailMovieSlice;
