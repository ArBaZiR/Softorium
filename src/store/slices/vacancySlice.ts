//
import { createSlice } from "@reduxjs/toolkit";

const vacancySlice = createSlice({
  name: "vacancy",
  initialState: {
    allVacancy: [],
  },
  reducers: {
    setVacancy(state, action) {
      state.allVacancy = action.payload;
    },
  },
});

export const { setVacancy } = vacancySlice.actions;
export default vacancySlice.reducer;
