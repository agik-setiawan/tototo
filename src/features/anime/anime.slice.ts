import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
    name: 'anime',
    initialState: {
        animeList: [],
        page: {
            perPage: 10,
            page: 1

        }
    },
    reducers: {
        setAnimeList(state, { payload }) {
            state.animeList = payload;
        },
        setPage(state, { payload }) {
            state.page = payload;
        }
    }
})

export default animeSlice;
export const { setAnimeList, setPage } = animeSlice.actions;