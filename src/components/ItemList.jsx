import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ItemList = React.memo(() => {
    const items = useSelector((state) => state.items.items);
    const searchTerm = useSelector((state) => state.items.searchTerm);

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul className="space-y-2 mt-4">
            {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => <Item key={index} item={item} />)
            ) : (
                <p className="text-gray-500">No items found</p>
            )}
        </ul>
    );
});

export default ItemList;
