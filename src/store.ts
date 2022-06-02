import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import animeSlice from "./features/anime/anime.slice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


const store = configureStore({
  reducer: {
    [animeSlice.name]: animeSlice.reducer
  },
  middleware: customizedMiddleware
})
export type RootState = ReturnType<typeof store.getState>;

export default store;