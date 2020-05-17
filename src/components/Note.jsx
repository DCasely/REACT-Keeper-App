import React from 'react';
import DeleteIcon from '@material-ui/icons/HighlightOff';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="container">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
