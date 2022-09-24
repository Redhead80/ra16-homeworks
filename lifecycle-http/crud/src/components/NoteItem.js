import React from 'react';

function NoteItem (props) {
    const {note, deleteNote} = props;

    return (
        <li className='notes-item'>
            <div className='notes-item-content'>{note.content}</div>
            <div className='delete-btn' onClick={() => deleteNote(note.id)}>
                <img className='delete-btn-img' src="https://freeiconshop.com/wp-content/uploads/edd/cross-flat.png" alt='delete button'/>
            </div>
        </li>
    );
}

export default NoteItem;
