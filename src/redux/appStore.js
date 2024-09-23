import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import movieReducer from "./Slices/movieSlice";
const appStore = configureStore({
  reducer: {
    auth: authReducer,
    movie:movieReducer,
  },
});

export default appStore;
