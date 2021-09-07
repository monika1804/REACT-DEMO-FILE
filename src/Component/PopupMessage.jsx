import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ASSIGN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ padding: 20, width: 300, }}>
          <DialogTitle id="alert-dialog-title">
            <Typography variant="h4">Are You Sure You want to do this?</Typography>
          </DialogTitle>
          <DialogActions style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button onClick={handleClose} color="primary" variant="outlined" size="large" >
              Open Ticket
          </Button>
            <Button onClick={handleClose} color="primary" variant="contained" size="large">
              Assign To Me
          </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
