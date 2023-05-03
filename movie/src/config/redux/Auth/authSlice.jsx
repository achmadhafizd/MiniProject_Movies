import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isSignIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),

    setSignIn: (state, action) => ({
      ...state,
      isSignIn: action.payload,
    }),
  },
});

export default authSlice;
