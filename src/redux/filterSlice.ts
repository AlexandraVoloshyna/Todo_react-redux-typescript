import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../types/typing";

export const initialState: FilterState = {
  filter: "all",
 
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (
      state,
      { payload }: PayloadAction<typeof initialState.filter>
    ) => {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filter.actions;
export default filter.reducer;