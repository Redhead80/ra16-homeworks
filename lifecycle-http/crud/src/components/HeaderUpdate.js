import React from 'react';

function HeaderUpdate(props) {
    const {getAllNotes} = props;

    return (
        <header>
            <h1>Notes</h1>
            <div className='update-btn' onClick={() => getAllNotes()}>
                <img className="update-btn-img" src="https://cdn-icons-png.flaticon.com/128/179/179407.png" alt='update button'/>
            </div>
        </header>

    );
}

export default HeaderUpdate;
