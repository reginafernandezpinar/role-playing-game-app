import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inhabitant } from "../../types/inhabitant";
import { AppState } from "../store";

export interface InhabitantsState {
  data: Inhabitant[];
  loading: boolean;
}

const initialState: InhabitantsState = {
  data: [],
  loading: false,
};

export const inhabitantsSlice = createSlice({
  name: "inhabitants",
  initialState,
  reducers: {
    setInhabitants: (state, action: PayloadAction<Array<Inhabitant>>) => {
      state.data = action.payload;
    },
  },
});

export const { setInhabitants } = inhabitantsSlice.actions;

export const selectInhabitants = (state: AppState) =>
  state.inhabitants;

export default inhabitantsSlice.reducer;
