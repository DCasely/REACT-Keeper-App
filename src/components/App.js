import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';

function App() {
  const [notes, setNotes] = useState([
    {
      title: 'Peter F. Drucker',
      content: 'The best way to predict the future is to create it.',
    },
    {
      title: 'Tony Robbins',
      content:
        'Setting goals is the first step in turning the invisible into the visible. The path to success is to take massive, determined action.',
    },
    {
      title: 'Jay Abraham',
      content:
        'As soon as you open your mind to doing things differently, the doors of opportunity practically fly off their hinges...',
    },
    {
      title: 'Daymond John',
      content:
        "If people haven't laughed at your dreams, then you aren't dreaming big enough, just keep pushing forwared.",
    },
  ]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function deleteAllNotes() {
    setNotes([]);
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer clearAllNotes={deleteAllNotes} />
    </div>
  );
}

export default App;
