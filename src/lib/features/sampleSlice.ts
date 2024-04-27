import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    isLogin: boolean;
}

const initialState: CounterState = {
    isLogin: false,
};

const sampleSlice = createSlice({
    name: 'isLogin',
    initialState,
    reducers: {
        set: (state, action) => {
            state.isLogin = action.payload;
        }
    }
});

export const { set } = sampleSlice.actions;
export default sampleSlice.reducer;