import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherReducer";
import newsReducer from "./newsReducer";

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        news: newsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
