import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartIsVisible: false };

createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})