import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IRequestSongData, IResponseSongData, IUser } from "@/types";

// Define a type for the slice state
interface UserState {
  user: IUser | null;
  isAuth: boolean;
  search: IResponseSongData[];
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  isAuth: false,
  search: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions: PayloadAction<IUser>) => {
      state.user = actions.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
    searchCollection: (state, payload: PayloadAction<IResponseSongData[]>) => {
      state.search = payload.payload;
    },
  },
});

export const { login, logout, searchCollection } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
