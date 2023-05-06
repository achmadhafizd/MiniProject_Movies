import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdit: false,
};

const CommentSlice = createSlice({
  name: "Comment",
  initialState,
  reducers: {
    setisEdit: (state, action) => ({
      ...state,
      isEdit: action.payload,
    }),
  },
});

export default CommentSlice;
