import React from 'react';
import ListItem from "./ListItem";

 function List (props) {
    const {users, viewDetails} = props;

    return (
        <ul className='users-list'>
            {users.map(o => <ListItem key={o.id} viewDetails={viewDetails} id={o.id} name={o.name}/>)}
        </ul>
    );
}

export default List;
