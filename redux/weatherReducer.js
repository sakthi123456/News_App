import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GETWEATHER } from "../services/Apiservices";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city, { rejectWithValue }) => {
    try {
        const response = await GETWEATHER(city);
        return response;
    } catch (error) {
        return rejectWithValue(error.message); 
    }
});

const weatherReducer = createSlice({
    name: "weather",
    initialState: {
        weatherData: null,
        loading: false,
        error: null,
    },
    reducers: {}, // Add normal reducers here if needed
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default weatherReducer.reducer;
