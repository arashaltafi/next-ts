import { configureStore } from '@reduxjs/toolkit';
import sampleSlice from './features/sampleSlice';

export const store = configureStore({
    reducer: {
        sampleSlice,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});