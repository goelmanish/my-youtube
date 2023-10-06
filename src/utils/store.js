import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import watchSlice from "./watchSlice";
import userLogin from "./userLogin";

const store = configureStore({
  reducer: {
    app: appSlice,
    watch: watchSlice,
    auth: userLogin,
  },
});

export default store;
