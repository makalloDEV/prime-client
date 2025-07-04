// store/slices/searchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  searchQuery: string;
}

const initialState: SearchState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload.toLowerCase();
    },
    clearSearch(state) {
      state.searchQuery = "";
    },
  },
});

export const { setSearchQuery, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
