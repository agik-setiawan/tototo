import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
    name: 'anime',
    initialState: {
        animeList: []
    },
    reducers: {
        setAnimeList(state, { payload }) {
            state.animeList = payload;
        }
    }
})

export default animeSlice;
export const {setAnimeList} = animeSlice.actions;