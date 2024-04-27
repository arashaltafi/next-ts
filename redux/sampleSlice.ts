import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
    name: 'sampleSlice',
    initialState: {
        sample: false,
    },
    reducers: {
        set: (state, action) => {
            state.sample = action.payload.username;
        }
    }
});

export default sampleSlice