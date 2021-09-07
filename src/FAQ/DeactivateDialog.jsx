import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  MuiBackdropRoot: {
    backgroundColor: blue[100],
  },
  option: {
    display: 'flex',
    justifyContent: 'center',
  },
  DialogContent: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
});

export default function FormDialog({
  open,
  setOpen,
}) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.DialogContent} >
      <Dialog open={open} onClose={handleClose}
        style={{ backgroundColor: 'transparent', padding: '10px', }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Are you Sure You want to Deactivate?</DialogTitle>
        <Divider />
        <DialogActions className={classes.option}>
          <Button onClick={handleClose} color="primary">
            Yes
            </Button>
          <Button onClick={handleClose} color="primary">
            No
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
