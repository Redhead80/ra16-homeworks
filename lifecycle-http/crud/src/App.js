import './App.css';
import React, {useState, useEffect} from 'react';
import HeaderUpdate from './components/HeaderUpdate';
import NotesList from './components/NotesList';
import NoteAddForm from './components/NoteAddForm';

const serverUrl = 'http://localhost:7777/notes';

function App() {
  const [notes, setNotes] = useState([]);

  const getAllNotes = () => {
      fetch(serverUrl)
          .then(response => response.json())
          .then((notes) => {
              setNotes(notes)})
  }

  useEffect(() => {
      getAllNotes()
  }, [])

  const addNote = (note) => {
      fetch(serverUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(note),
      }).then(() => getAllNotes())
  }

  const deleteNote = (id) => {
      fetch(`${serverUrl}/${id}`, {
          method: 'DELETE',
      }).then(() => getAllNotes())
  }

  return (
      <div className="App">
          <HeaderUpdate getAllNotes={getAllNotes}/>
          <NotesList notes={notes} deleteNote={deleteNote}/>
          <NoteAddForm addNote={addNote}/>
      </div>
  );
}

export default App;
