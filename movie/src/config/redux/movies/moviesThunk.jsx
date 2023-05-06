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

export const retrieveNowPlayingMovies = createAsyncThunk(
  "movies/retrieveNowPlayingMovies",

  async () => {
    const movie = await axios.get(
      `${baseurl}/movie/now_playing?api_key=${apikey}`
    );
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

export const RetrieveGenreMovie = createAsyncThunk(
  "movies/GenreMovie",

  async () => {
    const genre = await axios.get(
      `${baseurl}/genre/movie/list?api_key=${apikey}`
    );
    return genre.data;
  }
);

export const RetrieveUpcomingMovie = createAsyncThunk(
  "movies/UpcomingMovie",

  async () => {
    const upcom = await axios.get(
      `${baseurl}/movie/upcoming?api_key=${apikey}`
    );
    return upcom.data.results;
  }
);
