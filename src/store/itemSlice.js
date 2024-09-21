import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: ["sarvesh", "sarang", "raj", "satish", "ganesh"],
    searchTerm: '',
};

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
});

export const { setSearchTerm } = itemSlice.actions;
export default itemSlice.reducer;
