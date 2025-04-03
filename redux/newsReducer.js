import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GETNEWS } from "../services/Apiservices";

export const fetchNews = createAsyncThunk("news/fetchNews", async (_, { rejectWithValue }) => {
    try {
        const data = await GETNEWS();
        return data.articles;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const newsReducer = createSlice({
    name: "news",
    initialState: {
        articles: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default newsReducer.reducer;
