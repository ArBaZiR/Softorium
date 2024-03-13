//
import { configureStore } from "@reduxjs/toolkit";
// Slices
import vacancySlice from "./slices/vacancySlice";

export const store = configureStore({
  reducer: {
    vacancySlice,
  },
});
