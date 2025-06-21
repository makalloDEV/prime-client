// playerSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  createdBy: string;
  //   audioUrl: string | undefined;
  //   imageUrl: string | undefined;
}

interface PlayerState {
  currentTrack: Song | null;
  isPlaying: boolean;
  volume: number;
  queue: Song[];
  wasAddOrRemove: boolean;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
  volume: 0.75,
  queue: [],
  wasAddOrRemove: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack(state, action: PayloadAction<Song>) {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    togglePlay(state) {
      state.isPlaying = !state.isPlaying;
    },
    wasAddOrRemoveSet(state) {
      state.wasAddOrRemove = !state.wasAddOrRemove;
    },
    addToQueue(state, action: PayloadAction<Song>) {
      state.queue.push(action.payload);
    },
    nextTrack(state) {
      if (state.queue.length > 0) {
        const [nextTrack, ...rest] = state.queue;
        state.currentTrack = nextTrack;
        state.queue = rest;
      }
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const {
  setTrack,
  togglePlay,
  addToQueue,
  nextTrack,
  setVolume,
  wasAddOrRemoveSet,
} = playerSlice.actions;
export default playerSlice.reducer;
