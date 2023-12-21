import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import toastReducer from "./toast"

export default configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
  },
});