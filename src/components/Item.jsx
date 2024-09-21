import React from 'react';

const Item = React.memo(({ item }) => {
    return (
        <li className="py-2 px-4 bg-blue-100 rounded-md">{item}</li>
    );
});

export default Item;
