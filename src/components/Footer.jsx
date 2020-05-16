import React from 'react';
import Button from '@material-ui/core/Button';

function Footer(props) {
  return (
    <footer>
      <Button
        onClick={props.clearAllNotes}
        variant="outlined"
        color="secondary"
      >
        Clear All Notes
      </Button>
    </footer>
  );
}

export default Footer;
