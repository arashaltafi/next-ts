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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;