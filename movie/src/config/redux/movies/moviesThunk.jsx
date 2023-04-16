import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.REACT_APP_KEY;
const base_url = process.env.REACT_APP_BASEURL;

export const retrievePopularMovies = createAsyncThunk(
  "movies/retrievePopularMovies",
  async () => {
    const res = await axios.get(`${base_url}/movie/popular?api_key${api_key}`);
    return console.log(res);
  }
);

export const SearchMovie = createAsyncThunk(
  "movies/SearchMovie",

  async (q) => {
    const res = await axios.get(q);
    return res;
  }
);
