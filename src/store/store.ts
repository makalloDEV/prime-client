import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import playerReducer from "./player/player.slice";
import searchReducer from "./search/search.slice";

export const store = configureStore({
  reducer: { user: userReducer, player: playerReducer, search: searchReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
