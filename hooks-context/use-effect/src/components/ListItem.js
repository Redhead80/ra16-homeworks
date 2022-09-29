import React from 'react';

function ListItem ({viewDetails, id, name}) {
    return (
        <li onClick={() => viewDetails(id)}>{name}</li>
    );
}

export default ListItem;