import { createSlice } from "@reduxjs/toolkit";

const userLogin = createSlice({
  name: "auth",
  initialState: {
    userName: null,
  },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload;
    },
    logout: (state) => {
      state.userName = null;
    },
  },
});

export const { login, logout } = userLogin.actions;
export default userLogin.reducer;
