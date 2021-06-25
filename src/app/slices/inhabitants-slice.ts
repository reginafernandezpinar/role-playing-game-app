import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Inhabitant } from "../../types/inhabitant";
import { AppState } from "../store";

export interface InhabitantsState {
  data: Inhabitant[];
  loading: boolean;
  selectedID: number;
  search: string;
}

const initialState: InhabitantsState = {
  data: [],
  loading: true,
  selectedID: null,
  search: null,
};

export const inhabitantsSlice = createSlice({
  name: "inhabitants",
  initialState,
  reducers: {
    setInhabitants: (state, action: PayloadAction<Array<Inhabitant>>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setSelectedID: (state, action: PayloadAction<number>) => {
      state.selectedID = action.payload;
    },
    setSearch: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
  },
});

export const { setInhabitants, setSelectedID, setSearch } = inhabitantsSlice.actions;

// Selectors
export const selectInhabitants = (state: AppState) =>
  state.inhabitants;
export const selectSearch = (state: AppState) =>
  state.inhabitants.search;
export const selectFilteredInhabitants = (state: AppState) => {
  const { inhabitants } = state;
  const { search, data } = inhabitants;
  if (search) {
    return {
      ...inhabitants,
      data: data.filter(e => e.name.toLowerCase().includes(search.toLowerCase())),
    }
  } else {
    return inhabitants;
  }
}
export const selectSelectedInhabitant = (state: AppState) => 
  state.inhabitants.data.find(inhab => inhab.id === state.inhabitants.selectedID);


export default inhabitantsSlice.reducer;
