import React from 'react';
import NoteItem from './NoteItem';

function NotesList (props) {
    const {notes, deleteNote} = props;

    const elements = notes.map(note => <NoteItem key={note.id} note={note} deleteNote={deleteNote}/>)

    return (
        <ul className='notes-list'>
            {elements}
        </ul>
    )
}

export default NotesList;
