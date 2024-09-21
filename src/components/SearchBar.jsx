import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/itemSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = useCallback((e) => {
        dispatch(setSearchTerm(e.target.value));
    }, [dispatch]);

    return (
        <input
            type="text"
            placeholder="Search items..."
            onChange={handleSearch}
            className="px-4 py-2 border rounded-md w-full"
        />
    );
};

export default React.memo(SearchBar);
