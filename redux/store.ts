import { configureStore } from '@reduxjs/toolkit';
import sampleSlice from './sampleSlice';

export const store = configureStore({
    reducer: {
        sample: sampleSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});