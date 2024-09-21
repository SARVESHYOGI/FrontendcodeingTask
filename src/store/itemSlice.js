import { createSlice } from '@reduxjs/toolkit';

const generateItems = () => {
    return Array.from({ length: 10000 }, (_, index) => `Item:${index + 1}`);
};

const initialState = {
    items: generateItems(),
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
