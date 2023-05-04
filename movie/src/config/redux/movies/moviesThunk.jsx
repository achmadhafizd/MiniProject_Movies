import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const apikey = import.meta.env.VITE_KEY;
const baseurl = import.meta.env.VITE_BASEURL;

export const retrievePopularMovies = createAsyncThunk(
  "movies/retrievePopularMovies",

  async () => {
    const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apikey}`);
    return movie.data.results;
  }
);

export const SearchMovie = createAsyncThunk(
  "movies/SearchMovie",

  async (q) => {
    const search = await axios.get(
      `${baseurl}/search/movie?api_key=${apikey}&query=${q}`
    );
    return search.data;
  }
);
